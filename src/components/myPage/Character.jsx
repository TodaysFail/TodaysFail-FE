import styled from 'styled-components';
import characterIcon from '../../assets/character.png';

export default function Character() {
  return <Image src={characterIcon} alt='character' />;
}

const Image = styled.img`
  width: 114px;
  height: 114px;
  object-fit: cover;
`;
