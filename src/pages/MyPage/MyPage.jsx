import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../../api/apiController';
import Button from '../../components/common/Button';
import Logout from '../../components/common/Logout';
import Modal from '../../components/common/Modal';
import DailyFailureList from '../../components/myPage/DailyFailureList';
import EventBanner from '../../components/myPage/EventBanner';
import Profile from '../../components/myPage/Profile';
import TodaysDate from '../../components/myPage/TodaysDate';

export default function MyPage() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [isLogoutHover, setIsLogoutHover] = useState(false);
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  useEffect(() => {
    axios
      .get('/member/info')
      .then((res) => {
        setNickname(res.data.name);
      })
      .catch((err) => {
        navigate('/login');
      });
  }, [navigate]);

  const handleClick = () => {
    navigate('/recordPage');
  };

  const handleLogoutClick = () => {
    axios.post('/member/logout').then(() => navigate('/login'));
  };

  const buttonType = {
    bgColor: 'black',
    width: '143',
    fontSize: '16',
    isFixed: true,
  };

  return (
    <Container>
      <span
        onMouseEnter={() => {
          setIsLogoutHover(true);
        }}
        onMouseLeave={() => {
          setIsLogoutHover(false);
        }}
        onClick={() => setIsVisibleModal(true)}
      >
        <Logout isHover={isLogoutHover} />
      </span>
      {isVisibleModal && (
        <Modal mainText='로그아웃' subText='오늘의 실패에서 로그아웃 하시겠어요?'>
          <ModalButtonContainer>
            <Button
              type={{ bgColor: 'white', width: 95, fontSize: 16 }}
              text='취소하기'
              handleClick={() => setIsVisibleModal(false)}
            />
            <Button
              type={{ bgColor: 'black', width: 95, fontSize: 16 }}
              text='로그아웃'
              handleClick={handleLogoutClick}
            />
          </ModalButtonContainer>
        </Modal>
      )}

      <Main>
        <TodaysDate />
        <Profile nickname={nickname} />
        <EventBanner />
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
  height: 100%;
  margin: 0 auto;
  background-color: white;
  padding-top: 16px;
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

const ModalButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
