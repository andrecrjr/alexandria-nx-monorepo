import { Outlet, RouteObject } from 'react-router-dom';
import { CreatePage } from './Create';
import { ListPage } from './List';
import request from '../../services';
import App from '../../app';

export const StatusTrackRouter: RouteObject[] = [
  {
    path: 'status-track',
    element: <ListPage />,
    loader: async () => {
      return await request(`/status-tracker/all`);
    }
  },
  {
    path: 'status-track/create',
    element: <CreatePage />
  },
  {
    path: 'status-track/edit/:id',
    element: <CreatePage />
  }
];
