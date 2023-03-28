import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../../api/apiController';
import codeImg from '../../assets/barcode.svg';
import receiptBg from '../../assets/receipt.svg';
import FailureList from './FailureList';
import RecordDateCard from './RecordDateCard';

export default function ReceiptShareContainer({ setNickname }) {
  const [date, setDate] = useState('');
  const [total, setTotal] = useState('');
  const [receiptList, setReceiptList] = useState([]);
  const { receiptId } = useParams();

  const getReceiptData = async () => {
    const { data } = await axios.get(`/receipt/${receiptId}`);

    setDate(data.date);
    setReceiptList(data.receiptList);
    setTotal(data.total);
    setNickname(data.writerName || '');

    return data;
  };

  useEffect(() => {
    getReceiptData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Title>실패 영수증</Title>
      <RecordDateCard date={date} />
      <FailureList total={total} failureList={receiptList} />
      <BarcodeImg />
      <Barcode>{receiptId}</Barcode>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  height: 613px;
  padding: 0 15px;
  background-image: url(${receiptBg});
  font-family: 'Galmuri11';
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 400;
  margin-top: 54px;
  padding-bottom: 15px;
  text-align: center;
`;

const BarcodeImg = styled.img.attrs({
  src: codeImg,
  alt: '바코드 이미지',
})`
  width: 248px;
  margin-top: 13px;
`;

const Barcode = styled.p`
  font-size: 10px;
  font-family: 'Galmuri11';
  font-weight: 400;
  letter-spacing: 0.07em;
  text-align: center;
  color: #000000;
  margin-top: 7px;
`;
