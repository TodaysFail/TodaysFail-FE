import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUpdateEffect } from 'react-use';
import styled from 'styled-components';
import axios from '../../api/apiController';
import Logo from '../../components/common/Logo';
import SignUpButton from '../../components/signUp/SignUpButton';
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
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

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
    } else {
      return [setNicknameWarnText(''), setIsNicknameValid(false)];
    }
  };

  const passwordValid = () => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\w\W]{8,}$/;

    if (password.length > 0) {
      if (regex.test(password)) {
        return [setPwWarnText('사용할 수 있는 비밀번호입니다'), setIsPwValid(true)];
      } else {
        return [setPwWarnText('8자 이상 입력해 주세요 (영문 대소문자/숫자 각 1자리 이상 조합)'), setIsPwValid(false)];
      }
    } else {
      return [setPwWarnText(''), setIsPwValid(false)];
    }
  };

  const pwCheckValid = () => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\w\W]{8,}$/;

    if (pwCheck.length > 0 && regex.test(pwCheck)) {
      if (pwCheck === password) {
        return [setPwCheckWarnText('비밀번호가 일치합니다'), setIsPwCheckValid(true)];
      } else {
        return [setPwCheckWarnText('비밀번호가 일치하지 않습니다'), setIsPwCheckValid(false)];
      }
    } else {
      return [setPwCheckWarnText(''), setIsPwCheckValid(false)];
    }
  };

  useUpdateEffect(() => {
    setNicknameWarnText('');

    const nicknameValidTimer = setTimeout(() => {
      nicknameValid();
    }, 1000);

    return () => {
      clearTimeout(nicknameValidTimer);
    };
  }, [nickname]);

  useUpdateEffect(() => {
    if (isPwValid) {
      setPwCheckWarnText('');
    } else {
      setPwCheckWarnText('');
      setPwWarnText('');
    }

    const pwValidTimer = setTimeout(() => {
      passwordValid();
      pwCheckValid();
    }, 1000);

    return () => {
      clearTimeout(pwValidTimer);
    };
  }, [password, pwCheck]);

  const activeButton = () => {
    if (isNicknameValid && isPwValid && isPwCheckValid) {
      return setIsDisabled(false);
    } else {
      return setIsDisabled(true);
    }
  };

  const handleClick = async (e) => {
    if (!isDisabled) {
      await axios
        .post(`/member`, {
          name: nickname,
          password,
        })
        .then(() => {
          navigate('/login');
        })
        .catch((res) => {});
    } else {
      return e.preventDefault();
    }
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      handleClick();
    }
  };

  useEffect(
    () => {
      activeButton();
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isNicknameValid, isPwValid, isPwCheckValid],
  );

  return (
    <LoginContainer>
      <Logo />
      <Title>회원가입</Title>
      <FormContainer onKeyUp={handleEnter}>
        <SignUpForm {...nicknameProps} />
        <SignUpForm {...passwordProps} />
        <SignUpForm {...passwordCheckProps} />
      </FormContainer>
      <ButtonContainer>
        <SignUpButton text={'가입하기'} handleClick={handleClick} isDisabled={isDisabled} />
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
