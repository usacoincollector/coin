import Image from 'next/image';
import Link from 'next/link';
import type { EducationArticle } from '@/lib/collector-education';

export function EducationCard({ article, featured = false }: { article: EducationArticle; featured?: boolean }) {
  return (
    <article className={`group flex h-full flex-col bg-[#17384a] ${featured ? 'md:grid md:grid-cols-[0.95fr_1.05fr]' : ''}`}>
      <div className={`relative overflow-hidden bg-[#102c3c] ${featured ? 'min-h-72 md:min-h-full' : 'h-64'}`}>
        <Image
          alt={article.imageAlt}
          className="object-cover transition duration-500 group-hover:scale-105"
          fill
          sizes={featured ? '(min-width: 768px) 520px, 100vw' : '(min-width: 768px) 520px, 100vw'}
          src={article.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061721]/45 via-transparent to-transparent" />
      </div>
      <div className={`flex flex-1 flex-col ${featured ? 'p-7 md:p-9' : 'p-6'}`}>
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#d5b865]">
          {article.category} · {article.readTime}
        </p>
        <h3 className={`mt-5 font-serif font-normal leading-[1.08] text-white ${featured ? 'text-3xl md:text-4xl' : 'text-3xl'}`}>
          {article.title}
        </h3>
        {featured && <p className="mt-5 text-base leading-7 text-slate-300">{article.summary}</p>}
        <Link className="mt-auto inline-flex w-fit border-b border-[#d5b865] pt-7 text-sm font-bold text-white transition hover:text-[#e3c86f]" href={`/collector-education/${article.slug}`}>
          {featured ? 'Read the guide →' : 'Read more →'}
        </Link>
      </div>
    </article>
  );
}
