import React from 'react';
import styled from 'styled-components';

/*
 * type:{bgColor, width, fontSize, isHover}
 */
export default function Button({ type, text, handleClick }) {
  return (
    <StyledButton type={type} onClick={handleClick}>
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: ${(props) => props.type.width}px;
  background: ${(props) => (props.type.bgColor === 'black' ? 'black' : 'white')};
  color: ${(props) => (props.type.bgColor === 'black' ? 'white' : 'black')};
  border: 1px solid black;
  border-radius: ${(props) => (+props.type.width > 120 ? '10px' : '6px')};
  padding: ${(props) => (+props.type.width > 120 ? '11px 0' : '5px 0')};
  font-size: ${(props) => props.type.fontSize}px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background: ${(props) => props.type.isHover && 'black'};
    color: ${(props) => props.type.isHover && 'white'};
  }
`;
