// src/features/dashboard/routes/dashboard.routes.ts
import React from 'react'
import { Dashboard } from '@/features/dashboard/pages/Dashboard'
import type { RouteObject } from 'react-router-dom'

export const dashboardRoutes: RouteObject[] = [
  {
    path: '',
    element: React.createElement(Dashboard),
  },
]
