import type { Metadata } from 'next';
import Link from 'next/link';
import { CoinSizeLookup } from '@/components/coin-size-lookup';
import { coinSizes, holderSizes } from '@/lib/coin-sizing';

export const metadata: Metadata = {
  title: 'Coin Sizing Guide | USA Coin Collector',
  description: 'Find the correct Coin Shield 2x2 cardboard coin holder opening for common US coins.',
  alternates: { canonical: '/sizing-guide' },
  openGraph: {
    title: 'Coin Sizing Guide | USA Coin Collector',
    description: 'Find the correct Coin Shield 2x2 cardboard coin holder opening for common US coins.',
    url: '/sizing-guide',
    type: 'website'
  }
};

export default function SizingGuidePage() {
  return (
    <div className="space-y-12 pb-10">
      <header className="bg-[#0c2737] px-6 py-10 text-white md:px-10 md:py-14">
        <Link className="text-sm text-slate-300 hover:text-white" href="/">← Back to homepage</Link>
        <p className="mt-9 text-xs font-bold uppercase tracking-[0.3em] text-[#d5b865]">Collector reference</p>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl font-normal leading-tight md:text-7xl">Coin Sizing Guide</h1>
      </header>

      <section aria-labelledby="quick-chart-heading" className="overflow-hidden border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-[#f8f7f3] px-6 py-6 md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a47d13]">At a glance</p>
          <h2 className="mt-2 font-serif text-3xl font-normal text-slate-950" id="quick-chart-heading">Quick Size Chart</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-[720px] w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="px-6 py-3 font-semibold">Size</th>
                <th className="px-6 py-3 font-semibold">Millimeters</th>
                <th className="px-6 py-3 font-semibold">Inches</th>
                <th className="px-6 py-3 font-semibold">Common Use</th>
              </tr>
            </thead>
            <tbody>
              {holderSizes.map((row) => (
                <tr className="border-t border-slate-100" key={row.id}>
                  <td className="px-6 py-4 font-bold text-[#102a63]">{row.name}</td>
                  <td className="px-6 py-4 text-slate-700">{row.openingMm}</td>
                  <td className="px-6 py-4 text-slate-700">{row.openingInches}</td>
                  <td className="px-6 py-4 text-slate-700">{row.commonUse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <CoinSizeLookup />

      <details className="border border-slate-200 bg-white shadow-sm">
      <summary className="cursor-pointer px-6 py-5 font-serif text-2xl text-slate-950 md:px-8">
        Browse the complete coin compatibility directory
      </summary>
      <section
        aria-labelledby="complete-compatibility-directory"
        className="border-t border-slate-200 px-6 py-8 md:px-8"
      >
        <h2 className="font-serif text-3xl font-normal text-slate-950" id="complete-compatibility-directory">
          Complete Coin Shield Holder Compatibility Directory
        </h2>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          Browse every coin in the sizing database. Each entry lists the recommended Coin Shield holder opening.
        </p>
        <div className="mt-8 space-y-10">
          {holderSizes.map((holder) => {
            const compatibleCoins = coinSizes.filter((coin) => coin.holderId === holder.id);
            return (
              <section aria-labelledby={`holder-${holder.id}`} key={holder.id}>
                <h3 className="font-serif text-2xl font-normal text-slate-950" id={`holder-${holder.id}`}>
                  {holder.name} Holder — {holder.openingMm}
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {compatibleCoins.map((coin) => {
                    const anchor =
                      coin.id ??
                      coin.name
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, '-')
                        .replace(/^-|-$/g, '');

                    return (
                      <article className="border border-slate-200 bg-[#f8f7f3] p-5" id={anchor} key={coin.name}>
                        <h4 className="font-serif text-xl font-normal text-slate-950">
                          <a className="hover:text-[#a47d13]" href={`#${anchor}`}>
                            {coin.name}
                          </a>
                        </h4>
                        <p className="mt-3 text-sm leading-6 text-slate-700">
                          Recommended holder: <strong>{holder.name} — {holder.openingMm}</strong>
                        </p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          Diameter: {coin.diameterMm ?? holder.openingMm}
                        </p>
                        {coin.note && <p className="mt-2 text-sm leading-6 text-slate-600">{coin.note}</p>}
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </details>

    <section className="border border-slate-200 bg-white p-7 shadow-sm md:flex md:items-center md:justify-between md:gap-8 md:p-9">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a47d13]">Ready to protect your collection?</p>
          <h2 className="mt-3 font-serif text-3xl font-normal text-slate-950">Shop archival-safe coin holders.</h2>
        </div>
        <a className="mt-6 inline-flex min-h-12 items-center justify-center bg-[#c89e28] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#d5ad3c] focus:outline-none focus:ring-2 focus:ring-[#102a63] focus:ring-offset-2 md:mt-0" href="https://www.ebay.com/str/usacoincollector" rel="noreferrer" target="_blank">Shop Coin Holders</a>
      </section>
    </div>
  );
}
