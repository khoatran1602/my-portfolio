'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/bio');
  }, [router]);

  return null; // or you could return a loading spinner here if you want
}
