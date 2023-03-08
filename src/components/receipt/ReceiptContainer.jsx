import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../api/apiController';
import receiptBg from '../../assets/receipt-bg.svg';
import FailureList from './FailureList';
import RecordDateCard from './RecordDateCard';

export default function ReceiptContainer() {
  const [data, setData] = useState([]);
  const [receiptDate, setReceiptDate] = useState('');
  const [receiptList, setReceiptList] = useState([]);
  const url = document.location.href;
  const date = url.split('=')[1];
  const nickname = localStorage.getItem('nickname');

  const getReceiptData = async () => {
    const { data } = await axios.get(`/record?writer=${nickname}`);

    return setData(...data.filter((i) => i.date === date));
  };

  const getReceiptInformation = () => {
    setReceiptDate(data.receiptDate);
    setReceiptList(data.records);
  };

  useEffect(() => {
    getReceiptData();
    getReceiptInformation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.receiptDate]);

  return (
    <Container>
      <Title>실패 영수증</Title>
      <RecordDateCard date={receiptDate} />
      <FailureList total={data.total} failureList={receiptList && receiptList.slice(0).reverse()} />
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  width: 360px;
  height: 613px;
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
