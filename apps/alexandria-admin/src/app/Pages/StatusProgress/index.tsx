import { CreatePage, EditPage } from './createAndUpdatedPages';
import { ListPage } from './List';
import request from '../../services';
import { RouteObjectMenu } from 'apps/alexandria-admin/src/types';
import { BookOpenCheckIcon } from 'lucide-react';

export const StatusTrackRouter: RouteObjectMenu = {
  path: 'status-tracker',
  menuName: 'Status Tracking',
  componentIcon: BookOpenCheckIcon,
  children: [
    {
      path: '',
      element: <ListPage />,
      loader: async () => {
        return await request(`/status-tracker`);
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
    }
  ]
};
