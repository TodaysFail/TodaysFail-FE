import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import useOnClickOutside from '../../hooks/useOnClickOutside';
import Button from './Button';

export default function Modal() {
  //   const ref = useRef();
  const navigate = useNavigate();

  //   useOnClickOutside(ref, () => {
  //     setModalOpen(false);
  //   });

  return (
    <Container>
      <ModalSection>
        <MainText>정말 취소하실건가요?</MainText>
        <SubText>실패를 기록하면 성장할 가능성이 높아져요!</SubText>
        <ButtonContainer>
          <Button
            type={false}
            text='취소하기'
            handleClick={() => navigate('/')}
            size={{ width: '95px', height: '34px' }}
          />
          <Button type={true} text='계속하기' size={{ width: '95px', height: '34px' }} />
        </ButtonContainer>
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
  z-index: 1;
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

  z-index: 100;
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

const ButtonContainer = styled.div`
  display: flex;
`;
