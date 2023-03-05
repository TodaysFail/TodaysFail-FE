import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Logo from '../../components/common/Logo';
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
      .post(`${process.env.REACT_APP_BASE_URL}/member`, {
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
      <Main>
        <LoginTitleContainer>
          <Logo width={'197px'} />
          <LoginTitle>하루의 실패를 기록하고 성장하는 법</LoginTitle>
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
          <LoginNoticeContant>
            <Notice color={isDuplicated ? '#ff4141' : '#2BCF4F'}>{warningMessage}</Notice>
          </LoginNoticeContant>
        </LoginNoticeContainer>
        <LoginButtonContainer>
          <Button
            text='시작하기'
            disabled={isDuplicated}
            handleClick={() => {
              submitNickname(nickname);
            }}
          ></Button>
        </LoginButtonContainer>
      </Main>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 0 15px;
  margin: 0 auto;
  background-color: #ffffff;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const LoginTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginNoticeContainer = styled.div`
  display: flex;
  width: 100%;
  padding-left: 20px;
  margin-top: 10px;
`;
const LoginNoticeContant = styled.div`
  display: flex;
`;

const LoginTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  font-size: 14px;
  color: #1e1e1e;

  font-family: 'Pretendard-Light';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;

  letter-spacing: -0.011em;
  color: #1e1e1e;
`;

const Notice = styled.div`
  display: flex;
  height: 56px;

  font-family: 'Pretendard-Light';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  /* identical to box height, or 18px */

  letter-spacing: -0.011em;

  color: ${(props) => props.color};
`;
