import styled from 'styled-components';
import ReceiptShareContainer from '../../components/receipt/ReceiptShareContainer';

export default function SharePage() {
  return (
    <Container>
      <h1 className='sr-only'>나의 영수증 공유 페이지</h1>
      <ReceiptShareContainer />
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 19px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
