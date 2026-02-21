create extension if not exists pgcrypto;

-- Create coins table
create table if not exists public.coins (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  year integer not null,
  mint_mark text,
  purchase_price numeric not null,
  estimated_value numeric,
  storage_location text not null,
  notes text,
  image_urls text[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Keep updated_at fresh
create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists coins_set_updated_at on public.coins;
create trigger coins_set_updated_at
before update on public.coins
for each row
execute function public.handle_updated_at();

-- Enable RLS
alter table public.coins enable row level security;

-- RLS policies
drop policy if exists "users_select_own_coins" on public.coins;
drop policy if exists "users_insert_own_coins" on public.coins;
drop policy if exists "users_update_own_coins" on public.coins;
drop policy if exists "users_delete_own_coins" on public.coins;

create policy "users_select_own_coins"
on public.coins
for select
using (auth.uid() = user_id);

create policy "users_insert_own_coins"
on public.coins
for insert
with check (auth.uid() = user_id);

create policy "users_update_own_coins"
on public.coins
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "users_delete_own_coins"
on public.coins
for delete
using (auth.uid() = user_id);

-- Storage bucket and policy
insert into storage.buckets (id, name, public)
values ('coin-images', 'coin-images', true)
on conflict (id) do nothing;

drop policy if exists "public_can_view_coin_images" on storage.objects;
drop policy if exists "users_upload_own_coin_images" on storage.objects;
drop policy if exists "users_delete_own_coin_images" on storage.objects;

create policy "public_can_view_coin_images"
on storage.objects
for select
using (bucket_id = 'coin-images');

create policy "users_upload_own_coin_images"
on storage.objects
for insert
with check (
  bucket_id = 'coin-images'
  and auth.uid()::text = (storage.foldername(name))[1]
);

create policy "users_delete_own_coin_images"
on storage.objects
for delete
using (
  bucket_id = 'coin-images'
  and auth.uid()::text = (storage.foldername(name))[1]
);
