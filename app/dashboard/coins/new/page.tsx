import Link from 'next/link';
import { CoinForm } from '@/components/coin-form';

export default function NewCoinPage() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Add Coin</h1>
        <Link className="text-sm" href="/dashboard">
          ← Back to dashboard
        </Link>
      </div>
      <CoinForm mode="create" />
    </section>
  );
}
