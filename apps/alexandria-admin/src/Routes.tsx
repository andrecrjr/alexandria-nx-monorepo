import { createBrowserRouter } from 'react-router-dom';
// import AuthenticatedRoute from './app/molecules/Route/AuthenticatedRoute';
import ListPage from './app/Pages/List';
import LoginPage from './app/Pages/Auth/LoginPage';
import App from './app/app';
import { StatusTrackRouter } from './app/Pages/StatusProgress';

export const routerRender = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <p>Not found...</p>,
    children: [
      {
        path: '',
        element: <ListPage />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'content',
        children: [
          {
            path: 'create',
            element: <ListPage />
          }
        ]
      },
      StatusTrackRouter
    ]
  }
]);
