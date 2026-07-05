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
    copy: 'We only sell supplies selected long-term protection',
    icon: '/sheild.png'
  },
  {
    title: 'Fast Shipping',
    copy: 'Orders ship quickly to collectors nationwide.',
    icon: '/bolt.png'
  },
  {
    title: 'Expert Support',
    copy: 'Our team can help you find the right supplies.',
    icon: '/book.png'
  }
];

const learningGuides = [
  {
    title: 'New to Coin Collecting?',
    copy: "Learn the basics of starting your collection with our beginner's guide.",
    href: '/faq#beginner'
  },
  {
    title: 'How to Protect Your Coins',
    copy: 'Best practices for preserving the condition and value of your coins.',
    href: '/faq#protect'
  },
  {
    title: 'Choosing the Right Storage',
    copy: 'Compare storage solutions and find what works for your collection.',
    href: '/faq#storage'
  }
];

export default function HomePage() {
  return (
    <div className="space-y-14 pb-12">
      <section className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-7 md:p-10 lg:p-12">
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
              Protect, organize, and store your collection with confidence.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Offering only premium archival-safe coin storage solutions, fast U.S. shipping and excellent customer
              service.
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

          <div className="relative bg-slate-100">
            <Image
              alt="Coin Shield marketing banner"
              className="h-full min-h-[320px] w-full object-cover"
              height={640}
              priority
              src="/MH Marketing Banner.png"
              width={640}
            />
            <a
              className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-md bg-[#c89e28] px-7 py-4 text-lg font-bold text-black shadow-lg transition-opacity duration-200 hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#c89e28]"
              href="https://www.ebay.com/str/usacoincollector"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              <span>Shop All Supplies</span>
            </a>
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
            <div className="flex items-center gap-3">
              <Image alt="" aria-hidden="true" className="h-7 w-7 object-contain" height={28} src={feature.icon} width={28} />
              <h2 className="text-xl font-bold text-slate-950">{feature.title}</h2>
            </div>
            <p className="mt-3 leading-7 text-slate-600">{feature.copy}</p>
          </article>
        ))}
      </section>

      <section className="space-y-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
          Learning & Guides
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {learningGuides.map((guide) => (
            <article
              className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm transition hover:border-[#c89e28]"
              key={guide.title}
            >
              <h3 className="text-2xl font-bold text-slate-950">{guide.title}</h3>
              <p className="mt-5 text-lg leading-8 text-slate-600">{guide.copy}</p>
              <Link className="mt-7 inline-block font-semibold text-[#c89e28] transition hover:text-[#a47d13]" href={guide.href}>
                {'Read More ->'}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm transition [&:has(a:hover)]:border-[#c89e28] md:p-9">
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

      <section className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm transition [&:has(a:hover)]:border-[#c89e28] md:p-9">
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
