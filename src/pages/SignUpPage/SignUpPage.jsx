import styled from 'styled-components';
import Button from '../../components/common/Button';
import Logo from '../../components/common/Logo';
import SignUpForm from '../../components/signUp/SignUpForm';

export default function SignUpPage() {
  const buttonType = {
    bgColor: 'black',
    width: '359',
    fontSize: '16',
    isFixed: false,
  };

  return (
    <LoginContainer>
      <Logo />
      <Title>회원가입</Title>
      <FormContainer>
        <SignUpForm
          title={'닉네임'}
          id={'nickname'}
          maxLength={'10'}
          placeholder={'닉네임을 정해주세요!'}
          type={'text'}
          warningText={'이미 존재하는 닉네임입니다'}
        />
        <SignUpForm
          title={'비밀번호'}
          id={'pw'}
          maxLength={'16'}
          placeholder={'비밀번호를 입력하세요'}
          type={'password'}
          warningText={'영문과 숫자를 조합하여 8자리 이상 입력해야 합니다'}
        />
        <SignUpForm
          title={'비밀번호 확인'}
          id={'pwCheck'}
          maxLength={'16'}
          placeholder={'비밀번호를 한번 더 입력하세요'}
          type={'password'}
          warningText={'비밀번호가 일치하지 않습니다'}
        />
      </FormContainer>
      {/* 공통 컴포넌트 수정 후 버튼 수정 */}
      <ButtonContainer>
        <Button type={buttonType} text={'가입하기'} />
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
