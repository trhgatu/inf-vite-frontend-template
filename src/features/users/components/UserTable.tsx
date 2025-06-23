// src/features/users/components/UserTable.tsx
import type { IUser } from '@/types/user';

interface Props {
  users: IUser[];
}

export const UserTable = ({ users }: Props) => {
  return (
    <table className="w-full text-left border">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2">Full name</th>
          <th className="p-2">Email</th>
          <th className="p-2">Role</th>
          <th className="p-2">Status</th>
          <th className="p-2">Created</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id} className="border-t">
            <td className="p-2">{user.fullName}</td>
            <td className="p-2">{user.email}</td>
            <td className="p-2">{user.roleId.name}</td>
            <td className="p-2">{user.status}</td>
            <td className="p-2">{user.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
