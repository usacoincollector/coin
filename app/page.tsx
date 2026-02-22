import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold">USA Coin Collector</h1>
      <p className="max-w-2xl text-sm text-gray-600">
        Welcome to USA Coin Collector. Use the Digital Vault to securely catalog coins, photos, values, and storage
        locations.
      </p>
      <div className="flex gap-3">
        <Link className="bg-accent px-4 py-2 text-sm font-medium text-white" href="/digitalvault">
          Open Digital Vault
        </Link>
      </div>
    </section>
  );
}
