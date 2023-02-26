import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DailyFailureList from '../../components/myPage/DailyFailureList';
import FixedButton from '../../components/myPage/FixedButton';
import Profile from '../../components/myPage/Profile';
import TodaysDate from '../../components/myPage/TodaysDate';

export default function MyPage() {
  const navigate = useNavigate();
  const nickname = localStorage.getItem('nickname');
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/member/duplicate/${nickname}`, {
        'Content-Type': 'application/json',
      })
      .then((res) => {
        if (res.data === false) {
          setIsValid(false);
        }
      })
      .catch(() => {
        navigate('/login');
      });
  }, [isValid, navigate, nickname]);

  useEffect(() => {
    if (nickname === null || !isValid) navigate('/login');
  }, [isValid, navigate, nickname]);

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
