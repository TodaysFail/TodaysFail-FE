import React from 'react';
import styled from 'styled-components';

export default function SignUpForm({ title, id, maxLength, placeholder, type, warningText }) {
  return (
    <Container>
      <Title htmlFor={id}>{title}</Title>
      <InputContainer>
        <Input id={id} placeholder={placeholder} type={type} />
        <TextCounter>0 / {maxLength}</TextCounter>
      </InputContainer>
      <WarningText>{warningText}</WarningText>
    </Container>
  );
}

const Container = styled.section`
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
