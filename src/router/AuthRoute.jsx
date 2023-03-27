import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from '../api/apiController';

function AuthRoute({ component }) {
  const [authenticated, setAuthenticated] = useState(true);

  useEffect(() => {
    axios
      .get('/member/info')
      .then((res) => {
        setAuthenticated(res.status === 200);
      })
      .catch((error) => {
        setAuthenticated(false);
      });
  }, []);

  return authenticated ? component : <Navigate to='/login' />;
}

export default AuthRoute;
