import { ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export type Props = {
  children: ReactElement;
};

const AuthenticatedRoute = ({ children }: Props): React.ReactElement => {
  const accessToken = localStorage.getItem('accessToken');
  const { pathname } = useLocation();

  if (pathname === '/login') return <Navigate to="/" />;
  return accessToken ? children : <Navigate to="/login" />;
};

export default AuthenticatedRoute;
