import { NextResponse } from 'next/server';
import Papa from 'papaparse';
import { createRouteClient } from '@/lib/supabase-route';

export async function GET() {
  const supabase = createRouteClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data: coins, error } = await supabase
    .from('coins')
    .select('name, year, mint_mark, purchase_price, estimated_value, storage_location, notes, created_at, updated_at')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  const csv = Papa.unparse(coins);

  return new NextResponse(csv, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv',
      'Content-Disposition': 'attachment; filename="coin-shield-export.csv"'
    }
  });
}
