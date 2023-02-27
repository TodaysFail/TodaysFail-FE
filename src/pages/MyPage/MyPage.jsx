import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../components/common/Logo';
import DailyFailureList from '../../components/myPage/DailyFailureList';
import FixedButton from '../../components/myPage/FixedButton';
import Profile from '../../components/myPage/Profile';
import TodaysDate from '../../components/myPage/TodaysDate';

export default function MyPage() {
  const navigate = useNavigate();
  const nickname = localStorage.getItem('nickname');

  useEffect(() => {
    if (nickname === null) navigate('/login');
  }, [navigate, nickname]);

  const handleClick = () => {
    navigate('/recordPage');
  };

  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Main>
        <TodaysDate />
        <Profile />
        <DailyFailureList nickname={nickname} />
        <FixedButton handleClick={handleClick} name={'기록하기'} />
      </Main>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 390px;
  /* height: 100vh; */
  height: 100%;
  margin: 0 auto;
  background-color: white;
`;

const LogoContainer = styled.div`
  margin: 26px 0 16px 0;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 15px;
  font-family: 'Pretendard-Light';
`;
