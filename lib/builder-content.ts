export async function getBuilderPageContent(urlPath: string) {
  const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;

  if (!apiKey) return null;

  const url = new URL('https://cdn.builder.io/api/v3/content/page');
  url.searchParams.set('apiKey', apiKey);
  url.searchParams.set('includeUnpublished', 'true');
  url.searchParams.set('limit', '1');
  url.searchParams.set('userAttributes.urlPath', urlPath);

  const response = await fetch(url.toString(), {
    next: { revalidate: 60 }
  });

  if (!response.ok) return null;

  const data = (await response.json()) as { results?: any[] };
  return data.results?.[0] ?? null;
}
