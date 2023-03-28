import React, { useRef } from 'react';
import styled from 'styled-components';

export default function InputForm({ label, placeholder, maxLength, text, setText }) {
  const textRef = useRef(null);

  const handleResizeHeight = () => {
    textRef.current.style.height = 'auto';
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;
  };

  return (
    <Container>
      <InputContainer>
        <Label>{label}</Label>
        <ContentInput
          onInput={handleResizeHeight}
          ref={textRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={placeholder}
          maxLength={maxLength}
        />
      </InputContainer>
      <LengthContainer>
        {text.length} / {maxLength}
      </LengthContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;

  width: 100%;
`;

const InputContainer = styled.div`
  display: flex;
`;

const Label = styled.div`
  font-family: 'Pretendard-Bold';
  width: 82px;
  margin-top: 2px;
`;

const ContentInput = styled.textarea.attrs((props) => ({
  placeholder: props.placeholder,
  rows: '1',
}))`
  all: unset;
  /* width: 241px; */
  width: 100%;
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

  border-bottom: 1px solid #b8b8b8;
  margin-bottom: 6px;
`;

const LengthContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 16px;
`;
