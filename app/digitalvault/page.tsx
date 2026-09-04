import Image from 'next/image';
import Link from 'next/link';
import { createServerClient } from '@/lib/supabase-server';
import { isSupabaseConfigured } from '@/lib/supabase-config';

export default async function DigitalVaultPage() {
  const supabase = isSupabaseConfigured() ? await createServerClient() : null;
  const user = supabase ? (await supabase.auth.getUser()).data.user : null;

  return (
    <section className="space-y-8">
      <Link className="text-sm text-gray-600 hover:text-gray-900" href="/">
        ← Back to homepage
      </Link>

      <header className="space-y-5 rounded-lg border border-slate-200 bg-white p-7 shadow-sm md:p-9">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b4232a]">Coin Shield Digital Vault</p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
          Catalog your collection in one secure workspace.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-slate-600">
          A simple way to securely catalog your collection, including photos, purchase values, storage location, and
          personal records in one organized place.
        </p>
        <div className="flex flex-wrap gap-3">
          {user ? (
            <Link className="bg-[#102a63] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#183b82]" href="/dashboard">
              Open Dashboard
            </Link>
          ) : (
            <>
              <Link className="bg-[#102a63] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#183b82]" href="/login">
                Log in
              </Link>
              <Link className="border border-slate-300 px-4 py-2 text-sm font-bold text-slate-900 transition hover:border-[#102a63] hover:text-[#102a63]" href="/signup">
                Create account
              </Link>
            </>
          )}
        </div>
      </header>

      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <Image
          alt="Coin Shield Digital Vault preview"
          className="h-auto w-full object-cover"
          height={720}
          priority
          src="/Vault2.png"
          width={1280}
        />
      </div>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Free to Use</h2>
          <p className="mt-2 text-sm text-slate-600">
            Build your collection record with no subscription required and keep your coin details organized in one place.
          </p>
        </article>
        <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Private by Design</h2>
          <p className="mt-2 text-sm text-slate-600">
            Your collection details stay tied to your account so only you can manage purchase values, notes, and images with confidence.
          </p>
        </article>
        <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Built for Collectors</h2>
          <p className="mt-2 text-sm text-slate-600">
            Track inventory, estimated values, storage locations, and images to easily trackyour collection.
          </p>
        </article>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-950">Why Collectors Use the Digital Vault</h2>
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
