import { LockIcon } from 'lucide-react';
import { RouteObjectMenu } from '../../../types';
import LoginPage from './LoginPage';

export const AuthRoutes: RouteObjectMenu = {
  path: 'auth',
  children: [
    {
      path: 'login',
      element: <LoginPage />,
      componentIcon: LockIcon
    }
  ]
};
