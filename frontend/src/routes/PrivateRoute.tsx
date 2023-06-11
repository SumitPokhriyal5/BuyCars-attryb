import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  // get the token from the local storage, if it's available then allow 
  // the user to go to the desired page; otherwise, redirect them to the login page
  const token = localStorage.getItem('carToken');
  const parsedToken = token ? JSON.parse(token) : "";

  if (parsedToken) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" />;
  }
}

export default PrivateRoute;
