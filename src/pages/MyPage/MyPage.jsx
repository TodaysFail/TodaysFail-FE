import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../../api/apiController';
import Button from '../../components/common/Button';
import DailyFailureList from '../../components/myPage/DailyFailureList';
import Profile from '../../components/myPage/Profile';
import TodaysDate from '../../components/myPage/TodaysDate';

export default function MyPage() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    axios
      .get('/member/info')
      .then((res) => {
        setNickname(res.data.name);
      })
      .catch(() => navigate('/login'));
  }, [navigate]);

  const handleClick = () => {
    navigate('/recordPage');
  };

  const buttonType = {
    bgColor: 'black',
    width: '143',
    fontSize: '16',
    isFixed: true,
  };

  return (
    <Container>
      <Main>
        <TodaysDate />
        <Profile nickname={nickname} />
        <DailyFailureList nickname={nickname} />
        <Button type={buttonType} handleClick={handleClick} text={'기록하기'} />
      </Main>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
  overflow: scroll;
  padding-top: 16px;

  ::-webkit-scrollbar {
    display: none;
  }
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
