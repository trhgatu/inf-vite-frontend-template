// src/features/users/services/userService.ts
import axiosInstance from '@/services/axios';
import type { IUser } from '@/types/user';

export interface GetUsersParams {
  page?: number;
  limit?: number;
}

export const getUsers = async (params?: GetUsersParams): Promise<{
  data: IUser[];
  pagination: {
    total: number;
    page: number;
    limit: number;
  };
}> => {
  const res = await axiosInstance.get('/users', { params });
  return res.data;
};
