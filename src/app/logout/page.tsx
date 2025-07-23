'use client';

import { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const LogoutPage = () => {
  const router = useRouter();

  useEffect(() => {
    signOut(auth)
      .then(() => {
        toast.success('Logged out successfully 👋');
      })
      .finally(() => {
        router.push('/login');
      });
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-gray-500 text-lg">Logging you out...</p>
    </div>
  );
};

export default LogoutPage;
