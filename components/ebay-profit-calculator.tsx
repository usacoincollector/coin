'use client';

import { useMemo, useState } from 'react';

type StoreLevel = 'starter' | 'standard';
type SellerLevel = 'top-rated' | 'above-standard' | 'below-standard';

const money = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

function readAmount(value: string) {
  const amount = Number.parseFloat(value);
  return Number.isFinite(amount) && amount > 0 ? amount : 0;
}

function MoneyInput({ id, label, value, onChange }: { id: string; label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="block" htmlFor={id}>
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-slate-700">{label}</span>
      <span className="flex items-center border border-slate-300 bg-[#fcfbf8] px-4 focus-within:border-[#ad8739] focus-within:ring-1 focus-within:ring-[#ad8739]">
        <span className="text-sm font-bold text-slate-500">$</span>
        <input
          className="w-full bg-transparent px-3 py-4 font-serif text-xl text-slate-900 outline-none"
          id={id}
          inputMode="decimal"
          min="0"
          onChange={(event) => onChange(event.target.value)}
          step="0.01"
          type="number"
          value={value}
        />
      </span>
    </label>
  );
}

export function EbayProfitCalculator() {
  const [coinCost, setCoinCost] = useState('0');
  const [listPrice, setListPrice] = useState('0');
  const [shipping, setShipping] = useState('0');
  const [supplies, setSupplies] = useState('0');
  const [promotedRate, setPromotedRate] = useState('0');
  const [storeLevel, setStoreLevel] = useState<StoreLevel>('starter');
  const [sellerLevel, setSellerLevel] = useState<SellerLevel>('above-standard');

  const estimate = useMemo(() => {
    const sale = readAmount(listPrice);
    const cost = readAmount(coinCost);
    const shippingCost = readAmount(shipping);
    const suppliesCost = readAmount(supplies);
    const adRate = readAmount(promotedRate);
    const threshold = storeLevel === 'starter' ? 7500 : 4000;
    const firstRate = storeLevel === 'starter' ? 0.1325 : 0.09;
    const firstTierAmount = Math.min(sale, threshold);
    const secondTierAmount = Math.max(sale - threshold, 0);
    const firstTierFee = firstTierAmount * firstRate;
    const secondTierFee = secondTierAmount * 0.0235;
    const orderFee = sale > 0 && sale <= 10 ? 0.3 : sale > 10 ? 0.4 : 0;
    const promotedFee = sale * (adRate / 100);
    const percentageFee = firstTierFee + secondTierFee;
    const sellerAdjustmentRate = sellerLevel === 'top-rated' ? -0.1 : sellerLevel === 'below-standard' ? 0.06 : 0;
    const sellerAdjustment = percentageFee * sellerAdjustmentRate;
    const finalValueFee = percentageFee + sellerAdjustment + orderFee;
    const totalFees = finalValueFee + promotedFee;
    const netProfit = sale - cost - shippingCost - suppliesCost - totalFees;
    const margin = sale ? (netProfit / sale) * 100 : 0;

    return { sale, cost, shippingCost, suppliesCost, adRate, threshold, firstRate, firstTierAmount, secondTierAmount, firstTierFee, secondTierFee, orderFee, promotedFee, sellerAdjustmentRate, sellerAdjustment, finalValueFee, totalFees, netProfit, margin };
  }, [coinCost, listPrice, promotedRate, sellerLevel, shipping, storeLevel, supplies]);

  return (
    <section className="-mx-4 overflow-hidden border-y border-[#d7d2c7] bg-[#f8f7f3] md:-mx-6 md:border-x">
      <div className="px-6 py-10 md:px-10 md:py-12">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#9b762f]">Tools for eBay sellers</p>
            <h2 className="mt-4 font-serif text-4xl font-normal tracking-tight text-[#102733] md:text-5xl">Know your profit before you list.</h2>
            <p className="mt-4 text-lg text-slate-600">Estimate marketplace fees, shipping, and your true take-home amount.</p>
          </div>
          <span className="w-fit bg-[#e9e2d2] px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#765f31]">Live calculator</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.65fr_0.85fr]">
        <div className="border-t border-[#d7d2c7] bg-white p-6 md:p-10">
          <h3 className="font-serif text-3xl font-normal text-[#102733]">Listing details</h3>
          <div className="mt-8 grid gap-x-7 gap-y-6 md:grid-cols-2">
            <MoneyInput id="coin-cost" label="Coin purchase price" onChange={setCoinCost} value={coinCost} />
            <MoneyInput id="list-price" label="List price including shipping" onChange={setListPrice} value={listPrice} />
            <MoneyInput id="shipping" label="Estimated shipping" onChange={setShipping} value={shipping} />
            <MoneyInput id="supplies" label="Package & supplies" onChange={setSupplies} value={supplies} />
            <label className="block md:col-span-2" htmlFor="store-level">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-slate-700">eBay store level</span>
              <select className="w-full border border-slate-300 bg-[#fcfbf8] px-4 py-4 text-base text-slate-900 outline-none focus:border-[#ad8739] focus:ring-1 focus:ring-[#ad8739]" id="store-level" onChange={(event) => setStoreLevel(event.target.value as StoreLevel)} value={storeLevel}>
                <option value="starter">Starter Store</option>
                <option value="standard">Basic, Premium, Anchor, and Enterprise Store</option>
              </select>
            </label>
            <label className="block md:col-span-2" htmlFor="seller-level">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-slate-700">Seller level</span>
              <select className="w-full border border-slate-300 bg-[#fcfbf8] px-4 py-4 text-base text-slate-900 outline-none focus:border-[#ad8739] focus:ring-1 focus:ring-[#ad8739]" id="seller-level" onChange={(event) => setSellerLevel(event.target.value as SellerLevel)} value={sellerLevel}>
                <option value="top-rated">Top Rated</option>
                <option value="above-standard">Above Standard</option>
                <option value="below-standard">Below Standard</option>
              </select>
            </label>
            <label className="block md:col-span-2" htmlFor="promoted-rate">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-slate-700">Promoted listing</span>
              <span className="flex items-center border border-slate-300 bg-[#fcfbf8] px-4 focus-within:border-[#ad8739] focus-within:ring-1 focus-within:ring-[#ad8739]">
                <input className="w-full bg-transparent py-4 font-serif text-xl text-slate-900 outline-none" id="promoted-rate" inputMode="decimal" min="0" onChange={(event) => setPromotedRate(event.target.value)} step="0.1" type="number" value={promotedRate} />
                <span className="text-sm font-bold text-slate-500">%</span>
              </span>
            </label>
          </div>
          <p className="mt-7 text-sm leading-6 text-slate-500">Estimate assumes item category is <strong className="font-semibold text-slate-700">Coins &amp; Paper Money</strong> (except Bullion).</p>
        </div>

        <aside aria-live="polite" className="border-t border-[#d7d2c7] bg-[#0c2737] p-6 text-white md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d5b865]">Estimated net profit</p>
          <p className={`mt-6 font-serif text-5xl text-[#e0bd70] md:text-6xl ${estimate.netProfit < 0 ? 'text-red-300' : ''}`}>{money.format(estimate.netProfit)}</p>
          <div className="mt-7 border-y border-white/20 py-4 text-sm">
            <div className="flex justify-between gap-4"><span>Profit margin</span><strong>{estimate.margin.toFixed(1)}%</strong></div>
          </div>
          <dl className="divide-y divide-white/15 text-sm">
            <div className="flex justify-between gap-4 py-4"><dt>Sale price</dt><dd>{money.format(estimate.sale)}</dd></div>
            <div className="flex justify-between gap-4 py-4 text-slate-300"><dt>Coin cost</dt><dd>−{money.format(estimate.cost)}</dd></div>
            <div className="py-4">
              <div className="flex justify-between gap-4"><dt>Final value fees</dt><dd>−{money.format(estimate.finalValueFee)}</dd></div>
              <div className="mt-3 space-y-2 border-l border-[#d5b865]/60 pl-3 text-xs leading-5 text-slate-300">
                <div className="flex justify-between gap-3"><span>{(estimate.firstRate * 100).toFixed(2).replace(/\.00$/, '')}% of {money.format(estimate.firstTierAmount)}</span><span>{money.format(estimate.firstTierFee)}</span></div>
                {estimate.secondTierAmount > 0 && <div className="flex justify-between gap-3"><span>2.35% over {money.format(estimate.threshold)}</span><span>{money.format(estimate.secondTierFee)}</span></div>}
                {estimate.sellerAdjustmentRate < 0 && <div className="flex justify-between gap-3 text-emerald-300"><span>Top Rated discount (10%)</span><span>−{money.format(Math.abs(estimate.sellerAdjustment))}</span></div>}
                {estimate.sellerAdjustmentRate > 0 && <div className="flex justify-between gap-3 text-amber-200"><span>Below Standard surcharge (6%)</span><span>+{money.format(estimate.sellerAdjustment)}</span></div>}
                <div className="flex justify-between gap-3"><span>Per-order fee</span><span>{money.format(estimate.orderFee)}</span></div>
              </div>
            </div>
            <div className="flex justify-between gap-4 py-4 text-slate-300"><dt>Promoted listing ({estimate.adRate.toFixed(1)}%)</dt><dd>−{money.format(estimate.promotedFee)}</dd></div>
            <div className="flex justify-between gap-4 py-4 text-slate-300"><dt>Shipping &amp; package</dt><dd>−{money.format(estimate.shippingCost + estimate.suppliesCost)}</dd></div>
            <div className="flex justify-between gap-4 py-4 font-bold"><dt>Total eBay fees</dt><dd>−{money.format(estimate.totalFees)}</dd></div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
