// src/features/users/pages/UserListPage.tsx
import { useEffect, useState } from 'react';
import { getUsers } from '../services/userService';
import { UserTable } from '../components/UserTable';
import type { IUser } from '@/types/user';

export const UserListPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await getUsers();
        setUsers(res.data);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">User Management</h2>
      {loading ? <p>Loading users...</p> : <UserTable users={users} />}
    </div>
  );
};
