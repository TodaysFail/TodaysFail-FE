import React from 'react';
import styled from 'styled-components';

export default function SignUpButton({ text, handleClick, isDisabled }) {
  return (
    <Button isDisabled={isDisabled} onClick={handleClick}>
      {text}
    </Button>
  );
}

const Button = styled.button`
  width: 360px;
  height: 46px;
  text-align: center;
  justify-content: center;
  background: ${(props) => (props.isDisabled ? '#fafafa' : '#000000')};
  border-radius: 10px;
  color: ${(props) => (props.isDisabled ? '#000000' : '#FFFFFF')};
  font-size: 16px;
  cursor: pointer;
`;
