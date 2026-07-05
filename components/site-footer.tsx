import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/sizing-guide', label: 'Sizing Guide' },
  { href: '/digitalvault', label: 'Digital Vault' },
  { href: '/about-us', label: 'About' }
];

const supportLinks = [
  { href: '/shipping', label: 'Shipping & Returns' },
  { href: '/faq', label: 'FAQs' },
  { href: '/contact-us', label: 'Contact' }
];

const storefrontLinks = [
  {
    href: 'https://www.ebay.com/str/usacoincollector',
    label: 'eBay Store'
  },
  {
    href: 'https://www.amazon.com/stores/CoinShield/page/0AE6DA3C-2BAC-46D4-9034-E5418FE7E8B6?lp_asin=B0FKMCCT49&ref_=ast_bln',
    label: 'Amazon Store'
  }
];

const socialLinks = [
  {
    href: '#',
    label: 'Facebook',
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 8.5V6.75C14 5.78 14.22 5 15.55 5H18V1.17C17.58 1.11 16.13 1 14.44 1 10.9 1 8.48 3.16 8.48 7.13V8.5H4.5V13h3.98v10H13V13h3.75l.6-4.5H14Z" />
      </svg>
    )
  },
  {
    href: '#',
    label: 'Twitter',
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.9 2.5H22L15.22 10.25 23.2 21.5H16.95L12.06 14.88 6.46 21.5H3.34L10.6 13.04 2.95 2.5H9.36L13.78 8.45 18.9 2.5ZM17.8 19.52H19.52L8.42 4.37H6.57L17.8 19.52Z" />
      </svg>
    )
  },
  {
    href: '#',
    label: 'Instagram',
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect height="18" rx="5" width="18" x="3" y="3" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" fill="currentColor" r="1" stroke="none" />
      </svg>
    )
  }
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 text-sm text-slate-600 md:px-6">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-md">
            <Link className="text-lg font-bold tracking-tight text-slate-950" href="/">
              USA Coin Collector
            </Link>
            <p className="mt-3 leading-6">
              Premium supplies for collectors who want reliable storage, clean presentation and archival-safe products.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Explore</p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 md:flex-col md:gap-x-0">
              {navLinks.map((link) => (
                <Link className="transition hover:text-[#c89e28]" href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <nav aria-label="Support links">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Support</p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 md:flex-col md:gap-x-0">
              {supportLinks.map((link) => (
                <Link className="transition hover:text-[#c89e28]" href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <nav aria-label="Storefront links">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Shop</p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 md:flex-col md:gap-x-0">
              {storefrontLinks.map((link) => (
                <a
                  className="transition hover:text-[#c89e28]"
                  href={link.href}
                  key={link.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-200 pt-5 md:flex-row md:items-center md:justify-between">
          <p>Copyright &copy; {year} USA Coin Collector. All rights reserved.</p>
          <div className="flex items-center gap-3" aria-label="Social media links">
            {socialLinks.map((link) => (
              <a
                aria-label={link.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-[#c89e28] hover:bg-[#c89e28] hover:text-black"
                href={link.href}
                key={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
