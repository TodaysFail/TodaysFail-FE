import styled from 'styled-components';
import TodaysFailLogo from '../../assets/logo.png';

export default function Logo({ width }) {
  return <MainLogo width={width} />;
}

const MainLogo = styled.img.attrs({
  src: TodaysFailLogo,
  alt: '오늘의 실패',
})`
  width: ${(props) => props.width || '150px'};
  text-align: center;
`;
