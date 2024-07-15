import { RouteObject } from 'react-router-dom';
import { CreatePage, EditPage } from './createAndUpdatedPages';
import { ListPage } from './List';
import request from '../../services';

export const GenreContent: RouteObject = {
  path: 'genre-content',
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
