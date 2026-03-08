'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export function EmailVerifiedPopup() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (searchParams.get('verified') === '1') {
      setOpen(true);
    }
  }, [searchParams]);

  if (!open) {
    return null;
  }

  const onClose = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('verified');
    const queryString = params.toString();
    router.replace(queryString ? `${pathname}?${queryString}` : pathname);
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-lg border border-line bg-white p-5 shadow-xl">
        <h2 className="text-lg font-semibold text-gray-900">Email Verified</h2>
        <p className="mt-2 text-sm text-gray-700">
          Your email was verified successfully. You can now log in to your Digital Vault account.
        </p>
        <button className="mt-4 w-full bg-accent font-medium text-white" onClick={onClose} type="button">
          Continue to Login
        </button>
      </div>
    </div>
  );
}
