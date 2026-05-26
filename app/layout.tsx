import '../styles/globals.css';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import { SiteFooter } from '@/components/site-footer';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'USA Coin Collector',
  description: 'Track your coin collection securely.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={lato.className} lang="en">
      <body className="flex min-h-screen flex-col">
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 md:px-6">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
