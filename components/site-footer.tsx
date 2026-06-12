import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/sizing-guide', label: 'Sizing Guide' },
  { href: '/digitalvault', label: 'Digital Vault' },
  { href: '/about-us', label: 'About' },
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

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 text-sm text-slate-600 md:px-6">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-md">
            <Link className="text-lg font-bold tracking-tight text-slate-950" href="/">
              USA Coin Collector
            </Link>
            <p className="mt-3 leading-6">
              Premium supplies for collectors who want reliable storage, clean presentation, and practical collection
              tools.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Explore</p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 md:flex-col md:gap-x-0">
              {navLinks.map((link) => (
                <Link className="hover:text-[#102a63]" href={link.href} key={link.href}>
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
                  className="hover:text-[#102a63]"
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
          <p className="text-slate-500">Products for collectors, dealers, and hobbyists.</p>
        </div>
      </div>
    </footer>
  );
}
