import { NextResponse } from 'next/server';
import { createRouteClient } from '@/lib/supabase-route';
import { coinInputSchema } from '@/lib/validation';

const coinSchema = coinInputSchema;

export async function POST(request: Request) {
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

  const { error } = await supabase.from('coins').insert({
    user_id: user.id,
    name: payload.name,
    year: payload.year,
    mint_mark: payload.mint_mark || null,
    purchase_price: payload.purchase_price,
    estimated_value: payload.estimated_value ?? null,
    storage_location: payload.storage_location,
    notes: payload.notes || null,
    image_urls: payload.image_urls
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
