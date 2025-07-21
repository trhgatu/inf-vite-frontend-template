// src/features/users/services/blogService.ts
import axiosInstance from '@/services/axios';
import type { IBlog } from '@/types';

export interface GetBlogsParams {
  page?: number;
  limit?: number;
  status?: string;
  search?: string;
}

export const getBlogs = async (params?: GetBlogsParams): Promise<{
  data: IBlog[];
  pagination: {
    total: number;
    page: number;
    limit: number;
  };
}> => {
  const res = await axiosInstance.get('/blogs', { params });
  return res.data;
};
