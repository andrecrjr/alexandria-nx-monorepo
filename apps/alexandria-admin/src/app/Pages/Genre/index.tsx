import { CreatePage, EditPage } from './createAndUpdatedPages';
import { ListPage } from './List';
import request from '../../services';
import { RouteObjectMenu } from 'apps/alexandria-admin/src/types';
import { BookIcon } from '@alexandria/shadcn-ui';

export const GenreContent: RouteObjectMenu = {
  path: 'genre-content',
  menuName: 'Genre Content',
  componentIcon: BookIcon,
  children: [
    {
      path: '',
      element: <ListPage />,
      loader: async () => {
        return await request(`/genre-content`);
      }
    },
    {
      path: 'create',
      element: <CreatePage />
    },
    {
      path: 'edit/:id',
      loader: async ({ params }) => {
        return await request(`/genre-content/${params.id}`);
      },
      element: <EditPage />
    }
  ]
};
