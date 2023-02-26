import styled from 'styled-components';
import TodaysFailLogo from '../../assets/logo.png';

export default function Logo() {
  return <MainLogo />;
}

const MainLogo = styled.img.attrs({
  src: TodaysFailLogo,
  alt: '오늘의 실패',
})`
  width: 150px;
  text-align: center;
`;
