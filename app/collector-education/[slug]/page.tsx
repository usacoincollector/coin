import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { educationArticles, getEducationArticle } from '@/lib/collector-education';
import TrumpDollarGuidePage, {
  metadata as trumpDollarMetadata
} from '../2026-trump-dollar-july-4-privy-mark/page';

const TRUMP_DOLLAR_SLUG = '2026-trump-dollar-july-4-privy-mark';

export function generateStaticParams() {
  return educationArticles
    .filter(({ slug }) => slug !== TRUMP_DOLLAR_SLUG)
    .map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (slug === TRUMP_DOLLAR_SLUG) return trumpDollarMetadata;

  const article = getEducationArticle(slug);
  return article ? { title: `${article.title} | USA Coin Collector`, description: article.summary } : {};
}

export default async function EducationArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === TRUMP_DOLLAR_SLUG) return <TrumpDollarGuidePage />;

  const article = getEducationArticle(slug);
  if (!article) notFound();

  return (
    <article className="mx-auto max-w-3xl pb-10 pt-6">
      <Link className="text-sm font-bold text-[#102a63] hover:text-[#a47d13]" href="/collector-education">← Collector Education</Link>
      <header className="mt-8 border-b border-slate-200 pb-10">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a47d13]">{article.category} · {article.readTime}</p>
        <h1 className="mt-5 font-serif text-4xl font-normal leading-tight text-slate-950 md:text-6xl">{article.title}</h1>
        <p className="mt-6 text-xl leading-8 text-slate-600">{article.introduction}</p>
      </header>
      <div className="space-y-10 pt-10">
        {article.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-serif text-3xl font-normal text-slate-950">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => <p className="mt-4 text-lg leading-8 text-slate-700" key={paragraph}>{paragraph}</p>)}
            {section.bullets && <ul className="mt-5 list-disc space-y-2 pl-6 text-lg leading-8 text-slate-700">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
          </section>
        ))}
      </div>
      <footer className="mt-12 border-t border-slate-200 pt-8">
        <Link className="inline-flex rounded-md bg-[#102a63] px-5 py-3 text-sm font-bold text-white hover:bg-[#183b82]" href="/collector-education">Explore all collector guides</Link>
      </footer>
    </article>
  );
}
