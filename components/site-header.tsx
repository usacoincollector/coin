import Image from 'next/image';
import { Dancing_Script } from 'next/font/google';
import Link from 'next/link';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
});

const navLinks = [
  { href: '/sizing-guide', label: 'Sizing Guide' },
  { href: '/digitalvault', label: 'Digital Vault' },
  { href: '/about-us', label: 'About' }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-black">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
        <Link className="flex items-center gap-3 text-white" href="/">
          <Image
            alt="Coin Shield logo"
            className="h-16 w-16 rounded-md object-contain sm:h-24 sm:w-24"
            height={96}
            priority
            src="/logo_shop.png"
            width={96}
          />
          <span>
            <span className={`${dancingScript.className} block text-4xl font-bold text-white sm:text-5xl`}>
              USA Coin Collector
            </span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium">
          {navLinks.map((link) => (
            <Link className="text-white/90 transition hover:text-white" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
          <a
            className="rounded-md bg-[#102a63] px-4 py-2 text-white transition hover:bg-[#183b82]"
            href="https://www.ebay.com/str/usacoincollector"
            rel="noreferrer"
            target="_blank"
          >
            Shop Store
          </a>
          <Link className="text-white/90 transition hover:text-white" href="/contact-us">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
