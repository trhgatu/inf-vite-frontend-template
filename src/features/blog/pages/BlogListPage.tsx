// src/features/users/pages/UserListPage.tsx
import { useEffect, useState } from 'react';
import { getBlogs } from '../services/blogService';
import { BlogTable } from '../components';
import type { IBlog } from '@/types';

export const BlogListPage = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await getBlogs();
        setBlogs(res.data);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">Blog Management</h2>
      {loading ? <p>Loading blogs...</p> : <BlogTable blogs={blogs} />}
    </div>
  );
};
