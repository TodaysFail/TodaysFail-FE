import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from '../api/apiController';

function AuthRoute({ component }) {
  const [authenticated, setAuthenticated] = useState(undefined);

  useEffect(() => {
    axios
      .get('/member/info')
      .then((res) => {
        setAuthenticated(res.status === 200);
      })
      .catch(() => {
        setAuthenticated(false);
      });
  }, []);

  if (authenticated === undefined) {
    return <div></div>;
  } else if (authenticated === true) {
    return component;
  } else if (authenticated === false) {
    return <Navigate to='/login' />;
  }
}

export default AuthRoute;
