import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import receiptBg from '../../assets/receipt.png';
import FailCard from '../../components/receipt/FailCard';
import CopyModal from '../../components/receipt/CopyModal';
import Logo from '../../components/common/Logo';

export default function UserSharePage() {
  const [date, setDate] = useState('');
  const [total, setTotal] = useState('');
  const [receiptList, setReceiptList] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const receiptId = `f80fbeef-be03-4ea2-87ab-017fc259e586`;

  const getReceiptData = async () => {
    await axios
      .get(`https://todaysfail.com/api/v1/receipt/${receiptId}`)
      .then((res) => {
        setDate(res.data.date);
        setReceiptList(res.data.receiptList);
        setTotal(res.data.total);
      })
      .catch((res) => {});
  };

  const CopyUrl = async () => {
    await navigator.clipboard.writeText(`https://todaysfail.com/receipt/${receiptId}`);
  };

  useEffect(() => {
    getReceiptData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <h1 className='sr-only'>나의 영수증 공유 페이지</h1>
      <Logo />
      <ReceiptContainer>
        <Title>실패 영수증</Title>
        <RecordDateContainer>
          <RecordDateContents>내일은 좀 더 성장할 소중한 경험 내역</RecordDateContents>
          <RecordDateContents>{date}</RecordDateContents>
        </RecordDateContainer>
        <TotalFailTitle>Total failure</TotalFailTitle>
        <TotalFailCount>{total}</TotalFailCount>
        <TotalFailContainer>
          {receiptList.map((receiptList, i) => (
            <FailCard
              key={receiptList.id}
              order={i + 1 < 10 ? `0${i + 1}` : i + 1}
              title={receiptList.title}
              content={receiptList.content}
              feel={receiptList.feel}
              createdAt={receiptList.createdAt}
            />
          ))}
        </TotalFailContainer>
      </ReceiptContainer>
      <ShareButton
        onClick={() => {
          CopyUrl();
          setIsVisibleModal(true);
        }}
      >
        자랑하기
      </ShareButton>
      {isVisibleModal && <CopyModal setIsVisibleModal={setIsVisibleModal} />}
    </Container>
  );
}

const Container = styled.section`
  background-color: #ffffff;
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  padding: 26px 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReceiptContainer = styled.section`
  position: relative;

  width: 360px;
  height: 665px;
  margin-top: 20px;
  padding: 0 15px;
  background-image: url(${receiptBg});
  font-family: 'Galmuri11';
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 400;
  margin-top: 44px;
  padding-bottom: 15px;
  text-align: center;
`;

const RecordDateContainer = styled.div`
  width: 100%;
  padding: 8px;
  border-top: 1px dashed #b8b8b8;
  border-bottom: 1px dashed #b8b8b8;
`;

const RecordDateContents = styled.p`
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  color: #1e1e1e;
`;

const TotalFailContainer = styled.section`
  width: 330px;
  height: 415px;
  margin-top: 14px;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const TotalFailTitle = styled.h3`
  width: 100%;
  padding-bottom: 9px;
  margin-top: 36px;
  font-size: 12px;
  font-weight: 700;
  border-bottom: 1px solid #b8b8b8;
`;

const TotalFailCount = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: 700;
  top: 173px;
  right: 15px;
`;

const ShareButton = styled.button`
  width: 145px;
  height: 45px;
  margin-top: 30px;
  border-radius: 10px;
  background-color: #000000;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
`;
