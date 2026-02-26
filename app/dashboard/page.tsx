import Link from 'next/link';
import { COIN_IMAGE_BUCKET, isAbsoluteUrl, normalizeCoinImageRef } from '@/lib/coin-images';
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
    .select('id, name, year, mint_mark, purchase_price, estimated_value, storage_location, notes, image_urls')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  const allCoins = coins ?? [];
  const totalCoins = allCoins.length;
  const totalPurchaseValue = allCoins.reduce((sum, coin) => sum + Number(coin.purchase_price || 0), 0);
  const totalEstimatedValue = allCoins.reduce((sum, coin) => sum + Number(coin.estimated_value || 0), 0);

  const allStoragePaths = Array.from(
    new Set(
      allCoins
        .flatMap((coin) => (coin.image_urls || []).map((value: string) => normalizeCoinImageRef(value)))
        .filter((value: string) => value && !isAbsoluteUrl(value))
    )
  );

  const signedUrlByPath = new Map<string, string>();

  if (allStoragePaths.length > 0) {
    const { data: signedData } = await supabase.storage.from(COIN_IMAGE_BUCKET).createSignedUrls(allStoragePaths, 60 * 60);
    signedData?.forEach((item, index) => {
      if (item?.signedUrl) {
        signedUrlByPath.set(allStoragePaths[index], item.signedUrl);
      }
    });
  }

  const coinsWithDisplayImages = allCoins.map((coin) => {
    const imageUrls = (coin.image_urls || [])
      .map((value: string) => normalizeCoinImageRef(value))
      .map((value: string) => (isAbsoluteUrl(value) ? value : signedUrlByPath.get(value) || ''))
      .filter(Boolean);

    return { ...coin, image_urls: imageUrls };
  });

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
          <p className="mt-3 text-sm text-gray-600">Total Estimated Value</p>
          <p className="text-2xl font-semibold">{formatCurrency(totalEstimatedValue)}</p>
        </article>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {coinsWithDisplayImages.length === 0 && (
          <div className="rounded-lg border border-dashed border-line bg-white p-6 text-sm text-gray-600">No coins added yet.</div>
        )}

        {coinsWithDisplayImages.map((coin) => (
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
                <dd>{coin.estimated_value != null ? formatCurrency(Number(coin.estimated_value)) : '-'}</dd>
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
