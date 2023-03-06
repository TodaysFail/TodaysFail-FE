import styled from 'styled-components';

export default function Modal({ mainText, subText, children }) {
  return (
    <Container>
      <ModalSection>
        <MainText>{mainText}</MainText>
        <SubText>{subText}</SubText>
        {children}
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
  padding-bottom: 19px;
`;
