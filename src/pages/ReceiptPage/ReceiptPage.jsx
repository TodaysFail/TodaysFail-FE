import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import receiptBg from '../../assets/receipt.png';
import FailCard from '../../components/receipt/FailCard';
import CopyModal from '../../components/receipt/CopyModal';
import Logo from '../../components/common/Logo';

export default function UserSharePage() {
  const [data, setData] = useState([]);
  const [receiptDate, setReceiptDate] = useState('');
  const [total, setTotal] = useState('');
  const [receiptList, setReceiptList] = useState([]);
  const [receiptId, setReceiptId] = useState('');
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const url = document.location.href;

  const date = url.split('=')[1];
  const nickname = localStorage.getItem('nickname');

  const getReceiptData = async () => {
    await axios
      .get(`${process.env.REACT_APP_BASE_URL}/record?writer=${nickname}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setData(...res.data.filter((i) => i.date === date));
      })
      .catch((res) => {});
  };

  const getReceiptInformation = () => {
    setReceiptDate(data.receiptDate);
    setTotal(data.total);
    setReceiptList(data.records);
  };

  const copyUrl = async () => {
    await axios
      .post(`${process.env.REACT_APP_BASE_URL}/receipt`, {
        date: data.date,
        writer: nickname,
      })
      .then((res) => {
        navigator.clipboard.writeText(`https://todaysfail.com/receipt/${res.data}`);
        setReceiptId(res.data);
      })
      .catch((res) => {});
  };

  useEffect(() => {
    getReceiptData();
    getReceiptInformation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.receiptDate]);

  return (
    <Container>
      <h1 className='sr-only'>나의 영수증 공유 페이지</h1>
      <Logo />
      <ReceiptContainer>
        <Title>실패 영수증</Title>
        <RecordDateContainer>
          <RecordDateContents>내일은 좀 더 성장할 소중한 경험 내역</RecordDateContents>
          <RecordDateContents>{receiptDate}</RecordDateContents>
        </RecordDateContainer>
        <TotalFailTitle>Total failure</TotalFailTitle>
        <TotalFailCount>{total}</TotalFailCount>
        <TotalFailContainer>
          {receiptList &&
            receiptList
              .slice(0)
              .reverse()
              .map((el, i) => (
                <FailCard
                  key={el.id}
                  order={i + 1 < 10 ? `0${i + 1}` : i + 1}
                  title={el.title}
                  content={el.content}
                  feel={el.feel}
                  createdAt={el.createdAt}
                />
              ))}
        </TotalFailContainer>
      </ReceiptContainer>
      <ShareButton
        onClick={() => {
          copyUrl();
          setIsVisibleModal(true);
        }}
      >
        자랑하기
      </ShareButton>
      {isVisibleModal && <CopyModal receiptId={receiptId} />}
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
  position: fixed;
  bottom: 16px;
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
