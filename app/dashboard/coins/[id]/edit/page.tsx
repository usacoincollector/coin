import { notFound } from 'next/navigation';
import Link from 'next/link';
import { COIN_IMAGE_BUCKET, isAbsoluteUrl, normalizeCoinImageRef } from '@/lib/coin-images';
import { createServerClient } from '@/lib/supabase-server';
import { CoinForm } from '@/components/coin-form';

export default async function EditCoinPage({ params }: { params: { id: string } }) {
  const supabase = createServerClient();
  const { data: coin, error } = await supabase
    .from('coins')
    .select('id, name, year, mint_mark, purchase_price, estimated_value, storage_location, notes, image_urls')
    .eq('id', params.id)
    .single();

  if (error || !coin) {
    notFound();
  }

  const normalizedImageRefs = (coin.image_urls || []).map((value: string) => normalizeCoinImageRef(value)).filter(Boolean);
  const storagePaths = normalizedImageRefs.filter((value: string) => !isAbsoluteUrl(value));
  const signedUrlMap = new Map<string, string>();

  if (storagePaths.length > 0) {
    const { data: signedData } = await supabase.storage.from(COIN_IMAGE_BUCKET).createSignedUrls(storagePaths, 60 * 60);
    signedData?.forEach((item, index) => {
      if (item?.signedUrl) {
        signedUrlMap.set(storagePaths[index], item.signedUrl);
      }
    });
  }

  const previewMap: Record<string, string> = {};
  normalizedImageRefs.forEach((value: string) => {
    previewMap[value] = isAbsoluteUrl(value) ? value : signedUrlMap.get(value) || '';
  });

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
          estimated_value: coin.estimated_value != null ? Number(coin.estimated_value) : undefined,
          storage_location: coin.storage_location,
          notes: coin.notes || '',
          image_urls: normalizedImageRefs
        }}
        initialImagePreviewUrls={previewMap}
      />
    </section>
  );
}
