import Image from 'next/image';
import Link from 'next/link';
import { EducationCard } from '@/components/education-card';
import { EbayProfitCalculator } from '@/components/ebay-profit-calculator';
import { educationArticles } from '@/lib/collector-education';

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
    copy: 'We only sell supplies selected for long-term protection',
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

<<<<<<< ours
=======
const learningGuides = [
  {
    title: '2026 Trump $1 Coin Privy Mark',
    copy: 'Find the limited July 4th privy mark and learn the correct holder size.',
    href: '/collector-education/2026-trump-dollar-july-4-privy-mark'
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

>>>>>>> theirs
export default function HomePage() {
  return (
    <div className="space-y-14 pb-12">
      <section className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="bg-[linear-gradient(145deg,#0b171d_0%,#17242d_68%,#fff_100%)] p-7 md:p-10 lg:bg-[linear-gradient(90deg,#0b171d_0%,#17242d_72%,#fff_100%)] lg:p-12">
            <h1 className="max-w-3xl text-4xl leading-[1.05] tracking-tight md:text-6xl [font-family:Georgia,'Times_New_Roman',serif]">
              <span className="text-white">Protect, organize, and store </span>
              <span className="italic text-[#d2aa62]">your collection with confidence.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white md:text-xl [font-family:Georgia,'Times_New_Roman',serif]">
              Offering only premium archival-safe coin storage solutions, fast U.S. shipping and excellent customer
              service.
            </p>
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

      <section className="bg-[#0c2737] px-4 py-12 text-white md:px-10 md:py-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d5b865]">Collector Education Center</p>
            <h2 className="mt-4 font-serif text-4xl font-normal md:text-5xl">Knowledge protects value.</h2>
            <p className="mt-4 text-lg text-slate-300">Practical guides written for collectors</p>
          </div>
          <Link className="w-fit border-b border-[#d5b865] pb-2 text-sm font-bold text-white hover:text-[#e3c86f]" href="/collector-education">Visit the learning center →</Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <EducationCard article={educationArticles[0]} featured />
          <div className="grid gap-6 sm:grid-cols-2">
            <EducationCard article={educationArticles[1]} />
            <EducationCard article={educationArticles[2]} />
          </div>
        </div>
      </section>

      <EbayProfitCalculator />

      <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition [&:has(a:hover)]:border-[#c89e28]">
        <div className="grid gap-6 p-7 md:grid-cols-[1fr_auto] md:items-center md:p-9">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Digital Vault App</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">Catalog your collection as it grows.</h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Use the free Digital Vault to record coin details, photos, values, purchase history, and storage locations
              in one organized place.
            </p>
          </div>
          <Link
            className="inline-flex w-fit items-center justify-center rounded-md bg-[#c89e28] px-6 py-3 text-sm font-bold text-black shadow-sm transition hover:bg-[#d5ad3c] focus:outline-none focus:ring-2 focus:ring-[#102a63] focus:ring-offset-2 md:justify-self-end"
            href="https://www.usacoincollector.com/digitalvault"
          >
            Open Digital Vault
          </Link>
        </div>
        <div className="bg-slate-100">
          <Image
            alt="Digital Vault App for organizing and tracking a coin collection"
            className="h-auto w-full object-contain"
            height={900}
            src="/digitalvaultmarketing.jpg"
            width={1600}
          />
        </div>
      </article>

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
