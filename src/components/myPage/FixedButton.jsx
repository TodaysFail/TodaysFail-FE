import styled from 'styled-components';

export default function FixedButton({ name, handleClick }) {
  return <ButtonContainer onClick={handleClick}>{name}</ButtonContainer>;
}

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  font-size: 14px;
  border-radius: 6px;
  background-color: black;
  color: white;
  width: 144px;
  height: 44px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
`;
