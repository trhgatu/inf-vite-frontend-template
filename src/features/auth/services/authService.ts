import axiosInstance from '@/services/axios'
import type { LoginFormValues } from '../validators/loginSchema'

export const login = async (data: LoginFormValues) => {
  const res = await axiosInstance.post('/auth/login', data)
  return res.data.data
}

export const logout = () => {
  localStorage.removeItem('access_token')
}
