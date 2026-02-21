import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createRouteClient } from '@/lib/supabase-route';

const coinSchema = z.object({
  name: z.string().trim().min(1).max(120),
  year: z.number().int().min(1000).max(3000),
  mint_mark: z.string().trim().max(24).optional().or(z.literal('')),
  purchase_price: z.number().nonnegative(),
  estimated_value: z.number().nonnegative().optional().nullable(),
  storage_location: z.string().trim().min(1).max(120),
  notes: z.string().trim().max(5000).optional().or(z.literal('')),
  image_urls: z.array(z.string().url()).min(0).max(3)
});

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const supabase = createRouteClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const parsed = coinSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const payload = parsed.data;

  const { error } = await supabase
    .from('coins')
    .update({
      name: payload.name,
      year: payload.year,
      mint_mark: payload.mint_mark || null,
      purchase_price: payload.purchase_price,
      estimated_value: payload.estimated_value ?? null,
      storage_location: payload.storage_location,
      notes: payload.notes || null,
      image_urls: payload.image_urls,
      updated_at: new Date().toISOString()
    })
    .eq('id', params.id)
    .eq('user_id', user.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  const supabase = createRouteClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { error } = await supabase.from('coins').delete().eq('id', params.id).eq('user_id', user.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
