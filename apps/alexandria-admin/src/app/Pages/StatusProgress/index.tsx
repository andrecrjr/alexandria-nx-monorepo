import { RouteObject } from 'react-router-dom';
import { CreatePage, EditPage } from './CRUDPages';
import { ListPage } from './List';
import request from '../../services';

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
    loader: async ({ params }) => {
      return await request(`/status-tracker/${params.id}`);
    },
    element: <EditPage />
  },
  {
    path: 'status-track/delete/:id',
    loader: async ({ params }) => {
      await request(`/status-tracker/${params.id}`, {
        method: 'DELETE'
      });
      return await request(`/status-tracker/all`);
    },
    element: <ListPage />
  }
];
