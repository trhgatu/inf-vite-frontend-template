import type { IBlog } from '@/types';

interface Props {
  blogs: IBlog[];
}

export const BlogTable = ({ blogs }: Props) => {
  return (
    <table className="w-full text-left border">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2">Title</th>
          <th className="p-2">Slug</th>
          <th className="p-2">Status</th>
          <th className="p-2">Published</th>
          <th className="p-2">Created</th>
        </tr>
      </thead>
      <tbody>
        {blogs.map((blog) => (
          <tr key={blog._id} className="border-t">
            <td className="p-2">{blog.title}</td>
            <td className="p-2">{blog.slug}</td>
            <td className="p-2">{blog.status}</td>
            <td className="p-2">{blog.publishedAt}</td>
            <td className="p-2">{blog.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};