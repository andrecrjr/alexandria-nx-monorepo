import { RouteObject } from 'react-router-dom';
import { Create } from './Create';
import { ListPage } from './List';
import request from '../../services';

export const StatusTrackRouter: RouteObject = {
  path: 'status-track',
  element: <ListPage />,
  loader: async () => {
    return await request(`/status-tracker/all`);
  },
  children: [{ path: 'create', element: <Create /> }]
};
