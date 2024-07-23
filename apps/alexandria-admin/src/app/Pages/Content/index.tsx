import { CreatePage, EditPage } from './createAndUpdatedPages';
import { ListPage } from './List';
import request from '../../services';
import { RouteObjectMenu } from 'apps/alexandria-admin/src/types';
import { Folder } from 'lucide-react';

export const ContentRouter: RouteObjectMenu = {
  path: 'content',
  menuName: 'Content Hub',
  componentIcon: Folder,
  children: [
    {
      path: '',
      element: <ListPage />,
      loader: async () => {
        return await request(`/content/all`);
      }
    },
    {
      path: 'create',
      element: <CreatePage />
    },
    {
      path: 'edit/:id',
      loader: async ({ params }) => {
        return await request(`/content/${params.id}`);
      },
      element: <EditPage />
    }
  ]
};
