import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDebounce, useUpdateEffect } from 'react-use';
import styled from 'styled-components';
import axios from '../../api/apiController';
import Button from '../../components/common/Button';
import Logo from '../../components/common/Logo';
import SignUpForm from '../../components/signUp/SignUpForm';

export default function SignUpPage() {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [nicknameWarnText, setNicknameWarnText] = useState('');
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const [pwWarnText, setPwWarnText] = useState('');
  const [isPwValid, setIsPwValid] = useState(false);
  const [pwCheckWarnText, setPwCheckWarnText] = useState('');
  const [isPwCheckValid, setIsPwCheckValid] = useState(false);
  const navigate = useNavigate();

  const nicknameValid = async () => {
    const regex = /^[a-z0-9ㄱ-ㅎ가-힣]{1,10}$/;

    if (nickname.length > 0) {
      const { data } = await axios.get(`/member/duplicate/${nickname}`);

      if (data) {
        return [setNicknameWarnText('이미 존재하는 닉네임입니다'), setIsNicknameValid(false)];
      } else if (!regex.test(nickname)) {
        return [
          setNicknameWarnText('10자 이하로 작성해 주세요 (한글/영문 소문자/숫자 중 조합)'),
          setIsNicknameValid(false),
        ];
      } else {
        return [setNicknameWarnText('사용할 수 있는 닉네임입니다'), setIsNicknameValid(true)];
      }
    }
  };

  const passwordValid = () => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\w\W]{8,}$/;

    if (regex.test(password)) {
      return [setPwWarnText('사용할 수 있는 비밀번호입니다'), setIsPwValid(true)];
    } else {
      return [setPwWarnText('8자 이상 입력해 주세요 (영문 대소문자/숫자 각 1자리 이상 조합)'), setIsPwValid(false)];
    }
  };

  const pwCheckValid = () => {
    if (password === pwCheck) {
      return [setPwCheckWarnText('비밀번호가 일치합니다'), setIsPwCheckValid(true)];
    } else {
      return [setPwCheckWarnText('비밀번호가 일치하지 않습니다'), setIsPwCheckValid(false)];
    }
  };

  useUpdateEffect(() => {
    nicknameValid();
  }, [nickname]);

  useDebounce(
    () => {
      nicknameValid();
    },
    1000,
    [nickname],
  );

  useUpdateEffect(() => {
    passwordValid();
  }, [password]);

  useUpdateEffect(() => {
    pwCheckValid();
  }, [pwCheck]);

  const buttonType = {
    bgColor: isNicknameValid && isPwValid && isPwCheckValid ? 'black' : 'white',
    width: '359',
    fontSize: '16',
    isFixed: false,
  };

  const nicknameProps = {
    title: '닉네임',
    inputID: 'nickname',
    maxLength: '10',
    placeholder: '닉네임을 정해주세요!',
    type: 'text',
    value: nickname,
    setValue: setNickname,
    warningText: nicknameWarnText,
    isValid: isNicknameValid,
  };

  const passwordProps = {
    title: '비밀번호',
    inputID: 'pw',
    maxLength: '16',
    placeholder: '비밀번호를 입력하세요',
    type: 'password',
    value: password,
    setValue: setPassword,
    warningText: pwWarnText,
    isValid: isPwValid,
  };

  const passwordCheckProps = {
    title: '비밀번호 확인',
    inputID: 'pwCheck',
    maxLength: '16',
    placeholder: '비밀번호를 한번 더 입력하세요',
    type: 'password',
    value: pwCheck,
    setValue: setPwCheck,
    warningText: pwCheckWarnText,
    isValid: isPwCheckValid,
  };

  const activeButton = () => {
    if (isNicknameValid && isPwValid && isPwCheckValid) {
      return true;
    } else {
      return false;
    }
  };

  const handleClick = async () => {
    if (activeButton) {
      await axios
        .post(`/member`, {
          name: nickname,
          password,
        })
        .then((res) => {
          navigate('/login');
        })
        .catch((res) => {});
    }
  };

  return (
    <LoginContainer>
      <Logo />
      <Title>회원가입</Title>
      <FormContainer>
        <SignUpForm {...nicknameProps} />
        <SignUpForm {...passwordProps} />
        <SignUpForm {...passwordCheckProps} />
      </FormContainer>
      {/* 공통 컴포넌트 수정 후 버튼 수정 */}
      <ButtonContainer>
        <Button disabled={activeButton} type={buttonType} text={'가입하기'} handleClick={handleClick} />
      </ButtonContainer>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  max-width: 390px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 110px 15px 0;
`;

const Title = styled.h1`
  margin-top: 6px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.011em;
  color: #1e1e1e;
`;

const FormContainer = styled.form`
  margin-top: 48px;
  width: 100%;
  height: 100%;
`;

const ButtonContainer = styled.div`
  margin-top: 79px;
`;
