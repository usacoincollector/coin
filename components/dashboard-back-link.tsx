'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function DashboardBackLink() {
  const pathname = usePathname();

  if (pathname === '/dashboard/coins/new') {
    return (
      <Link className="text-sm text-gray-600 hover:text-gray-900" href="/dashboard">
        Cancel
      </Link>
    );
  }

  return (
    <Link className="text-sm text-gray-600 hover:text-gray-900" href="/">
      ← Back to homepage
    </Link>
  );
}
