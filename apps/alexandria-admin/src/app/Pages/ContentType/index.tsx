import { CreatePage, EditPage } from './createAndUpdatedPages';
import { ListPage } from './List';
import request from '../../services';
import { RouteObjectMenu } from 'apps/alexandria-admin/src/types';
import { Album } from 'lucide-react';

export const ContentTypeRouter: RouteObjectMenu = {
  path: 'contenttype',
  menuName: 'Content Type',
  componentIcon: Album,
  children: [
    {
      path: '',
      element: <ListPage />,
      loader: async () => {
        return await request(`/contenttype`);
      }
    },
    {
      path: 'create',
      element: <CreatePage />
    },
    {
      path: 'edit/:id',
      loader: async ({ params }) => {
        return await request(`/contenttype/${params.id}`);
      },
      element: <EditPage />
    }
  ]
};
