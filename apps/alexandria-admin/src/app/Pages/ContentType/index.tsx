import { RouteObject } from 'react-router-dom';
import { CreatePage, EditPage } from './createAndUpdatedPages';
import { ListPage } from './List';
import request from '../../services';

export const ContentTypeRouter: RouteObject = {
  path: 'contenttype',
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
