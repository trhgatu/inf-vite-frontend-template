// src/routes/index.ts
import { createBrowserRouter } from 'react-router-dom'
import { NotFound } from '@/features/errors/pages/NotFound'
import { AdminLayout, AuthLayout } from '@/layouts'
// Import route modules
import { dashboardRoutes } from '@/features/dashboard/routes/dashboard.route'
import { authRoutes } from '@/features/auth/routes/auth.route'
import { usersRoutes } from '@/features/users/routes/user.route'

export const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      ...authRoutes
    ]
  },
  {
    path: '/',
    element: <AdminLayout />,
    children: [
      ...dashboardRoutes,
      ...usersRoutes
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
