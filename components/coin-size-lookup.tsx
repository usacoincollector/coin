'use client';

import { useId, useMemo, useState } from 'react';
import { coinSizes, formatCoinDiameter, formatMillimeters, getHolder, holderSizes, type CoinSizeRecord, type HolderId } from '@/lib/coin-sizing';

type LookupMode = 'holder' | 'coin';

function CoinResult({ coin, featured = false }: { coin: CoinSizeRecord; featured?: boolean }) {
  const holder = coin.holderId ? getHolder(coin.holderId) : null;
  return (
    <article className={`border border-slate-200 bg-white p-5 shadow-sm ${featured ? 'md:p-7' : ''}`}>
      <h3 className="font-serif text-2xl font-normal leading-tight text-slate-950">{coin.name}</h3>
      <div className={`mt-5 border-l-4 border-[#d5b865] bg-[#f8f7f3] ${featured ? 'p-5' : 'p-4'}`}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Actual coin diameter</p>
            <p className="mt-2 text-lg font-bold text-slate-950">{formatCoinDiameter(coin)}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Recommended holder</p>
            <p className="mt-2 text-lg font-bold text-[#102a63]">{holder ? `${holder.name} — ${formatMillimeters(holder.sizeMm)}` : 'No recommended Coin Shield 2×2 size currently available'}</p>
          </div>
        </div>
      </div>
      {coin.note && <p className="mt-4 text-sm leading-6 text-slate-600">{coin.note}</p>}
    </article>
  );
}

export function CoinSizeLookup() {
  const [mode, setMode] = useState<LookupMode>('holder');
  const [holderId, setHolderId] = useState<HolderId>('penny');
  const [query, setQuery] = useState('');
  const [selectedCoin, setSelectedCoin] = useState<CoinSizeRecord | null>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const inputId = useId();
  const listboxId = useId();

  const holderCoins = useMemo(() => coinSizes.filter((coin) => coin.holderId === holderId), [holderId]);
  const normalizedQuery = query.trim().toLowerCase().replace(/\s+/g, ' ');
  const matches = useMemo(() => {
    if (!normalizedQuery) return [];
    return coinSizes.filter((coin) => [coin.name, ...(coin.aliases ?? [])].some((term) => term.toLowerCase().replace(/\s+/g, ' ').includes(normalizedQuery))).slice(0, 8);
  }, [normalizedQuery]);

  function selectCoin(coin: CoinSizeRecord) {
    setSelectedCoin(coin);
    setQuery(coin.name);
    setSuggestionsOpen(false);
    setActiveIndex(-1);
  }

  function selectMode(nextMode: LookupMode) {
    setMode(nextMode);
    setSuggestionsOpen(false);
    setActiveIndex(-1);
  }

  return (
    <section aria-labelledby="lookup-heading" className="overflow-hidden border border-[#365363] bg-[#102f40] shadow-sm">
      <div className="px-6 py-9 text-white md:px-10 md:py-11">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d5b865]">Interactive sizing tool</p>
        <h2 className="mt-4 font-serif text-4xl font-normal md:text-5xl" id="lookup-heading">Find the Right Coin Holder Size</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">Search by holder size or by coin type to find compatible Coin Shield 2×2 cardboard coin holders.</p>
      </div>

      <div className="border-t border-white/15 bg-[#0c2737] p-3 sm:p-4" role="tablist" aria-label="Choose a lookup method">
        <div className="grid grid-cols-2 gap-2">
          {([['holder', 'By Holder Size'], ['coin', 'By Coin Type']] as const).map(([value, label]) => (
            <button aria-controls={`lookup-panel-${value}`} aria-selected={mode === value} className={`min-h-12 px-4 py-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-[#d5b865] focus:ring-inset ${mode === value ? 'bg-[#d5b865] text-[#071b26]' : 'bg-[#17384a] text-white hover:bg-[#21495f]'}`} id={`lookup-tab-${value}`} key={value} onClick={() => selectMode(value)} onKeyDown={(event) => { if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); const nextMode = value === 'holder' ? 'coin' : 'holder'; selectMode(nextMode); requestAnimationFrame(() => document.getElementById(`lookup-tab-${nextMode}`)?.focus()); } }} role="tab" tabIndex={mode === value ? 0 : -1} type="button">
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-[#f8f7f3] p-6 md:p-10">
        {mode === 'holder' ? (
          <div aria-labelledby="lookup-tab-holder" id="lookup-panel-holder" role="tabpanel">
            <label className="block max-w-xl" htmlFor="holder-size">
              <span className="mb-2 block text-sm font-bold text-slate-900">Select a Coin Shield holder size</span>
              <select className="min-h-12 w-full border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none focus:border-[#a47d13] focus:ring-2 focus:ring-[#d5b865]/50" id="holder-size" onChange={(event) => setHolderId(event.target.value as HolderId)} value={holderId}>
                {holderSizes.map((holder) => <option key={holder.id} value={holder.id}>{holder.name} — {formatMillimeters(holder.sizeMm)}</option>)}
              </select>
            </label>
            <div className="mt-8 flex flex-wrap items-end justify-between gap-3 border-b border-slate-300 pb-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a47d13]">{getHolder(holderId).name} holder</p>
                <h3 className="mt-2 font-serif text-3xl font-normal text-slate-950">{holderCoins.length} compatible {holderCoins.length === 1 ? 'coin' : 'coins'}</h3>
              </div>
              <p className="text-sm text-slate-600">Holder size: <strong className="text-slate-900">{formatMillimeters(getHolder(holderId).sizeMm)}</strong></p>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{holderCoins.map((coin) => <CoinResult coin={coin} key={coin.name} />)}</div>
          </div>
        ) : (
          <div aria-labelledby="lookup-tab-coin" id="lookup-panel-coin" role="tabpanel">
            <div className="relative max-w-2xl">
              <label className="mb-2 block text-sm font-bold text-slate-900" htmlFor={inputId}>Search for a coin</label>
              <input
                aria-activedescendant={activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined}
                aria-autocomplete="list"
                aria-controls={listboxId}
                aria-expanded={suggestionsOpen && normalizedQuery.length > 0}
                autoComplete="off"
                className="min-h-12 w-full border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#a47d13] focus:ring-2 focus:ring-[#d5b865]/50"
                id={inputId}
                onBlur={() => setTimeout(() => setSuggestionsOpen(false), 120)}
                onChange={(event) => { setQuery(event.target.value); setSelectedCoin(null); setSuggestionsOpen(true); setActiveIndex(-1); }}
                onFocus={() => normalizedQuery && setSuggestionsOpen(true)}
                onKeyDown={(event) => {
                  if (event.key === 'Escape') { setSuggestionsOpen(false); setActiveIndex(-1); }
                  else if (event.key === 'ArrowDown' && matches.length) { event.preventDefault(); setSuggestionsOpen(true); setActiveIndex((index) => Math.min(index + 1, matches.length - 1)); }
                  else if (event.key === 'ArrowUp' && matches.length) { event.preventDefault(); setActiveIndex((index) => Math.max(index - 1, 0)); }
                  else if (event.key === 'Enter' && activeIndex >= 0 && matches[activeIndex]) { event.preventDefault(); selectCoin(matches[activeIndex]); }
                }}
                placeholder="Try “Morgan” or “Buffalo nickel”"
                role="combobox"
                type="search"
                value={query}
              />
              {suggestionsOpen && normalizedQuery && (
                <ul className="absolute z-10 mt-1 max-h-80 w-full overflow-y-auto border border-slate-300 bg-white py-1 shadow-lg" id={listboxId} role="listbox">
                  {matches.length ? matches.map((coin, index) => <li aria-selected={index === activeIndex} className={`cursor-pointer px-4 py-3 text-sm leading-6 text-slate-800 ${index === activeIndex ? 'bg-[#e9e2d2]' : 'hover:bg-slate-50'}`} id={`${listboxId}-option-${index}`} key={coin.name} onMouseDown={() => selectCoin(coin)} role="option">{coin.name}</li>) : <li className="px-4 py-4 text-sm leading-6 text-slate-600">No matching coin was found. Try another coin name or check the Quick Size Chart above.</li>}
                </ul>
              )}
            </div>
            <div aria-live="polite" className="mt-8">
              {selectedCoin ? <div className="max-w-2xl"><CoinResult coin={selectedCoin} featured /></div> : normalizedQuery && !matches.length && !suggestionsOpen ? <p className="text-sm text-slate-600">No matching coin was found. Try another coin name or check the Quick Size Chart above.</p> : <p className="text-sm text-slate-500">Start typing, then choose a coin from the suggestions to see its recommended holder.</p>}
            </div>
          </div>
        )}
        <aside className="mt-9 border-t border-slate-300 pt-6 text-sm leading-6 text-slate-600"><strong className="text-slate-900">Sizing note:</strong> Coin diameters can vary slightly by issue, mint, or manufacturing tolerance. When in doubt, confirm your coin&apos;s diameter before ordering.</aside>
      </div>
    </section>
  );
}
