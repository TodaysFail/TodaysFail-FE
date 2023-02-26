import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DailyFailureList from '../../components/myPage/DailyFailureList';
import FixedButton from '../../components/myPage/FixedButton';
import Profile from '../../components/myPage/Profile';
import TodaysDate from '../../components/myPage/TodaysDate';

export default function MyPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('nickname') === undefined) navigate('/login');
  }, [navigate]);

  const handleClick = () => {
    navigate('/recordPage');
  };

  return (
    <Container>
      <Main>
        <TodaysDate />
        <Profile />
        <DailyFailureList />
        <FixedButton handleClick={handleClick} name={'기록하기'} />
      </Main>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 390px;
  /* width: 100%;
  min-width: 390px; */
  height: 100vh;
  padding: 0 15px;

  font-family: 'Pretendard-Light';
`;
