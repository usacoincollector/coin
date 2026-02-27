import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <section className="space-y-8">
      <Link className="text-sm text-gray-600 hover:text-gray-900" href="/">
        ← Back to homepage
      </Link>

      <header className="relative overflow-hidden rounded-2xl border border-blue-950/20 bg-gradient-to-br from-[#f7f1e4] via-white to-[#f4e8c7] p-7 md:p-10">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(circle_at_18%_20%,rgba(15,31,87,0.08),transparent_22%),radial-gradient(circle_at_80%_24%,rgba(201,45,45,0.08),transparent_24%)]" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <p className="inline-block rounded-full border border-[#0f1f57]/20 bg-white/80 px-4 py-2 text-sm tracking-[0.2em] text-[#0f1f57]">
            ESTABLISHED 07/2007
          </p>
          <h1 className="text-4xl leading-tight text-[#0f1f57] md:text-5xl [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
            About USA Coin Collector
          </h1>
          <p className="max-w-2xl text-base text-slate-700 md:text-lg">
            Built by collectors for collectors, with a focus on dependable supplies, honest pricing, and customer
            support that keeps the hobby approachable for beginners and rewarding for seasoned collectors.
          </p>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">FOCUS</p>
          <h2 className="mt-2 text-2xl text-slate-900 [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
            Quality Supplies
          </h2>
          <p className="mt-2 text-sm text-slate-600">Carefully selected products made for real-world coin collecting and storage needs.</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">APPROACH</p>
          <h2 className="mt-2 text-2xl text-slate-900 [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
            Customer First
          </h2>
          <p className="mt-2 text-sm text-slate-600">Fast, friendly service designed to make each order simple and dependable.</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">MISSION</p>
          <h2 className="mt-2 text-2xl text-slate-900 [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
            Grow the Hobby
          </h2>
          <p className="mt-2 text-sm text-slate-600">Helping both new and experienced hobbyists collect with more confidence.</p>
        </article>
      </section>

      <section className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-xs font-semibold tracking-[0.22em] text-slate-500">ABOUT THIS STORE</p>
          <h2 className="mt-2 text-4xl text-[#0f1f57] [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
            Trusted Numismatic Supplies
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-700">
            Experience a world of premium numismatic coin collecting supplies at USA Coin Collector. We serve both
            beginners and seasoned collectors with top-quality products, competitive prices, and service built around
            reliability.
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Our goal is to make the collecting journey seamless and rewarding by offering the supplies collectors would
            actually choose for their own collections while maintaining a standard of care that keeps buyers coming back.
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            We work to ensure each customer is fully satisfied and can shop with confidence knowing quality and support
            remain central to what we do.
          </p>
        </article>

        <aside className="rounded-2xl border border-[#0f1f57]/15 bg-[#0f1f57] p-6 text-white">
          <p className="text-xs font-semibold tracking-[0.22em] text-blue-100">WHY IT STARTED</p>
          <h2 className="mt-2 text-3xl [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
            Passion Turned Into a Business
          </h2>
          <p className="mt-4 text-sm leading-6 text-blue-50">
            The business began with a passion for coin collecting and the frustration of trying to find genuine products
            without sorting through inconsistent quality and knockoffs.
          </p>
          <p className="mt-3 text-sm leading-6 text-blue-50">
            That experience revealed a gap in the market: collectors needed a dependable one-stop source for authentic,
            consistent coin collecting supplies.
          </p>
        </aside>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-gradient-to-r from-[#fff8e8] via-white to-[#fff3d1] p-6 md:p-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-slate-500">COIN SHIELD PROMISE</p>
        <h2 className="mt-2 text-4xl text-[#0f1f57] [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
          Top US Brand for Coin Flips & Storage
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-700">
          Coin Shield was born from a deep passion for coin collecting. Founded by an avid collector, the brand is built
          around sourcing genuine, high-quality products collectors can trust. From flips and capsules to storage and
          supplies, the goal is simple: offer practical, reliable solutions with the same standard we would want for our
          own collections.
        </p>
      </section>
    </section>
  );
}
