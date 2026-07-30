import '../styles/globals.css';
import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'USA Coin Collector',
  description: 'Professional coin collecting supplies and a secure digital vault for collectors.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 md:px-6">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
