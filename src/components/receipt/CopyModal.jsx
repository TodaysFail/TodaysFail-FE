import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function CopyModal({ setIsVisibleModal }) {
  const navigate = useNavigate();
  const receiptId = `f80fbeef-be03-4ea2-87ab-017fc259e586`;

  return (
    <Container>
      <ModalSection>
        <MainText>주소가 복사되었습니다</MainText>
        <SubText>오늘의 실패를 부담없이 공유해보세요!</SubText>
        <Button
          onClick={() => {
            navigate(`/receipt/${receiptId}`);
          }}
        >
          그럴게요
        </Button>
      </ModalSection>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalSection = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 330px;
  height: 182px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #000000;
`;

const MainText = styled.strong`
  font-family: 'Pretendard';
  font-size: 20px;
  font-weight: 700;
  color: #1e1e1e;
  line-height: 143%;
`;

const SubText = styled.p`
  font-family: 'Pretendard';
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  color: #1e1e1e;
`;

const Button = styled.button`
  width: 95px;
  height: 34px;
  background-color: #000000;
  border-radius: 6px;
  color: #ffffff;
  font-size: 16px;
  font-family: 'Pretendard';
  font-weight: 500px;
  margin-top: 19px;
  cursor: pointer;
`;
