import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from '../api/apiController';
import MainLayout from '../components/layout/MainLayout';
import LoginPage from '../pages/LoginPage/LoginPage';
import MyPage from '../pages/MyPage/MyPage';
import RecordPage from '../pages/RecordPage/RecordPage';
import SharePage from '../pages/SharePage/SharePage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import AuthRoute from './AuthRoute';

import { NEED_AUTH, NO_AUTH, WHATEVER } from './const';

export default function Router() {
  const routerData = [
    {
      path: '/',
      element: <MyPage />,
      withAuth: NEED_AUTH,
    },
    {
      path: '/recordPage',
      element: <RecordPage />,
      withAuth: NEED_AUTH,
    },
    {
      path: '/login',
      element: <LoginPage />,
      withAuth: NO_AUTH,
    },
    {
      path: '/signup',
      element: <SignUpPage />,
      withAuth: NO_AUTH,
    },
    {
      path: '/receipt/:receiptId',
      element: <SharePage />,
      withAuth: WHATEVER,
    },
  ];

  const [authenticated, setAuthenticated] = useState(true);

  useEffect(() => {
    axios
      .get('/member/info')
      .then((res) => {
        setAuthenticated(res.status === 200);
      })
      .catch(() => setAuthenticated(false));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {routerData.map((route) =>
          route.withAuth === NO_AUTH ? (
            <Route element={route.element} path={route.path} key={route.path} />
          ) : (
            <Route path='/' element={<MainLayout />} key={route.path}>
              <Route
                path={route.path}
                element={<AuthRoute component={route.element} authenticated={authenticated} />}
              />
            </Route>
          ),
        )}
      </Routes>
    </BrowserRouter>
  );
}
