import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../common/Logo';

export default function MainLayout() {
  return (
    <Container>
      <Logo />
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
  min-height: 100vh;
  margin: 0 auto;
`;
