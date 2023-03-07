import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Modal from '../../components/common/Modal';
import Button from '../../components/common/Button';
import ReceiptContainer from '../../components/receipt/ReceiptContainer';

export default function UserSharePage() {
  const [receiptId, setReceiptId] = useState('');
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const navigate = useNavigate();
  const url = document.location.href;
  const nickname = localStorage.getItem('nickname');
  const date = url.split('=')[1];

  const ShareBtnType = {
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

  const copyUrl = async () => {
    const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/receipt`, {
      date,
      writer: nickname,
    });

    navigator.clipboard.writeText(`https://todaysfail.com/receipt/${res.data}`);

    return setReceiptId(res.data);
  };

  return (
    <Container>
      <h1 className='sr-only'>나의 영수증 공유 페이지</h1>
      <ReceiptContainer />
      <Button
        type={ShareBtnType}
        text={'자랑하기'}
        handleClick={() => {
          copyUrl();
          setIsVisibleModal(true);
        }}
      />
      {isVisibleModal && (
        <Modal mainText={'주소가 복사되었습니다'} subText={'오늘의 실패를  부담없이 공유해보세요!'}>
          <Button
            type={modalBtnType}
            text={'그럴게요'}
            handleClick={() => {
              navigate(`/receipt/${receiptId}`);
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
