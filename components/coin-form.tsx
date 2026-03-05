'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { coinInputSchema, type CoinInput } from '@/lib/validation';

type CoinFormProps = {
  mode: 'create' | 'edit';
  initialValue?: Partial<CoinInput> & { id?: string };
  initialImagePreviewUrls?: Record<string, string>;
};

export function CoinForm({ mode, initialValue, initialImagePreviewUrls = {} }: CoinFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [name, setName] = useState(initialValue?.name || '');
  const [year, setYear] = useState(initialValue?.year?.toString() || '');
  const [mintMark, setMintMark] = useState(initialValue?.mint_mark || '');
  const [purchasePrice, setPurchasePrice] = useState(initialValue?.purchase_price?.toString() || '');
  const [estimatedValue, setEstimatedValue] = useState(initialValue?.estimated_value?.toString() || '');
  const [storageLocation, setStorageLocation] = useState(initialValue?.storage_location || '');
  const [notes, setNotes] = useState(initialValue?.notes || '');
  const [imagePaths, setImagePaths] = useState<string[]>(initialValue?.image_urls || []);
  const [imagePreviewUrls, setImagePreviewUrls] = useState<Record<string, string>>(initialImagePreviewUrls);
  const [files, setFiles] = useState<File[]>([]);
  const [yearError, setYearError] = useState('');

  const canUploadMore = useMemo(() => imagePaths.length + files.length < 3, [imagePaths.length, files.length]);
  const validateYear = (value: string) => /^\d{4}$/.test(value) && Number(value) >= 1000 && Number(value) <= 3000;

  const onYearChange = (nextValue: string) => {
    const yearDigitsOnly = nextValue.replace(/\D/g, '').slice(0, 4);
    setYear(yearDigitsOnly);
    if (yearError && validateYear(yearDigitsOnly)) {
      setYearError('');
    }
  };

  const onYearBlur = () => {
    if (!validateYear(year)) {
      setYearError('Please enter year in YYYY format.');
      return;
    }
    setYearError('');
  };

  const onFilesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    const availableSlots = 3 - imagePaths.length - files.length;
    if (availableSlots <= 0 || selectedFiles.length === 0) {
      event.target.value = '';
      return;
    }

    setFiles((currentFiles) => [...currentFiles, ...selectedFiles.slice(0, availableSlots)]);
    event.target.value = '';
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    if (!validateYear(year)) {
      setYearError('Please enter year in YYYY format.');
      setError('Please enter a valid year in YYYY format.');
      setLoading(false);
      return;
    }

    try {
      let mergedImagePaths = [...imagePaths];

      if (files.length > 0) {
        const data = new FormData();
        files.forEach((f) => data.append('files', f));

        const uploadResponse = await fetch('/api/upload', { method: 'POST', body: data });
        const uploadJson = await uploadResponse.json();

        if (!uploadResponse.ok) {
          throw new Error(uploadJson.error || 'Image upload failed.');
        }

        mergedImagePaths = [...mergedImagePaths, ...(uploadJson.paths || [])];
      }

      const parsed = coinInputSchema.safeParse({
        name,
        year: Number(year),
        mint_mark: mintMark,
        purchase_price: Number(purchasePrice),
        estimated_value: estimatedValue ? Number(estimatedValue) : null,
        storage_location: storageLocation,
        notes,
        image_urls: mergedImagePaths
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
          <label htmlFor="name">Coin Name *</label>
          <input id="name" onChange={(e) => setName(e.target.value)} required value={name} />
        </div>
        <div className="space-y-1">
          <label htmlFor="year">Year *</label>
          <div className="flex items-center gap-2">
            <input
              id="year"
              inputMode="numeric"
              maxLength={4}
              onBlur={onYearBlur}
              onChange={(e) => onYearChange(e.target.value)}
              pattern="\d{4}"
              required
              type="text"
              value={year}
            />
            <span className="text-xs italic text-gray-500">YYYY</span>
          </div>
          {yearError && <p className="text-sm text-red-600">{yearError}</p>}
        </div>
        <div className="space-y-1">
          <label htmlFor="mint">Mint Mark (optional)</label>
          <input id="mint" onChange={(e) => setMintMark(e.target.value)} value={mintMark} />
        </div>
        <div className="space-y-1">
          <label htmlFor="purchase">Purchase Price *</label>
          <input
            id="purchase"
            min="0"
            onChange={(e) => setPurchasePrice(e.target.value)}
            required
            step="0.01"
            type="number"
            value={purchasePrice}
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="storage">Storage Location *</label>
          <input id="storage" onChange={(e) => setStorageLocation(e.target.value)} required value={storageLocation} />
        </div>
        <div className="space-y-1">
          <label htmlFor="estimated">Current Estimated Value (optional)</label>
          <input
            id="estimated"
            min="0"
            onChange={(e) => setEstimatedValue(e.target.value)}
            step="0.01"
            type="number"
            value={estimatedValue}
          />
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="notes">Notes (optional)</label>
        <textarea id="notes" onChange={(e) => setNotes(e.target.value)} rows={4} value={notes} />
      </div>

      <div className="space-y-2">
        <label htmlFor="images">Images (Up to 3 total)</label>
        <input
          accept="image/*"
          disabled={!canUploadMore}
          id="images"
          multiple
          onChange={onFilesChange}
          type="file"
        />
        {files.length > 0 && (
          <div className="space-y-1 rounded-md border border-line bg-gray-50 p-2">
            {files.map((file, index) => (
              <div className="flex items-center justify-between gap-2 text-sm" key={`${file.name}-${file.lastModified}-${index}`}>
                <span className="truncate">{file.name}</span>
                <button
                  className="border-0 bg-transparent px-1 py-0 text-sm text-red-600"
                  onClick={() => setFiles((curr) => curr.filter((_, fileIndex) => fileIndex !== index))}
                  type="button"
                >
                  x
                </button>
              </div>
            ))}
          </div>
        )}
        {imagePaths.length > 0 && (
          <div className="grid grid-cols-3 gap-2">
            {imagePaths.map((path) => (
              <div className="relative" key={path}>
                {imagePreviewUrls[path] || path.startsWith('http://') || path.startsWith('https://') ? (
                  <img
                    alt="Coin"
                    className="h-20 w-full rounded-md object-cover"
                    src={imagePreviewUrls[path] || path}
                  />
                ) : (
                  <div className="flex h-20 w-full items-center justify-center rounded-md border border-line bg-gray-50 text-xs text-gray-500">
                    Preview unavailable
                  </div>
                )}
                <button
                  className="absolute right-1 top-1 border-0 bg-white px-1 py-0 text-xs"
                  onClick={() => {
                    setImagePaths((curr) => curr.filter((item) => item !== path));
                    setImagePreviewUrls((curr) => {
                      const next = { ...curr };
                      delete next[path];
                      return next;
                    });
                  }}
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
