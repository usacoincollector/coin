import type { Metadata } from 'next';
import Link from 'next/link';
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
import { CoinSizeLookup } from '@/components/coin-size-lookup';
import { holderSizes } from '@/lib/coin-sizing';

export const metadata: Metadata = {
  title: 'Coin Sizing Guide | USA Coin Collector',
  description: 'Find the correct Coin Shield 2x2 cardboard coin holder opening for common US coins.'
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

      <section className="border border-slate-200 bg-white p-7 shadow-sm md:flex md:items-center md:justify-between md:gap-8 md:p-9">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a47d13]">Ready to protect your collection?</p>
          <h2 className="mt-3 font-serif text-3xl font-normal text-slate-950">Shop archival-safe coin holders.</h2>
        </div>
        <a className="mt-6 inline-flex min-h-12 items-center justify-center bg-[#c89e28] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#d5ad3c] focus:outline-none focus:ring-2 focus:ring-[#102a63] focus:ring-offset-2 md:mt-0" href="https://www.ebay.com/str/usacoincollector" rel="noreferrer" target="_blank">Shop Coin Holders</a>
      </section>
    </div>
  );
=======
import { CoinSizingFinder } from '@/components/coin-sizing-finder';
import { holderSizes } from '@/lib/coin-sizing-data';

export const metadata: Metadata = {
  title: 'Coin Sizing Guide: Coin Shield Holder Sizes | USA Coin Collector',
  description: 'Find the correct Coin Shield holder for United States coins by coin type, date, and diameter.',
  alternates: { canonical: '/sizing-guide' },
  openGraph: { title: 'Coin Sizing Guide', description: 'Search Coin Shield holder compatibility by coin or holder size.', url: '/sizing-guide', type: 'website' }
};

export default function SizingGuidePage() {
=======
import { CoinSizingFinder } from '@/components/coin-sizing-finder';
import { holderSizes } from '@/lib/coin-sizing-data';

export const metadata: Metadata = {
  title: 'Coin Sizing Guide: Coin Shield Holder Sizes | USA Coin Collector',
  description: 'Find the correct Coin Shield holder for United States coins by coin type, date, and diameter.',
  alternates: { canonical: '/sizing-guide' },
  openGraph: { title: 'Coin Sizing Guide', description: 'Search Coin Shield holder compatibility by coin or holder size.', url: '/sizing-guide', type: 'website' }
};

export default function SizingGuidePage() {
>>>>>>> theirs
=======
import { CoinSizingFinder } from '@/components/coin-sizing-finder';
import { holderSizes } from '@/lib/coin-sizing-data';

export const metadata: Metadata = {
  title: 'Coin Sizing Guide: Coin Shield Holder Sizes | USA Coin Collector',
  description: 'Find the correct Coin Shield holder for United States coins by coin type, date, and diameter.',
  alternates: { canonical: '/sizing-guide' },
  openGraph: { title: 'Coin Sizing Guide', description: 'Search Coin Shield holder compatibility by coin or holder size.', url: '/sizing-guide', type: 'website' }
};

export default function SizingGuidePage() {
>>>>>>> theirs
=======
import { CoinSizingFinder } from '@/components/coin-sizing-finder';
import { holderSizes } from '@/lib/coin-sizing-data';

export const metadata: Metadata = {
  title: 'Coin Sizing Guide: Coin Shield Holder Sizes | USA Coin Collector',
  description: 'Find the correct Coin Shield holder for United States coins by coin type, date, and diameter.',
  alternates: { canonical: '/sizing-guide' },
  openGraph: { title: 'Coin Sizing Guide', description: 'Search Coin Shield holder compatibility by coin or holder size.', url: '/sizing-guide', type: 'website' }
};

export default function SizingGuidePage() {
>>>>>>> theirs
=======
import { CoinSizingFinder } from '@/components/coin-sizing-finder';
import { holderSizes } from '@/lib/coin-sizing-data';

export const metadata: Metadata = {
  title: 'Coin Sizing Guide: Coin Shield Holder Sizes | USA Coin Collector',
  description: 'Find the correct Coin Shield holder for United States coins by coin type, date, and diameter.',
  alternates: { canonical: '/sizing-guide' },
  openGraph: { title: 'Coin Sizing Guide', description: 'Search Coin Shield holder compatibility by coin or holder size.', url: '/sizing-guide', type: 'website' }
};

export default function SizingGuidePage() {
>>>>>>> theirs
=======
import { CoinSizingFinder } from '@/components/coin-sizing-finder';
import { holderSizes } from '@/lib/coin-sizing-data';

export const metadata: Metadata = {
  title: 'Coin Sizing Guide: Coin Shield Holder Sizes | USA Coin Collector',
  description: 'Find the correct Coin Shield holder for United States coins by coin type, date, and diameter.',
  alternates: { canonical: '/sizing-guide' },
  openGraph: { title: 'Coin Sizing Guide', description: 'Search Coin Shield holder compatibility by coin or holder size.', url: '/sizing-guide', type: 'website' }
};

export default function SizingGuidePage() {
>>>>>>> theirs
=======
import { CoinSizingFinder } from '@/components/coin-sizing-finder';
import { holderSizes } from '@/lib/coin-sizing-data';

export const metadata: Metadata = {
  title: 'Coin Sizing Guide: Coin Shield Holder Sizes | USA Coin Collector',
  description: 'Find the correct Coin Shield holder for United States coins by coin type, date, and diameter.',
  alternates: { canonical: '/sizing-guide' },
  openGraph: { title: 'Coin Sizing Guide', description: 'Search Coin Shield holder compatibility by coin or holder size.', url: '/sizing-guide', type: 'website' }
};

export default function SizingGuidePage() {
>>>>>>> theirs
  return <div className="space-y-8">
    <Link className="text-sm text-slate-700 hover:text-slate-900" href="/">{'<- Back to homepage'}</Link>
    <header className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm md:p-9">
      <h1 className="text-4xl font-bold tracking-tight text-[#b91c1c] md:text-5xl">Coin Sizing Guide</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">Search by holder size or coin type to choose a close-fitting Coin Shield holder. The full compatibility directory follows the finder.</p>
    </header>
    <CoinSizingFinder sizes={holderSizes} />
    <section aria-labelledby="chart-heading" className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <h2 id="chart-heading" className="border-b border-slate-200 bg-slate-50 px-4 py-4 text-2xl font-bold">Quick Size Chart</h2>
      <div className="overflow-x-auto"><table className="min-w-full text-left text-sm"><thead className="bg-slate-50 text-slate-700"><tr><th className="px-4 py-3">Size</th><th className="px-4 py-3">Millimeters</th><th className="px-4 py-3">Inches</th><th className="px-4 py-3">Common use</th></tr></thead><tbody>{holderSizes.map((size) => <tr className="border-t" key={size.name}><td className="px-4 py-3 font-medium">{size.name}</td><td className="px-4 py-3">{size.diameter.toFixed(2)} mm</td><td className="px-4 py-3">{size.inches} in</td><td className="px-4 py-3">{size.commonUse}</td></tr>)}</tbody></table></div>
    </section>
    <section aria-labelledby="directory-heading">
      <h2 id="directory-heading" className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">Complete Coin Compatibility Directory</h2>
      <p className="mt-3 max-w-3xl leading-7 text-slate-600">Browse every compatibility record by holder. Each entry lists its issue dates, diameter, and recommended holder size.</p>
      <div className="mt-6 space-y-4">{holderSizes.map((size) => <details className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" key={size.name}><summary className="cursor-pointer text-xl font-bold text-[#102a63]">{size.name} holder — {size.diameter.toFixed(2)} mm</summary><section aria-label={`${size.name} compatible coins`} className="mt-5 grid gap-3 md:grid-cols-2">{size.coins.map((coin) => <article className="scroll-mt-24 rounded-md border border-slate-100 bg-slate-50 p-4" id={coin.id} key={coin.id}><h3 className="font-bold text-slate-950"><a className="hover:text-[#102a63]" href={`#${coin.id}`}>{coin.name}</a></h3><p className="mt-1 text-sm text-slate-700">Dates: {coin.dates}</p><p className="text-sm text-slate-700">Coin diameter: {coin.diameter}</p><p className="text-sm font-semibold text-slate-900">Recommended holder: {size.name} — {size.diameter.toFixed(2)} mm</p></article>)}</section></details>)}</div>
    </section>
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
