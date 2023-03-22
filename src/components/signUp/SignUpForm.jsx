import React from 'react';
import styled from 'styled-components';
import Button from '../../components/common/Button';

export default function SignUpForm() {
  const formType = [
    {
      title: '닉네임',
      inputID: 'nickname',
      maxLength: '10',
      placeholder: '닉네임을 정해주세요!',
      type: 'text',
      warningText: '이미 존재하는 닉네임입니다',
    },
    {
      title: '비밀번호',
      inputID: 'pw',
      maxLength: '16',
      placeholder: '비밀번호를 입력하세요',
      type: 'password',
      warningText: '영문과 숫자를 조합하여 8자리 이상 입력해야 합니다',
    },
    {
      title: '비밀번호 확인',
      inputID: 'pwCheck',
      maxLength: '16',
      placeholder: '비밀번호를 한번 더 입력하세요',
      type: 'password',
      warningText: '비밀번호가 일치하지 않습니다',
    },
  ];

  const buttonType = {
    bgColor: 'black',
    width: '359',
    fontSize: '16',
    isFixed: false,
  };

  return (
    <Container>
      {formType.map((formType, i) => (
        <FormContainer key={i}>
          <Title htmlFor={formType.inputID}>{formType.title}</Title>
          <InputContainer>
            <Input id={formType.inputID} placeholder={formType.placeholder} type={formType.type} />
            <TextCounter>0 / {formType.maxLength}</TextCounter>
          </InputContainer>
          <WarningText>{formType.warningText}</WarningText>
        </FormContainer>
      ))}
      {/* 공통 컴포넌트 수정 후 버튼 수정 */}
      <ButtonContainer>
        <Button type={buttonType} text={'가입하기'} />
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.form`
  margin-top: 48px;
  width: 100%;
  height: 100%;
`;

const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 22px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Title = styled.label`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.011em;
  color: #1e1e1e;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
  /* 입력 상태(focus)일 때 컬러 변경(#848484) */
  border: 1px solid #c7c7c7;
  border-radius: 4px;
`;

const Input = styled.input`
  flex-grow: 1;
  height: 40px;
  padding: 8px 10px;
  background-color: rgba(0, 0, 0, 0);
  border: none;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.011em;
  color: #848484;

  &::placeholder {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.011em;
    color: #c7c7c7;
  }

  &:focus {
    outline: none;
  }
`;

// 타이핑 완료 시 display: none
const TextCounter = styled.p`
  padding: 8px 10px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.011em;
  color: #c7c7c7;
`;

// validation 상태에 따라 컬러 변경(#2BCF4F)
const WarningText = styled.strong`
  margin: 5px 9px 0;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.011em;
  color: #ff4141;
`;

const ButtonContainer = styled.div`
  margin-top: 79px;
`;
