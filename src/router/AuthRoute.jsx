import React from 'react';
import { Navigate } from 'react-router-dom';

function AuthRoute({ component, authenticated }) {
  return authenticated ? component : <Navigate to='/login' />;
}

export default AuthRoute;
