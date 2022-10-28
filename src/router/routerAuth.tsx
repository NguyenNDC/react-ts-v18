import React, { Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

interface Props {
  children: React.ReactNode;
}

const RequireAuth: React.FC<Props> = ({ children }) => {
  const token = useAppSelector((state) => state.app.auth.token);
  return token ? <Fragment>{children}</Fragment> : <Navigate to={'/login'} replace />;
};

export default RequireAuth;
