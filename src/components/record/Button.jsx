import React from 'react';
import styled from 'styled-components';

export default function Button({ text, handleClick, disabled, type, size }) {
  return (
    <RecordButton type={type} disabled={disabled} onClick={handleClick} width={size?.width} height={size?.height}>
      {text}
    </RecordButton>
  );
}

const RecordButton = styled.button`
  width: ${(props) => (props.width ? props.width : '360px')};
  height: ${(props) => (props.width ? props.height : '46px')};
  text-align: center;
  justify-content: center;
  background: ${(props) => (props.type ? '#000000' : '#fafafa')};
  border-color: ${(props) => (props.type ? '#FFFFFF' : '#000000')};
  border-radius: 10px;
  color: ${(props) => (props.type ? '#FFFFFF' : '#000000')};
  cursor: pointer;
`;
