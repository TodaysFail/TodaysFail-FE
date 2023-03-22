import styled from 'styled-components';
import Logo from '../../components/common/Logo';
import SignUpForm from '../../components/signUp/SignUpForm';

export default function SignUpPage() {
  return (
    <LoginContainer>
      <Logo />
      <Title>회원가입</Title>
      <SignUpForm />
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
