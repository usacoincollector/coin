import type { MetadataRoute } from 'next';
import { educationArticles } from '@/lib/collector-education';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.usacoincollector.com';
  return [
    { url: `${base}/`, lastModified: new Date('2026-09-04'), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/sizing-guide`, lastModified: new Date('2026-09-04'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/collector-education`, lastModified: new Date('2026-09-04'), changeFrequency: 'weekly', priority: 0.8 },
    ...educationArticles.map(({ slug }) => ({
      url: `${base}/collector-education/${slug}`,
      lastModified: new Date('2026-09-04'),
      changeFrequency: 'monthly' as const,
      priority: slug === '2026-trump-dollar-july-4-privy-mark' ? 0.9 : 0.7
    })),
    ...['about-us','contact-us','faq','shipping','digitalvault'].map((path) => ({ url: `${base}/${path}`, lastModified: new Date('2026-09-04'), changeFrequency: 'monthly' as const, priority: 0.5 }))
  ];
}
