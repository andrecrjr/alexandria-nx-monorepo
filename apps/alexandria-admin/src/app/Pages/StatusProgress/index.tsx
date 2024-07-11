import { RouteObject } from 'react-router-dom';
import { CreatePage, EditPage } from './createAndUpdatedPages';
import { ListPage } from './List';
import request from '../../services';

export const StatusTrackRouter: RouteObject = {
  path: 'status-track',
  children: [
    {
      path: '',
      element: <ListPage />,
      loader: async () => {
        return await request(`/status-tracker/all`);
      }
    },
    {
      path: 'create',
      element: <CreatePage />
    },
    {
      path: 'edit/:id',
      loader: async ({ params }) => {
        return await request(`/status-tracker/${params.id}`);
      },
      element: <EditPage />
    },
    {
      path: 'delete/:id',
      loader: async ({ params }) => {
        await request(`/status-tracker/${params.id}`, {
          method: 'DELETE'
        });
        return await request(`/status-tracker/all`);
      },
      element: <ListPage />
    }
  ]
};
