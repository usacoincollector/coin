import { NextResponse } from 'next/server';
import { createRouteClient } from '@/lib/supabase-route';
import { coinInputSchema } from '@/lib/validation';

const coinSchema = coinInputSchema;

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
