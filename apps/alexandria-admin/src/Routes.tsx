import { createBrowserRouter } from 'react-router-dom';
// import AuthenticatedRoute from './app/molecules/Route/AuthenticatedRoute';
import ListPage from './app/Pages/List';
import LoginPage from './app/Pages/Auth/LoginPage';
import { ProtectedApp } from './app/app';
import { StatusTrackRouter } from './app/Pages/StatusProgress';
import { GenreContent } from './app/Pages/Genre';
import { ContentTypeRouter } from './app/Pages/ContentType';

export const routerRender = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/',
    element: <ProtectedApp />,
    children: [
      {
        path: '',
        element: <ListPage />
      },
      StatusTrackRouter,
      GenreContent,
      ContentTypeRouter
    ]
  }
]);
