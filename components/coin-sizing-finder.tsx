'use client';

import { useMemo, useState } from 'react';
import type { CoinCompatibility, HolderSize } from '@/lib/coin-sizing-data';

export function CoinSizingFinder({ sizes }: { sizes: HolderSize[] }) {
  const [mode, setMode] = useState<'holder' | 'coin'>('holder');
  const [holder, setHolder] = useState('Penny');
  const [query, setQuery] = useState('');
  const matches = useMemo<(CoinCompatibility & { holder?: string; holderDiameter?: number })[]>(() => mode === 'holder'
    ? sizes.find((size) => size.name === holder)?.coins ?? []
    : sizes.flatMap((size) => size.coins.map((coin) => ({ ...coin, holder: size.name, holderDiameter: size.diameter })))
        .filter((coin) => coin.name.toLowerCase().includes(query.trim().toLowerCase())), [holder, mode, query, sizes]);

  return (
    <section aria-labelledby="finder-heading" className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h2 id="finder-heading" className="text-3xl font-bold text-slate-950">Find the Right Coin Holder</h2>
      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Search method">
        <button className={mode === 'holder' ? 'bg-[#102a63] text-white' : 'bg-white text-slate-800'} onClick={() => setMode('holder')}>By Holder Size</button>
        <button className={mode === 'coin' ? 'bg-[#102a63] text-white' : 'bg-white text-slate-800'} onClick={() => setMode('coin')}>By Coin Type</button>
      </div>
      <div className="mt-5 max-w-xl">
        {mode === 'holder' ? <><label htmlFor="holder-size">Holder size</label><select className="mt-2 w-full" id="holder-size" value={holder} onChange={(event) => setHolder(event.target.value)}>{sizes.map((size) => <option key={size.name}>{size.name}</option>)}</select></> : <><label htmlFor="coin-search">Coin name</label><input className="mt-2 w-full" id="coin-search" placeholder="Try Morgan Dollar" value={query} onChange={(event) => setQuery(event.target.value)} /></>}
      </div>
      <div aria-live="polite" className="mt-6 grid gap-3 md:grid-cols-2">
        {matches.map((coin) => <div className="rounded-md border border-slate-200 p-4" key={coin.id}><p className="font-bold text-[#102a63]">{coin.name}</p><p className="mt-1 text-sm text-slate-600">{coin.dates} · {coin.diameter}</p>{coin.holder && coin.holderDiameter !== undefined && <p className="mt-1 text-sm font-semibold text-slate-800">Recommended: {coin.holder} — {coin.holderDiameter.toFixed(2)} mm</p>}</div>)}
        {matches.length === 0 && <p className="text-slate-600">No matching coin found. Try part of the coin name.</p>}
      </div>
    </section>
  );
}
