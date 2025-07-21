// src/features/users/routes/users.route.ts
import React from 'react';
import { BlogListPage } from '../pages/BlogListPage';

export const blogsRoutes = [
  {
    path: '/blogs',
    element: React.createElement(BlogListPage),
  },
];
