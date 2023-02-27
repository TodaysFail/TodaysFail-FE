import React, { useRef } from 'react';
import styled from 'styled-components';

export default function InputForm({ label, placeholder, maxLength, text, setText }) {
  const textRef = useRef(null);

  const handleResizeHeight = () => {
    textRef.current.style.height = 'auto';
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;
  };

  return (
    <div>
      <span>{label}</span>
      <ContentInput
        onInput={handleResizeHeight}
        ref={textRef}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
      />
      {text.length} / {maxLength}
    </div>
  );
}

const ContentInput = styled.textarea.attrs((props) => ({
  placeholder: props.placeholder,
  rows: '1',
}))`
  all: unset;
  width: 241px;
  overflow-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
  resize: none;

  font-family: 'Pretendard-Light';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  letter-spacing: -0.011em;

  color: #000000;
`;
