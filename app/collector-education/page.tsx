import type { Metadata } from 'next';
import Link from 'next/link';
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
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
=======
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs

export const metadata: Metadata = {
  title: 'Collector Education | USA Coin Collector',
  description: 'Practical coin identification, handling, sizing, and storage guides for collectors.',
  alternates: { canonical: '/collector-education' }
};

const guides = [
  { category: '2026 Coin Guide', title: '2026 Trump $1 Coin: Find the July 4th Privy Mark', description: 'See where the limited July 4th privy mark appears, how the special coin differs from the standard issue, and the correct holder size.', href: '/collector-education/2026-trump-dollar-july-4-privy-mark' },
  { category: 'Getting Started', title: 'New to Coin Collecting?', description: 'Learn the basic vocabulary and habits that can help you start collecting confidently.', href: '/faq#beginner' },
  { category: 'Coin Care', title: 'How to Protect Your Coins', description: 'Review practical handling and storage habits for preserving your collection.', href: '/faq#protect' },
  { category: 'Storage', title: 'Choosing the Right Storage', description: 'Compare common storage approaches and find the right fit for your coins.', href: '/faq#storage' }
];

export default function CollectorEducationPage() {
  return <div className="space-y-8">
    <header className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm md:p-9"><p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Learn</p><h1 className="mt-3 text-4xl font-bold tracking-tight text-[#b91c1c] md:text-5xl">Collector Education</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">Straightforward identification, coin care, sizing, and storage guidance for collectors.</p></header>
    <section className="grid gap-4 md:grid-cols-2" aria-label="Collector guides">{guides.map((guide, index) => <article className={`rounded-lg border bg-white p-7 shadow-sm transition hover:border-[#c89e28] ${index === 0 ? 'border-[#c89e28]' : 'border-slate-200'}`} key={guide.title}><p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-500">{guide.category}</p><h2 className="mt-3 text-2xl font-bold text-slate-950">{guide.title}</h2><p className="mt-4 leading-7 text-slate-600">{guide.description}</p><Link className="mt-6 inline-block font-semibold text-[#a47d13]" href={guide.href}>Read guide {'->'}</Link></article>)}</section>
  </div>;
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
=======
>>>>>>> theirs
}
