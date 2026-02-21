import Link from 'next/link';
import { createServerClient } from '@/lib/supabase-server';
import { formatCurrency } from '@/lib/utils';
import { DeleteCoinButton } from '@/components/delete-coin-button';
import { LogoutButton } from '@/components/logout-button';

export default async function DashboardPage() {
  const supabase = createServerClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data: coins, error } = await supabase
    .from('coins')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  const totalCoins = coins.length;
  const totalPurchaseValue = coins.reduce((sum, coin) => sum + Number(coin.purchase_price || 0), 0);

  return (
    <section className="space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Your Collection</h1>
          <p className="text-sm text-gray-600">Track and manage your coins.</p>
        </div>
        <div className="flex gap-2">
          <Link className="bg-accent px-4 py-2 text-sm font-medium text-white" href="/dashboard/coins/new">
            Add Coin
          </Link>
          <Link className="px-4 py-2 text-sm font-medium" href="/api/coins/export">
            Export CSV
          </Link>
          <LogoutButton />
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-lg border border-line bg-surface p-4">
          <p className="text-sm text-gray-600">Total Coins</p>
          <p className="text-2xl font-semibold">{totalCoins}</p>
        </article>
        <article className="rounded-lg border border-line bg-surface p-4">
          <p className="text-sm text-gray-600">Total Purchase Value</p>
          <p className="text-2xl font-semibold">{formatCurrency(totalPurchaseValue)}</p>
        </article>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {coins.length === 0 && (
          <div className="rounded-lg border border-dashed border-line bg-white p-6 text-sm text-gray-600">
            No coins added yet.
          </div>
        )}

        {coins.map((coin) => (
          <article className="rounded-lg border border-line bg-white p-4" key={coin.id}>
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold">{coin.name}</h2>
                <p className="text-sm text-gray-600">
                  {coin.year}
                  {coin.mint_mark ? ` • ${coin.mint_mark}` : ''}
                </p>
              </div>
              <div className="flex gap-2">
                <Link className="px-3 py-1 text-sm" href={`/dashboard/coins/${coin.id}/edit`}>
                  Edit
                </Link>
                <DeleteCoinButton id={coin.id} />
              </div>
            </div>
            <dl className="space-y-1 text-sm">
              <div className="flex justify-between gap-2">
                <dt className="text-gray-600">Purchase</dt>
                <dd>{formatCurrency(Number(coin.purchase_price || 0))}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-gray-600">Estimated</dt>
                <dd>{coin.estimated_value ? formatCurrency(Number(coin.estimated_value)) : '-'}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-gray-600">Storage</dt>
                <dd>{coin.storage_location}</dd>
              </div>
            </dl>
            {coin.notes && <p className="mt-3 text-sm text-gray-700">{coin.notes}</p>}

            {coin.image_urls?.length > 0 && (
              <div className="mt-3 grid grid-cols-3 gap-2">
                {coin.image_urls.map((url: string) => (
                  <img alt={coin.name} className="h-20 w-full rounded-md object-cover" key={url} src={url} />
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
