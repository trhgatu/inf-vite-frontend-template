// src/features/auth/components/AuthGate.tsx
import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

export const AuthGate = ({ children }: { children: React.ReactNode }) => {
  const { restoreAuth, isInitialized } = useAuth();

  useEffect(() => {
    restoreAuth();
  }, []);

  if (!isInitialized) return <p>Loading...</p>;

  return <>{children}</>;
};
