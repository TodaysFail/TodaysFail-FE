import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Button from '../../components/login/Button';
import SignForm from '../../components/login/SignForm';

export default function LoginPage() {
  const [nickname, setNickname] = useState('');
  const [isDuplicated, setIsDuplicated] = useState(true);
  const [warningMessage, setWarningMessage] = useState('');

  const navigate = useNavigate();

  // 로컬 스토리지에 닉네임 있다면 마이페이지로 리다이렉트
  useEffect(() => {
    if (localStorage.getItem('nickname')) navigate('/');
  }, [navigate]);

  // 시작버튼 클릭 시 서버에 닉네임 전달
  const submitNickname = async (nickname) => {
    await axios
      .post('https://port-0-todaysfail-be-r8xoo2mlejm1bez.sel3.cloudtype.app:443/api/v1/member', {
        name: nickname,
      })
      .then((res) => {
        navigate('/');
        localStorage.setItem('nickname', nickname);
      })
      .catch((res) => {});
  };

  return (
    <LoginContainer>
      <LoginTitleContainer>
        <Rectangle />
        <LoginTitle>오늘의 실패를 기록하고 성장하기</LoginTitle>
      </LoginTitleContainer>
      <SignForm
        nickname={nickname}
        setNickname={setNickname}
        isDuplicated={isDuplicated}
        setIsDuplicated={setIsDuplicated}
        warningMessage={warningMessage}
        setWarningMessage={setWarningMessage}
      />
      <LoginNoticeContainer>
        <StyledHr />
        {warningMessage && <Notice>{warningMessage}</Notice>}
        <Button
          text='시작하기'
          disabled={isDuplicated}
          handleClick={() => {
            submitNickname(nickname);
          }}
        ></Button>
      </LoginNoticeContainer>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  dispay: flex;
  justify-content: center;
  flex-direction: column;
  width: 390px;
  height: 844px;
  margin: 0 auto;
  background: lightblue;
`;

const LoginTitleContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  padding: 240px 120px;
`;

const LoginNoticeContainer = styled.div``;

const Rectangle = styled.div`
  width: 165px;
  height: 54px;
  left: 112px;
  top: 243px;
  background: #d9d9d9;
`;

const LoginTitle = styled.div`
  width: 300px;
  font-size: 14px;
  color: #1e1e1e;
`;

const Notice = styled.div`
  position: flex;
  width: 132px;
  height: 18px;
  left: 36px;
  top: 494px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  /* identical to box height, or 18px */

  letter-spacing: -0.011em;

  color: #ff4141;
`;

const StyledHr = styled.hr`
  position: flex;
  width: 360px;
  height: 0px;
  left: 15px;
  top: 486px;

  border: 1px solid #b8b8b8;
`;
