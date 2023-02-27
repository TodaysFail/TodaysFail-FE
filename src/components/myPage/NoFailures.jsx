import styled from 'styled-components';
import nofailuresIcon from '../../assets/nofailures_icon.png';

export default function NoFailures() {
  return (
    <Container>
      <Main>
        <div>{'기록된 실패가 없어요 :('}</div>
        <Icon src={nofailuresIcon} alt='nofailures' />
      </Main>
    </Container>
  );
}

const Container = styled.div`
  padding-bottom: 72px;
  width: 100%;
  height: 100%;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  width: 100%;
  height: 100%;
  font-family: 'Pretendard-SemiBold';
  font-size: 14px;
  background-color: #fafafa;
  color: #c7c7c7;

  border-radius: 10px;
`;

const Icon = styled.img`
  width: 200px;
  height: 200px;
`;
