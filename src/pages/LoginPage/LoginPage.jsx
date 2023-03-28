import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import axios from '../../api/apiController';
import Logo from '../../components/common/Logo';
import Button from '../../components/common/Button';
import Form from '../../components/login/Form';

export default function LoginPage() {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [warningMessage, setWarningMessage] = useState('');

  const navigate = useNavigate();

  // 시작버튼 클릭 시 서버에 로그인 정보 전달
  const submitLoginInfo = async (nickname, password) => {
    if (!nickname) return setWarningMessage('아이디를 입력해 주세요.');
    if (!password) return setWarningMessage('비밀번호를 입력해 주세요.');

    await axios
      .post(`/member/login`, {
        name: nickname,
        password,
      })
      .then((res) => {
        navigate('/');
      })
      .catch((res) => {
        setWarningMessage('입력한 정보가 일치하지 않습니다');
      });
  };

  const nicknameProps = {
    type: 'text',
    value: nickname,
    setValue: setNickname,
    placeholder: '닉네임을 입력하세요!',
    setWarningMessage,
  };

  const passwordProps = {
    type: 'password',
    value: password,
    setValue: setPassword,
    placeholder: '비밀번호를 입력하세요!',
    setWarningMessage,
  };

  return (
    <LoginContainer>
      <Main>
        <LoginTitleContainer>
          <Logo width={'197px'} />
          <LoginTitle>하루의 실패를 기록하고 성장하는 법</LoginTitle>
        </LoginTitleContainer>
        <LoginFormContainer>
          <Form {...nicknameProps} />
          <Form {...passwordProps} />
        </LoginFormContainer>
        <LoginNoticeContainer>
          <LoginNoticeContant>
            <Notice color='#ff4141'>{warningMessage}</Notice>
          </LoginNoticeContant>
        </LoginNoticeContainer>
        <ButtonContainer>
          <Button
            type={{ bgColor: 'black', width: 360 }}
            text='시작하기'
            handleClick={() => {
              submitLoginInfo(nickname, password);
            }}
          ></Button>
          <Button
            type={{ bgColor: 'white', width: 360 }}
            text='회원가입'
            handleClick={() => {
              navigate('/signup');
            }}
          ></Button>
        </ButtonContainer>
      </Main>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding-top: 23px;
  max-width: 390px;
  min-height: 100vh;
  margin: 0 auto;
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
  padding: 215px 0px 0px 0px;
`;

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 55px;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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
