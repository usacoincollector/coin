import { NextResponse } from 'next/server';
import Papa from 'papaparse';
import { createRouteClient } from '@/lib/supabase-route';

function toDateOnly(value: string | null) {
  if (!value) return '';
  return value.split('T')[0] || '';
}

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

  const exportRows = (coins ?? []).map((coin) => ({
    name: coin.name,
    year: coin.year,
    mint_mark: coin.mint_mark,
    purchase_price: coin.purchase_price,
    estimated_value: coin.estimated_value,
    storage_location: coin.storage_location,
    notes: coin.notes,
    Created_On: toDateOnly(coin.created_at),
    Updated_On: toDateOnly(coin.updated_at)
  }));

  const csv = Papa.unparse(exportRows);

  return new NextResponse(csv, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv',
      'Content-Disposition': 'attachment; filename="coin-shield-export.csv"'
    }
  });
}
