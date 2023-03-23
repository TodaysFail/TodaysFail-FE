import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../common/Logo';

export default function MainLayout() {
  return (
    <Container>
      <Link to='/'>
        <Logo />
      </Link>
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding-top: 23px;
  max-width: 390px;
  height: 100vh;
  margin: 0 auto;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
