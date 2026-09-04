import type { Metadata } from 'next';
import Link from 'next/link';
import { EducationCard } from '@/components/education-card';
import { educationArticles } from '@/lib/collector-education';

export const metadata: Metadata = {
  title: 'Collector Education | USA Coin Collector',
  description: 'Practical, jargon-free guides about coin storage, grading, care, value, and starting a collection.'
};

export default function CollectorEducationPage() {
  return (
    <div className="-mx-4 -my-8 bg-[#0c2737] px-4 py-16 text-white md:-mx-6 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <Link className="mb-10 inline-block text-sm text-slate-300 hover:text-white" href="/">
          ← Back to homepage
        </Link>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d5b865]">Collector Education</p>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl font-normal leading-tight md:text-7xl">Build knowledge. Protect value.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Straightforward answers for collectors at every stage, from handling your first coin to making a confident purchase.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {educationArticles.map((article, index) => (
            <div className={index === 0 ? 'md:col-span-2' : ''} key={article.slug}>
              <EducationCard article={article} featured={index === 0} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
