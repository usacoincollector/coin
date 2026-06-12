import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    title: 'Premium Coin Flips',
    copy: 'Archival-safe cardboard holders with clear Mylar windows for clean display and dependable storage.',
    image: '/800-ASST.jpg'
  },
  {
    title: 'Coin Capsules',
    copy: 'Crystal-clear acrylic capsules sized for Silver Eagles, modern issues, and everyday collection needs.',
    image: '/CAPSULE-ASSRT.jpg'
  },
  {
    title: 'Storage Boxes',
    copy: 'Sturdy single-row and display-ready boxes that keep flips, holders, and capsules organized.',
    image: '/BOX7.jpg'
  },
  {
    title: 'Currency Storage',
    copy: 'Toploader sleeves and currency supplies for protecting modern US paper notes.',
    image: '/TOP-MC3.jpg'
  }
];

const features = [
  {
    title: 'Archival Safe',
    copy: 'Materials selected for long-term protection and clean presentation.'
  },
  {
    title: 'Collector Focused',
    copy: 'Practical sizing and storage options built around real collecting workflows.'
  },
  {
    title: 'Quality Materials',
    copy: 'Durable supplies selected for clarity, consistency, and dependable everyday protection.'
  }
];

export default function HomePage() {
  return (
    <div className="space-y-14 pb-12">
      <section className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-7 md:p-10 lg:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b4232a]">Professional coin supplies</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
              Protect, organize, and track your collection with confidence.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Coin Shield products pair archival-safe coin storage with a free Digital Vault, giving collectors a
              dependable way to protect physical pieces and manage collection records in one place.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                className="rounded-md bg-[#102a63] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#183b82]"
                href="/digitalvault"
              >
                Open Digital Vault
              </Link>
              <Link
                className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:border-[#102a63] hover:text-[#102a63]"
                href="/sizing-guide"
              >
                View Sizing Guide
              </Link>
            </div>
          </div>

          <div className="bg-slate-100">
            <Image
              alt="Coin Shield marketing banner"
              className="h-full min-h-[320px] w-full object-cover"
              height={640}
              priority
              src="/MH Marketing Banner.png"
              width={640}
            />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Product Categories</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {categories.map((category) => (
            <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm" key={category.title}>
              <Image
                alt={`${category.title} product image`}
                className="h-56 w-full bg-slate-100 object-cover"
                height={420}
                src={category.image}
                width={640}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#102a63]">{category.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{category.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {features.map((feature) => (
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" key={feature.title}>
            <h2 className="text-xl font-bold text-slate-950">{feature.title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{feature.copy}</p>
          </article>
        ))}
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm md:p-9">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Digital Vault App</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Catalog your collection as it grows.
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Use the free Digital Vault to record coin details, photos, values, purchase history, and storage
              locations in one organized place.
            </p>
          </div>
          <Link
            className="rounded-md bg-[#102a63] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#183b82] md:justify-self-end"
            href="/digitalvault"
          >
            Open Digital Vault
          </Link>
        </div>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm md:p-9">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Ready to get organized?</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">Shop supplies for your collection.</h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Browse coin flips, capsules, storage boxes, and currency supplies selected for reliable everyday
              protection.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a
              className="rounded-md bg-[#102a63] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#183b82]"
              href="https://www.ebay.com/str/usacoincollector"
              rel="noreferrer"
              target="_blank"
            >
              Browse Store
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
