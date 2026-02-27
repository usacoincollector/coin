import Link from 'next/link';

const categories = [
  {
    title: 'Premium Coin Flips',
    copy: 'Ultra-white, archival-safe cardboard flips with crystal clear Mylar viewing window.'
  },
  {
    title: 'Coin Capsules',
    copy: 'Virgin acrylic capsules designed to protect Silver Eagles and more.'
  },
  {
    title: 'Single-Row Storage Boxes',
    copy: 'Display-ready storage boxes that keep flips and holders organized.'
  },
  {
    title: 'Double Pocket Coin Flips',
    copy: 'Made with chemically inert archival-safe crystal clear TPU plastic'
  },
  {
    title: 'Currency Supplies',
    copy: 'Toploader sleeves designed for modern size US paper notes'
  }
];

export default function HomePage() {
  return (
    <div className="space-y-10 pb-12">
      <section className="relative overflow-hidden rounded-2xl border border-blue-950/20 bg-gradient-to-br from-[#0f1f57] via-[#114690] to-[#1c7cc6] p-7 text-white md:p-10">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.38),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.22),transparent_30%)]" />
        <div className="pointer-events-none absolute -bottom-16 left-[-10%] h-48 w-[120%] rounded-[100%] border-t-8 border-red-500/90 bg-blue-950/80" />
        <div className="relative z-10 max-w-4xl space-y-5">
          <p className="inline-block rounded-full border border-white/40 bg-white/10 px-4 py-2 text-2xl tracking-[0.08em] md:text-3xl">
            USA COIN COLLECTOR
          </p>
          <h1 className="text-xl leading-tight md:text-3xl [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
            Premium Coin Flips, Capsules, and Storage Solutions for Serious Collectors
          </h1>
          <p className="max-w-2xl text-base text-blue-50 md:text-lg">
            Coin Shield products are built around archival safety, clean presentation, and long-term protection. Shop
            our storefronts or access your personal free Digital Vault.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              className="rounded-md border border-white/50 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              href="https://www.ebay.com/str/usacoincollector"
              rel="noreferrer"
              target="_blank"
            >
              Shop on eBay
            </a>
            <a
              className="rounded-md border border-white/50 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              href="https://www.amazon.com/stores/CoinShield/page/0AE6DA3C-2BAC-46D4-9034-E5418FE7E8B6?lp_asin=B0FKMCCT49&ref_=ast_bln"
              rel="noreferrer"
              target="_blank"
            >
              Shop on Amazon
            </a>
            <Link
              className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-blue-900 transition hover:bg-blue-50"
              href="/digitalvault"
            >
              Open Digital Vault
            </Link>
            <Link
              className="rounded-md border border-white/50 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              href="/sizing-guide"
            >
              Sizing Guide
            </Link>
            <Link
              className="rounded-md border border-white/50 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              href="/about-us"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-2xl text-slate-900 [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
            Archival Safe
          </h2>
          <p className="mt-2 text-slate-600">
            Material choices focused on long-term coin protection and clean display quality.
          </p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-2xl text-slate-900 [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
            Family Owned
          </h2>
          <p className="mt-2 text-slate-600">Focused on fast and friendly customer service.</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-2xl text-slate-900 [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
            Collector Trusted
          </h2>
          <p className="mt-2 text-slate-600">
            Built by collectors for collectors, offering practical solutions to all coin types.
          </p>
        </article>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-slate-500">Shop Online</p>
            <h2 className="mt-2 text-4xl text-[#0f1f57] [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
              Product Categories
            </h2>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {categories.map((category) => (
            <article
              key={category.title}
              className="rounded-xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-5"
            >
              <h3 className="text-2xl text-[#102a63] [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
                {category.title}
              </h3>
              <p className="mt-2 text-slate-600">{category.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-[#0d244f] p-7 text-white md:p-9">
        <h2 className="text-4xl [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
          Start Protecting Your Collection Today!
        </h2>
        <p className="mt-2 max-w-3xl text-blue-100">
          Browse supply options on our storefronts, then manage your inventory, values, and photos in the Digital
          Vault.
        </p>
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
