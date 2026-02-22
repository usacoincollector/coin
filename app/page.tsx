import Link from 'next/link';
import { getSanityHomepageContent } from '@/lib/sanity-homepage';

const defaultPillars = [
  {
    title: 'Archival Safe',
    description: 'Material choices focused on long-term coin protection and clean display quality.'
  },
  {
    title: 'Moisture Resistant',
    description: 'Storage options designed to reduce exposure to dust, humidity, and environmental wear.'
  },
  {
    title: 'Collector Trusted',
    description: 'Built by collectors for collectors, with practical sizing across US coin types.'
  }
];

const defaultCategories = [
  {
    title: 'Premium Coin Flips',
    description: 'Ultra-white, archival-safe cardboard flips with clean windows and reliable staples.'
  },
  {
    title: 'Crystal-Clear Capsules',
    description: 'PVC-free acrylic capsules designed to protect Silver Eagles, ASE sizes, and more.'
  },
  {
    title: 'Single-Row Storage',
    description: 'Display-ready storage boxes that keep flips and holders organized and dust resistant.'
  },
  {
    title: 'Collector Bundles',
    description: 'Starter kits with flips, capsules, and storage options for fast collection setup.'
  }
];

export default async function HomePage() {
  const content = await getSanityHomepageContent();

  return <MarketingHomepage content={content} />;
}

function MarketingHomepage({ content }: { content: Awaited<ReturnType<typeof getSanityHomepageContent>> }) {
  const kicker = content?.kicker || 'USA COIN COLLECTOR';
  const title = content?.title || 'Premium Coin Flips, Capsules, and Storage for Serious Collectors';
  const description =
    content?.description ||
    'Coin Shield products are built around archival safety, clean presentation, and long-term protection. Shop our storefronts or access your personal Digital Vault.';

  const primaryCtaLabel = content?.primaryCtaLabel || 'Shop on eBay';
  const primaryCtaUrl = content?.primaryCtaUrl || 'https://www.ebay.com/str/usacoincollector';
  const secondaryCtaLabel = content?.secondaryCtaLabel || 'Shop on Amazon';
  const secondaryCtaUrl =
    content?.secondaryCtaUrl ||
    'https://www.amazon.com/stores/CoinShield/page/0AE6DA3C-2BAC-46D4-9034-E5418FE7E8B6?lp_asin=B0FKMCCT49&ref_=ast_bln';
  const vaultCtaLabel = content?.vaultCtaLabel || 'Open Digital Vault';
  const vaultCtaUrl = content?.vaultCtaUrl || '/digitalvault';

  const pillars = content?.pillars?.length ? content.pillars.slice(0, 3) : defaultPillars;
  const categories = content?.categories?.length ? content.categories.slice(0, 4) : defaultCategories;

  const finalTitle = content?.finalTitle || 'Start Protecting Your Collection';
  const finalDescription =
    content?.finalDescription ||
    'Browse supply options on our storefronts, then manage your inventory, values, and photos in the Digital Vault.';

  return (
    <div className="space-y-10 pb-12 [font-family:'Trebuchet_MS','Lucida_Sans_Unicode','Lucida_Grande','Verdana',sans-serif]">
      <section className="relative overflow-hidden rounded-2xl border border-blue-950/20 bg-gradient-to-br from-[#0f1f57] via-[#114690] to-[#1c7cc6] p-7 text-white md:p-10">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.38),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.22),transparent_30%)]" />
        <div className="pointer-events-none absolute -bottom-16 left-[-10%] h-48 w-[120%] rounded-[100%] border-t-8 border-red-500/90 bg-blue-950/80" />
        <div className="relative z-10 max-w-3xl space-y-5">
          <p className="inline-block rounded-full border border-white/40 bg-white/10 px-3 py-1 text-xs tracking-[0.2em]">
            {kicker}
          </p>
          <h1 className="text-4xl leading-tight md:text-6xl [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
            {title}
          </h1>
          <p className="max-w-2xl text-base text-blue-50 md:text-lg">{description}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              className="rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
              href={primaryCtaUrl}
              rel="noreferrer"
              target="_blank"
            >
              {primaryCtaLabel}
            </a>
            <a
              className="rounded-md border border-white/50 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              href={secondaryCtaUrl}
              rel="noreferrer"
              target="_blank"
            >
              {secondaryCtaLabel}
            </a>
            <Link
              className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-blue-900 transition hover:bg-blue-50"
              href={vaultCtaUrl}
            >
              {vaultCtaLabel}
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {pillars.map((pillar, index) => (
          <article className="rounded-xl border border-slate-200 bg-white p-5" key={`${pillar.title}-${index}`}>
            <h2 className="text-2xl text-slate-900 [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
              {pillar.title}
            </h2>
            <p className="mt-2 text-slate-600">{pillar.description}</p>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-slate-500">PRODUCT CATEGORIES</p>
            <h2 className="mt-2 text-4xl text-[#0f1f57] [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
              Coin Shield Essentials
            </h2>
          </div>
          <Link className="rounded-md bg-[#0f1f57] px-4 py-2 text-sm font-semibold text-white" href="/digitalvault">
            Sign In to Digital Vault
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {categories.map((category, index) => (
            <article
              key={`${category.title}-${index}`}
              className="rounded-xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-5"
            >
              <h3 className="text-2xl text-[#102a63] [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
                {category.title}
              </h3>
              <p className="mt-2 text-slate-600">{category.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-[#0d244f] p-7 text-white md:p-9">
        <h2 className="text-4xl [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">{finalTitle}</h2>
        <p className="mt-2 max-w-3xl text-blue-100">{finalDescription}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#0d244f]"
            href="https://www.ebay.com/str/usacoincollector"
            rel="noreferrer"
            target="_blank"
          >
            Browse eBay Store
          </a>
          <a
            className="rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white"
            href="https://www.amazon.com/stores/page/0AE6DA3C-2BAC-46D4-9034-E5418FE7E8B6"
            rel="noreferrer"
            target="_blank"
          >
            Browse Amazon Store
          </a>
          <Link className="rounded-md border border-white/45 px-5 py-3 text-sm font-semibold text-white" href="/digitalvault">
            Launch Digital Vault
          </Link>
        </div>
      </section>
    </div>
  );
}
