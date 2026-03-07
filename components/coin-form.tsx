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
  const isValidYearFormat = (value: string) => /^\d{4}$/.test(value);
  const getImageName = (url: string) => {
    const withoutQuery = url.split('?')[0] || url;
    const lastSegment = withoutQuery.split('/').pop() || url;
    return decodeURIComponent(lastSegment);
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [yearError, setYearError] = useState('');
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
    setYearError('');

    if (!isValidYearFormat(year)) {
      setYearError('Year must be exactly 4 digits.');
      setLoading(false);
      return;
    }

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
          <input
            id="year"
            inputMode="numeric"
            maxLength={4}
            onBlur={() => setYearError(isValidYearFormat(year) ? '' : 'Year must be exactly 4 digits.')}
            onChange={(e) => {
              const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 4);
              setYear(digitsOnly);
              if (yearError) {
                setYearError(isValidYearFormat(digitsOnly) ? '' : 'Year must be exactly 4 digits.');
              }
            }}
            pattern="\d{4}"
            required
            type="text"
            value={year}
          />
          {yearError && <p className="text-sm text-red-600">{yearError}</p>}
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
        <label htmlFor="images">Images (up to 3 total)</label>
        <input
          accept="image/*"
          disabled={!canUploadMore}
          id="images"
          multiple
          onChange={(e) => {
            const incoming = Array.from(e.target.files || []);
            setFiles((curr) => [...curr, ...incoming].slice(0, 3 - imageUrls.length));
            e.currentTarget.value = '';
          }}
          type="file"
        />
        {(imageUrls.length > 0 || files.length > 0) && (
          <ul className="space-y-1">
            {imageUrls.map((url) => (
              <li className="flex items-center justify-between rounded-md border border-line px-3 py-2 text-sm" key={url}>
                <span className="truncate">{getImageName(url)}</span>
                <button
                  aria-label={`Remove ${getImageName(url)}`}
                  className="border-0 bg-transparent px-1 py-0 text-base leading-none text-red-600"
                  onClick={() => setImageUrls((curr) => curr.filter((u) => u !== url))}
                  type="button"
                >
                  x
                </button>
              </li>
            ))}
            {files.map((file, index) => (
              <li
                className="flex items-center justify-between rounded-md border border-line px-3 py-2 text-sm"
                key={`${file.name}-${file.size}-${file.lastModified}`}
              >
                <span className="truncate">{file.name}</span>
                <button
                  aria-label={`Remove ${file.name}`}
                  className="border-0 bg-transparent px-1 py-0 text-base leading-none text-red-600"
                  onClick={() => setFiles((curr) => curr.filter((_, i) => i !== index))}
                  type="button"
                >
                  x
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button className="bg-accent font-medium text-white" disabled={loading} type="submit">
        {loading ? 'Saving...' : mode === 'create' ? 'Add Coin' : 'Save Changes'}
      </button>
    </form>
  );
}
