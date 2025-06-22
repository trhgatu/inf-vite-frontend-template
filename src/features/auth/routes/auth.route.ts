import React from 'react'

import type { RouteObject } from 'react-router-dom'
import { AdminLoginPage } from '../pages/AdminLoginPage'

export const authRoutes: RouteObject[] = [
  {
    path: 'login',
    element: React.createElement(AdminLoginPage),
  },
]

