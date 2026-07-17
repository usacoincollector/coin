import Image from 'next/image';
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
    <section className="space-y-8">
      <div className="flex items-center justify-between gap-3">
        <Link className="text-sm text-slate-700 hover:text-slate-900" href="/">
          ← Back to homepage
        </Link>
      </div>

      <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-7 md:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b4232a]">Established 2007</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              About USA Coin Collector
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Built by collectors for collectors, with a focus on dependable supplies, honest pricing, and customer
              support that keeps the hobby approachable for beginners and rewarding for seasoned collectors.
            </p>
          </div>
          <div className="bg-slate-100 p-6">
            <Image
              alt="Coin collecting supplies"
              className="h-full min-h-[260px] w-full rounded-md object-contain"
              height={640}
              src="/Vault.jpg"
              width={640}
            />
          </div>
        </div>
      </article>

      <div className="grid gap-4 md:grid-cols-3">
        {values.map((value) => (
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" key={value.title}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{value.label}</p>
            <h2 className="mt-3 text-xl font-bold text-slate-950">{value.title}</h2>
            <p className="mt-2 text-sm leading-7 text-slate-700">{value.copy}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">About this store</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
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

        <article className="rounded-lg border border-blue-950/20 bg-[#102a63] p-6 text-white shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">Why it started</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">
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

      <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-3xl font-bold tracking-tight text-slate-950">
          Top US Brand for Coin Flips &amp; Storage
        </h2>
        <p className="mt-3 max-w-4xl text-sm leading-8 text-slate-700">
          Coin Shield was born from a deep passion for coin collecting. Founded by an avid collector, the brand is
          built around sourcing genuine, high-quality products collectors can trust. From flips and capsules to storage
          and supplies, the goal is simple: offer practical, reliable solutions with the same standard we would want
          for our own collections.
        </p>
      </article>

      <section className="rounded-lg bg-[#fbf1e3] px-6 py-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-950">
          Ready to Upgrade Your Collection?
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Explore our complete selection of premium coin collecting supplies.
        </p>
        <a
          className="mt-7 inline-flex min-w-[176px] items-center justify-center rounded-xl bg-[#ffad3b] px-8 py-4 text-lg font-bold text-black transition hover:bg-[#f29f2c] focus:outline-none focus:ring-2 focus:ring-[#102a63] focus:ring-offset-2 focus:ring-offset-[#fbf1e3]"
          href="https://www.ebay.com/str/usacoincollector"
          rel="noreferrer"
          target="_blank"
        >
          Shop Now
        </a>
      </section>
    </section>
  );
}
