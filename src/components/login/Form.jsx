import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Vector } from '../../assets/Vector.svg';

export default function Form({ type, value, setValue, placeholder, setWarningMessage, onKeyDown }) {
  const handleChange = (e) => {
    setValue(e.target.value);
    setWarningMessage('');
  };

  return (
    <Wrapper>
      <Bullet>
        <Vector />
      </Bullet>
      <StyledInput type={type} placeholder={placeholder} value={value} onChange={handleChange} onKeyDown={onKeyDown} />
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
