import { useAuth } from '@/features/auth/hooks/useAuth';

export const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="flex items-center justify-between px-4 py-2 border-b">
      <h1 className="text-lg font-semibold">Admin Panel</h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-700">
          Xin chào, {user?.fullName}
        </span>
        <button
          onClick={logout}
          className="text-red-500 text-sm hover:underline"
        >
          Đăng xuất
        </button>
      </div>
    </header>
  );
};
