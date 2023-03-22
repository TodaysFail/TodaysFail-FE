import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Vector } from '../../assets/Vector.svg';

export default function ValidForm({ type, value, setValue, placeholder, regex, setIsValid }) {
  // 유효성 체크: 영문 소문자와 숫자만 사용 가능하고 최소 길이는 1 최대 길이는 10
  const checkValidNickname = (event) => {
    const input = event.target.value;

    if (regex.test(input)) {
      setValue(input);
      setIsValid(true);
    }

    if (input === '') {
      setValue('');
      setIsValid(false);
    }
  };

  return (
    <Wrapper>
      <Bullet>
        <Vector />
      </Bullet>
      <StyledInput type={type} placeholder={placeholder} value={value} onChange={checkValidNickname} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  border-bottom: 1px solid #b8b8b8;
  padding-top: 35px;
`;
const Bullet = styled.span`
  margin-right: 6px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 24px;
  margin: 2px 0;
  border: none;
  font-family: 'Pretendard-Light';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.011em;
  color: #000000;
  ::placeholder {
    color: #c7c7c7;
  }
`;
