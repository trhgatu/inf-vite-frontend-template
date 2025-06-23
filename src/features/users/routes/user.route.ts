// src/features/users/routes/users.route.ts
import React from 'react';
import { UserListPage } from '../pages/UserListPage';

export const usersRoutes = [
  {
    path: '/users',
    element: React.createElement(UserListPage),
  },
];
