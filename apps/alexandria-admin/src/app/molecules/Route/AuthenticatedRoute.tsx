import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

export type Props = {
  children: ReactElement;
};

const AuthenticatedRoute = ({ children }: Props): React.ReactElement => {
  const accessToken = localStorage.getItem('accessToken');

  return accessToken ? children : <Navigate to="/login" />;
};

export default AuthenticatedRoute;
