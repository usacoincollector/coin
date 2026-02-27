import Link from 'next/link';
import { createServerClient } from '@/lib/supabase-server';

export default async function DigitalVaultPage() {
  const supabase = createServerClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <section className="space-y-8">
      <Link className="text-sm text-gray-600 hover:text-gray-900" href="/">
        ← Back to homepage
      </Link>

      <header className="space-y-4 rounded-2xl border border-blue-950/15 bg-gradient-to-br from-[#f5f8ff] via-white to-[#eef4ff] p-6">
        <p className="inline-block rounded-full border border-[#0f1f57]/20 bg-white px-4 py-2 text-xl font-semibold text-[#0f1f57] shadow-sm">
          Coin Shield Digital Vault
        </p>
        <p className="max-w-2xl text-sm text-gray-600 md:text-base">
          A simple way to securely catalog your collection, including photos, purchase values, storage location, and
          personal records in one organized place.
        </p>
        <div className="flex flex-wrap gap-3">
          {user ? (
            <Link className="bg-accent px-4 py-2 text-sm font-medium text-white" href="/dashboard">
              Open Dashboard
            </Link>
          ) : (
            <>
              <Link className="bg-accent px-4 py-2 text-sm font-medium text-white" href="/login">
                Log in
              </Link>
              <Link className="px-4 py-2 text-sm font-medium" href="/signup">
                Create account
              </Link>
            </>
          )}
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-line bg-white p-5">
          <h2 className="text-lg font-semibold text-slate-900">Free to Use</h2>
          <p className="mt-2 text-sm text-slate-600">
            Build your collection record with no subscription required and keep your coin details organized in one place.
          </p>
        </article>
        <article className="rounded-xl border border-line bg-white p-5">
          <h2 className="text-lg font-semibold text-slate-900">Private by Design</h2>
          <p className="mt-2 text-sm text-slate-600">
            Your collection details stay tied to your account so you can manage purchase values, notes, and images with confidence.
          </p>
        </article>
        <article className="rounded-xl border border-line bg-white p-5">
          <h2 className="text-lg font-semibold text-slate-900">Built for Collectors</h2>
          <p className="mt-2 text-sm text-slate-600">
            Track inventory, estimated values, storage locations, and images in a format designed around real collecting needs.
          </p>
        </article>
      </section>

      <section className="rounded-2xl border border-[#0f1f57]/15 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-[#0f1f57]">Why Collectors Use the Digital Vault</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-600 md:text-base">
          The Digital Vault gives you a clean, secure place to document your collection as it grows. Store purchase
          values, estimated values, notes, photos, and storage details so you always know what you own and where it is.
        </p>
        <p className="mt-3 max-w-3xl text-sm text-slate-600 md:text-base">
          Whether you are just getting started or already managing a serious collection, the goal is simple: help you
          stay organized, protect your information, and make your collection easier to track over time.
        </p>
      </section>
    </section>
  );
}
