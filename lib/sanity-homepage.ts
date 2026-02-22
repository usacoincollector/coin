export type SanityHomepage = {
  kicker?: string;
  title?: string;
  description?: string;
  primaryCtaLabel?: string;
  primaryCtaUrl?: string;
  secondaryCtaLabel?: string;
  secondaryCtaUrl?: string;
  vaultCtaLabel?: string;
  vaultCtaUrl?: string;
  pillars?: Array<{ title?: string; description?: string }>;
  categories?: Array<{ title?: string; description?: string }>;
  finalTitle?: string;
  finalDescription?: string;
};

export async function getSanityHomepageContent(): Promise<SanityHomepage | null> {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const apiVersion = process.env.SANITY_API_VERSION || '2025-02-19';

  if (!projectId || !dataset) {
    return null;
  }

  const query = `*[_type == "homepage" && slug.current == "home"][0]{
    kicker,
    title,
    description,
    primaryCtaLabel,
    primaryCtaUrl,
    secondaryCtaLabel,
    secondaryCtaUrl,
    vaultCtaLabel,
    vaultCtaUrl,
    pillars[]{title, description},
    categories[]{title, description},
    finalTitle,
    finalDescription
  }`;

  try {
    const encodedQuery = encodeURIComponent(query);
    const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodedQuery}`;

    const response = await fetch(url, {
      headers: {
        Accept: 'application/json'
      },
      next: { revalidate: 60 }
    });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as { result?: SanityHomepage | null };

    return data.result ?? null;
  } catch {
    return null;
  }
}
