import React from 'react';
import styled from 'styled-components';

export default function Button({ text, handleClick, disabled }) {
  return (
    <LoginButton disabled={disabled} onClick={handleClick}>
      {text}
    </LoginButton>
  );
}

const LoginButton = styled.button`
  width: 360px;
  height: 46px;
  text-align: center;
  justify-content: center;
  background: ${(props) => (props.disabled ? '#fafafa' : '#000000')};
  border-radius: 10px;
  color: ${(props) => (props.disabled ? '#000000' : '#FFFFFF')};
  cursor: pointer;
`;
