import '../styles/globals.css';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Coin Shield Digital Vault',
  description: 'Track your coin collection securely.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={lato.className} lang="en">
      <body>
        <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-8 md:px-6">{children}</main>
      </body>
    </html>
  );
}
