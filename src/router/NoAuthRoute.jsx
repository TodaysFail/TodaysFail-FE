import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from '../api/apiController';

function NoAuthRoute({ component }) {
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
    return <Navigate to='/' />;
  } else if (authenticated === false) {
    return component;
  }
}

export default NoAuthRoute;
