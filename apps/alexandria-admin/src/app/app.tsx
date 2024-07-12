import { Outlet } from 'react-router-dom';
import Layout from './Layout';
import AuthenticatedRoute from './molecules/Route/AuthenticatedRoute';

export function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export function ProtectedApp() {
  return (
    <Layout>
      <AuthenticatedRoute>
        <Outlet />
      </AuthenticatedRoute>
    </Layout>
  );
}
