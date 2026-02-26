export async function getBuilderPageContent(urlPath: string) {
  const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;

  if (!apiKey) {
    console.log('[Builder Debug] Missing NEXT_PUBLIC_BUILDER_API_KEY', { urlPath });
    return null;
  }

  const url = new URL('https://cdn.builder.io/api/v3/content/page');
  url.searchParams.set('apiKey', apiKey);
  url.searchParams.set('includeUnpublished', 'true');
  url.searchParams.set('limit', '1');
  url.searchParams.set('userAttributes.urlPath', urlPath);

  const response = await fetch(url.toString(), {
    next: { revalidate: 60 }
  });

  if (!response.ok) {
    console.log('[Builder Debug] Builder fetch failed', {
      urlPath,
      status: response.status,
      statusText: response.statusText
    });
    return null;
  }

  const data = (await response.json()) as { results?: any[] };
  const result = data.results?.[0] ?? null;

  console.log('[Builder Debug] Builder content lookup', {
    urlPath,
    found: Boolean(result),
    resultsCount: data.results?.length ?? 0,
    contentId: result?.id ?? null
  });

  return result;
}
