import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../api/apiController';
import Button from '../../components/common/Button';
import Modal from '../../components/common/Modal';
import ReceiptShareContainer from '../../components/receipt/ReceiptShareContainer';

export default function SharePage() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [isVisibleButton, setIsVisibleButton] = useState(false);
  const [nickname, setNickname] = useState('');

  const shareBtnType = {
    bgColor: 'black',
    width: '145',
    fontSize: '16',
    isHover: 'false',
    isFixed: 'true',
  };

  const modalBtnType = {
    bgColor: 'black',
    width: '95',
    fontSize: '16',
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).then(setIsVisibleModal(true));
  };

  useEffect(() => {
    if (nickname.length > 0)
      axios.get('/member/info').then((res) => {
        if (res.data.name === nickname) {
          setIsVisibleButton(true);
        }
      });
  }, [nickname]);

  return (
    <Container>
      <h1 className='sr-only'>나의 영수증 공유 페이지</h1>
      <ReceiptShareContainer setNickname={setNickname} />
      {isVisibleButton && <Button type={shareBtnType} text={'자랑하기'} handleClick={handleCopy} />}
      {isVisibleModal && (
        <Modal mainText={'주소가 복사되었습니다'} subText={'오늘의 실패를  부담없이 공유해보세요!'}>
          <Button
            type={modalBtnType}
            text={'그럴게요'}
            handleClick={() => {
              setIsVisibleModal(false);
            }}
          />
        </Modal>
      )}
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
