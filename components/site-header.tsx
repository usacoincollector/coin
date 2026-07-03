'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/sizing-guide', label: 'Sizing Guide' },
  { href: '/digitalvault', label: 'Digital Vault' },
  { href: '/about-us', label: 'About' }
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 10);

    updateScrolled();
    window.addEventListener('scroll', updateScrolled, { passive: true });

    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 border-b border-[#a47d13]/70 transition-colors duration-300 ${
        isScrolled ? 'bg-[#c89e28]/85 shadow-lg backdrop-blur-md' : 'bg-[#c89e28]'
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-1.5 px-4 py-1.5 md:flex-row md:items-center md:justify-between md:px-6">
        <Link className="flex items-center text-white" href="/" aria-label="USA Coin Collector home">
          <Image
            alt="USA Coin Collector logo banner"
            className="h-auto w-44 object-contain sm:w-56"
            height={100}
            priority
            src="/LogoBanner.png"
            width={360}
          />
        </Link>

        <nav aria-label="Primary navigation" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium">
          {navLinks.map((link) => (
            <Link className="text-white/90 transition hover:text-white" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
          <a
            className="rounded-md bg-[#102a63] px-3 py-1.5 text-white transition hover:bg-[#183b82]"
            href="https://www.ebay.com/str/usacoincollector"
            rel="noreferrer"
            target="_blank"
          >
            Shop Store
          </a>
        </nav>
      </div>
    </header>
  );
}
