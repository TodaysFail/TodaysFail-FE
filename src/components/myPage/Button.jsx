import styled from 'styled-components';

export default function Button({ name, handleClick }) {
  return <ButtonContainer onClick={handleClick}>{name}</ButtonContainer>;
}

const ButtonContainer = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid black;
  :hover {
    background-color: black;
    color: white;
  }
`;
