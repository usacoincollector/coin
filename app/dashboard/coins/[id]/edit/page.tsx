import { notFound } from 'next/navigation';
import Link from 'next/link';
import { createServerClient } from '@/lib/supabase-server';
import { CoinForm } from '@/components/coin-form';

export default async function EditCoinPage({ params }: { params: { id: string } }) {
  const supabase = createServerClient();
  const { data: coin, error } = await supabase.from('coins').select('*').eq('id', params.id).single();

  if (error || !coin) {
    notFound();
  }

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Edit Coin</h1>
        <Link className="text-sm" href="/dashboard">
          Back to dashboard
        </Link>
      </div>
      <CoinForm
        mode="edit"
        initialValue={{
          id: coin.id,
          name: coin.name,
          year: coin.year,
          mint_mark: coin.mint_mark || '',
          purchase_price: Number(coin.purchase_price),
          estimated_value: coin.estimated_value ? Number(coin.estimated_value) : undefined,
          storage_location: coin.storage_location,
          notes: coin.notes || '',
          image_urls: coin.image_urls || []
        }}
      />
    </section>
  );
}
