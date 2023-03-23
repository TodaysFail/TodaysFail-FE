import { useCallback, useState } from 'react';
import styled from 'styled-components';

export default function SignUpForm({
  title,
  inputID,
  maxLength,
  placeholder,
  type,
  value,
  setValue,
  warningText,
  isValid,
}) {
  const [border, setBorder] = useState(false);

  const getValue = useCallback(
    (e) => {
      const value = e.target.value;

      if (value.length > 0) {
        setValue(value);
        setBorder(false);
      } else {
        setValue('');
        setBorder(true);
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value],
  );

  const renderBorder = () => {
    isValid ? setBorder(false) : setBorder(true);
  };

  return (
    <Container>
      <Title htmlFor={inputID}>{title}</Title>
      <InputContainer changeBorder={border}>
        <Input id={inputID} placeholder={placeholder} type={type} onChange={getValue} onFocus={renderBorder} />
        <TextCounter view={isValid}>
          {value.length} / {maxLength}
        </TextCounter>
      </InputContainer>
      <WarningText textColor={isValid}>{warningText}</WarningText>
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
  border: ${(props) => (props.changeBorder ? '1px solid #848484' : '1px solid #c7c7c7')};
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

const TextCounter = styled.p`
  padding: 8px 10px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.011em;
  color: #c7c7c7;
  display: ${(props) => props.view && 'none'};
`;

const WarningText = styled.strong`
  margin: 5px 9px 0;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.011em;
  color: ${(props) => (props.textColor ? '#2BCF4F' : '#ff4141')};
`;
