'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function DeleteCoinButton({ id }: { id: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onDelete = async () => {
    if (!window.confirm('Delete this coin?')) {
      return;
    }

    setLoading(true);

    const response = await fetch(`/api/coins/${id}`, { method: 'DELETE' });

    if (!response.ok) {
      setLoading(false);
      return;
    }

    router.refresh();
  };

  return (
    <button className="text-sm text-red-600" disabled={loading} onClick={onDelete} type="button">
      {loading ? 'Deleting...' : 'Delete'}
    </button>
  );
}
