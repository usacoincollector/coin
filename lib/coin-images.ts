export const COIN_IMAGE_BUCKET = 'coin-images';

const STORAGE_PREFIXES = [
  `/storage/v1/object/public/${COIN_IMAGE_BUCKET}/`,
  `/storage/v1/object/sign/${COIN_IMAGE_BUCKET}/`,
  `/storage/v1/object/authenticated/${COIN_IMAGE_BUCKET}/`
];

function tryExtractPathFromUrl(value: string): string | null {
  try {
    const parsed = new URL(value);
    const pathname = parsed.pathname;

    for (const prefix of STORAGE_PREFIXES) {
      const index = pathname.indexOf(prefix);
      if (index >= 0) {
        return decodeURIComponent(pathname.slice(index + prefix.length));
      }
    }
  } catch {
    return null;
  }

  return null;
}

export function isAbsoluteUrl(value: string) {
  return value.startsWith('http://') || value.startsWith('https://');
}

export function normalizeCoinImageRef(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return '';

  if (!isAbsoluteUrl(trimmed)) {
    return trimmed;
  }

  return tryExtractPathFromUrl(trimmed) ?? trimmed;
}
