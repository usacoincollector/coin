import Link from 'next/link';
import { createServerClient } from '@/lib/supabase-server';

export default async function HomePage() {
  const supabase = createServerClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold">Coin Shield Digital Vault</h1>
      <p className="max-w-2xl text-sm text-gray-600">
        A simple way to securely catalog your collection, including photos, purchase values, and storage location.
      </p>
      <div className="flex gap-3">
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
    </section>
  );
}
