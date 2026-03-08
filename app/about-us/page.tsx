import Link from 'next/link';

const values = [
  {
    title: 'Quality Supplies',
    label: 'FOCUS',
    copy: 'Carefully selected products made for real-world coin collecting and storage needs.'
  },
  {
    title: 'Customer First',
    label: 'APPROACH',
    copy: 'Fast, friendly service designed to make each order simple and dependable.'
  },
  {
    title: 'Grow the Hobby',
    label: 'MISSION',
    copy: 'Helping both new and experienced hobbyists collect with more confidence.'
  }
];

export default function AboutUsPage() {
  return (
    <section className="space-y-6 [font-family:'Trebuchet_MS','Lucida_Sans_Unicode','Lucida_Grande','Verdana',sans-serif]">
      <div className="flex items-center justify-between gap-3">
        <Link className="text-sm text-slate-700 hover:text-slate-900" href="/">
          {'<- Back to homepage'}
        </Link>
      </div>

      <article className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-[#fff7db] p-8">
        <p className="inline-block rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-semibold tracking-[0.2em] text-slate-600">
          ESTABLISHED 07/2007
        </p>
        <h1 className="mt-3 text-6xl text-[#102a63] [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
          About USA Coin Collector
        </h1>
        <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-700">
          Built by collectors for collectors, with a focus on dependable supplies, honest pricing, and customer support
          that keeps the hobby approachable for beginners and rewarding for seasoned collectors.
        </p>
      </article>

      <div className="grid gap-4 md:grid-cols-3">
        {values.map((value) => (
          <article className="rounded-xl border border-slate-200 bg-white p-5" key={value.title}>
            <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">{value.label}</p>
            <h2 className="mt-2 text-4xl text-[#102a63] [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
              {value.title}
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-700">{value.copy}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">ABOUT THIS STORE</p>
          <h2 className="mt-2 text-5xl text-[#102a63] [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
            Trusted Numismatic Supplies
          </h2>
          <p className="mt-3 text-sm leading-8 text-slate-700">
            Experience a world of premium numismatic coin collecting supplies at USA Coin Collector. We serve both
            beginners and seasoned collectors with top-quality products, competitive prices, and service built around
            reliability.
          </p>
          <p className="mt-3 text-sm leading-8 text-slate-700">
            Our goal is to make the collecting journey seamless and rewarding by offering the supplies collectors would
            actually choose for their own collections while maintaining a standard of care that keeps buyers coming
            back.
          </p>
          <p className="mt-3 text-sm leading-8 text-slate-700">
            We work to ensure each customer is fully satisfied and can shop with confidence knowing quality and support
            remain central to what we do.
          </p>
        </article>

        <article className="rounded-2xl border border-blue-950/20 bg-[#102a63] p-6 text-white">
          <p className="text-xs font-semibold tracking-[0.2em] text-blue-200">WHY IT STARTED</p>
          <h2 className="mt-2 text-5xl [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
            Passion Turned Into a Business
          </h2>
          <p className="mt-3 text-sm leading-8 text-blue-50">
            The business began with a passion for coin collecting and the frustration of trying to find genuine
            products without sorting through inconsistent quality and knockoffs.
          </p>
          <p className="mt-3 text-sm leading-8 text-blue-50">
            That experience revealed a gap in the market: collectors needed a dependable one-stop source for authentic,
            consistent coin collecting supplies.
          </p>
        </article>
      </div>

      <article className="rounded-2xl border border-[#f0e2b3] bg-[#fff9e5] p-6">
        <h2 className="mt-2 text-5xl text-[#102a63] [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
          Top US Brand for Coin Flips &amp; Storage
        </h2>
        <p className="mt-3 max-w-4xl text-sm leading-8 text-slate-700">
          Coin Shield was born from a deep passion for coin collecting. Founded by an avid collector, the brand is
          built around sourcing genuine, high-quality products collectors can trust. From flips and capsules to storage
          and supplies, the goal is simple: offer practical, reliable solutions with the same standard we would want
          for our own collections.
        </p>
      </article>
    </section>
  );
}
