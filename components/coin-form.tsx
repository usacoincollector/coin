'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { coinInputSchema, type CoinInput } from '@/lib/validation';

type CoinFormProps = {
  mode: 'create' | 'edit';
  initialValue?: Partial<CoinInput> & { id?: string };
};

export function CoinForm({ mode, initialValue }: CoinFormProps) {
  const router = useRouter();
  const formatMoney = (value: number | null | undefined) => (typeof value === 'number' ? value.toFixed(2) : '');
  const isMoneyInput = (value: string) => /^\d*(\.\d{0,2})?$/.test(value);
  const cleanMoneyInput = (value: string) => {
    const digitsAndDots = value.replace(/[^\d.]/g, '');
    const firstDotIndex = digitsAndDots.indexOf('.');
    if (firstDotIndex === -1) {
      return digitsAndDots;
    }
    return `${digitsAndDots.slice(0, firstDotIndex + 1)}${digitsAndDots
      .slice(firstDotIndex + 1)
      .replace(/\./g, '')}`;
  };
  const updateMoney = (value: string, setter: (next: string) => void) => {
    const cleaned = cleanMoneyInput(value);
    if (isMoneyInput(cleaned)) {
      setter(cleaned);
    }
  };
  const normalizeMoney = (value: string) => {
    if (!value.trim()) return '';
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed.toFixed(2) : '';
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [name, setName] = useState(initialValue?.name || '');
  const [year, setYear] = useState(initialValue?.year?.toString() || '');
  const [mintMark, setMintMark] = useState(initialValue?.mint_mark || '');
  const [purchasePrice, setPurchasePrice] = useState(formatMoney(initialValue?.purchase_price));
  const [estimatedValue, setEstimatedValue] = useState(formatMoney(initialValue?.estimated_value));
  const [storageLocation, setStorageLocation] = useState(initialValue?.storage_location || '');
  const [notes, setNotes] = useState(initialValue?.notes || '');
  const [imageUrls, setImageUrls] = useState<string[]>(initialValue?.image_urls || []);
  const [files, setFiles] = useState<File[]>([]);

  const canUploadMore = useMemo(() => imageUrls.length + files.length < 3, [imageUrls.length, files.length]);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      let mergedImageUrls = [...imageUrls];

      if (files.length > 0) {
        const data = new FormData();
        files.forEach((f) => data.append('files', f));

        const uploadResponse = await fetch('/api/upload', { method: 'POST', body: data });
        const uploadJson = await uploadResponse.json();

        if (!uploadResponse.ok) {
          throw new Error(uploadJson.error || 'Image upload failed.');
        }

        mergedImageUrls = [...mergedImageUrls, ...uploadJson.urls];
      }

      const parsed = coinInputSchema.safeParse({
        name,
        year: Number(year),
        mint_mark: mintMark,
        purchase_price: Number(purchasePrice),
        estimated_value: estimatedValue ? Number(estimatedValue) : null,
        storage_location: storageLocation,
        notes,
        image_urls: mergedImageUrls
      });

      if (!parsed.success) {
        throw new Error('Please check your form values and try again.');
      }

      const endpoint = mode === 'create' ? '/api/coins' : `/api/coins/${initialValue?.id}`;
      const method = mode === 'create' ? 'POST' : 'PATCH';

      const response = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data)
      });

      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.error || 'Request failed.');
      }

      router.push('/dashboard');
      router.refresh();
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unexpected error.';
      setError(message);
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4 rounded-lg border border-line bg-white p-4" onSubmit={submit}>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label className="flex min-h-10 items-end" htmlFor="name">
            Coin Name
          </label>
          <input id="name" onChange={(e) => setName(e.target.value)} required value={name} />
        </div>
        <div className="space-y-1">
          <label className="flex min-h-10 items-end" htmlFor="year">
            Year
          </label>
          <input id="year" onChange={(e) => setYear(e.target.value)} required type="number" value={year} />
        </div>
        <div className="space-y-1">
          <label className="flex min-h-10 items-end" htmlFor="mint">
            Mint Mark (optional)
          </label>
          <input id="mint" onChange={(e) => setMintMark(e.target.value)} value={mintMark} />
        </div>
        <div className="space-y-1">
          <label className="flex min-h-10 items-end" htmlFor="purchase">
            Purchase Price
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">$</span>
            <input
              className="pl-8"
              id="purchase"
              inputMode="decimal"
              onBlur={(e) => setPurchasePrice(normalizeMoney(e.target.value))}
              onChange={(e) => updateMoney(e.target.value, setPurchasePrice)}
              placeholder="0.00"
              required
              type="text"
              value={purchasePrice}
            />
          </div>
        </div>
        <div className="space-y-1">
          <label className="flex min-h-10 items-end" htmlFor="estimated">
            <span>
              Current Estimated Value
              <br />
              (optional)
            </span>
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">$</span>
            <input
              className="pl-8"
              id="estimated"
              inputMode="decimal"
              onBlur={(e) => setEstimatedValue(normalizeMoney(e.target.value))}
              onChange={(e) => updateMoney(e.target.value, setEstimatedValue)}
              placeholder="0.00"
              type="text"
              value={estimatedValue}
            />
          </div>
        </div>
        <div className="space-y-1">
          <label className="flex min-h-10 items-end" htmlFor="storage">
            Storage Location
          </label>
          <input id="storage" onChange={(e) => setStorageLocation(e.target.value)} required value={storageLocation} />
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="notes">Notes</label>
        <textarea id="notes" onChange={(e) => setNotes(e.target.value)} rows={4} value={notes} />
      </div>

      <div className="space-y-2">
        <label htmlFor="images">Images (1-3 total)</label>
        <input
          accept="image/*"
          disabled={!canUploadMore}
          id="images"
          multiple
          onChange={(e) => setFiles(Array.from(e.target.files || []).slice(0, 3 - imageUrls.length))}
          type="file"
        />
        {imageUrls.length > 0 && (
          <div className="grid grid-cols-3 gap-2">
            {imageUrls.map((url) => (
              <div className="relative" key={url}>
                <img alt="Coin" className="h-20 w-full rounded-md object-cover" src={url} />
                <button
                  className="absolute right-1 top-1 border-0 bg-white px-1 py-0 text-xs"
                  onClick={() => setImageUrls((curr) => curr.filter((u) => u !== url))}
                  type="button"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button className="bg-accent font-medium text-white" disabled={loading} type="submit">
        {loading ? 'Saving...' : mode === 'create' ? 'Add Coin' : 'Save Changes'}
      </button>
    </form>
  );
}
