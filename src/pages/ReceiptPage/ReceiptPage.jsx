import React from 'react';
import styled from 'styled-components';
import receiptBg from '../../assets/receipt.png';
import FailCard from '../../components/share/FailCard';

export default function UserSharePage() {
  return (
    <Container>
      <h1 className='sr-only'>나의 영수증 공유 페이지</h1>
      <Logo>로고</Logo>
      <ReceiptContainer>
        <Title>실패 영수증</Title>
        <RecordDateContainer>
          <RecordDateContents>내일은 좀 더 성장할 소중한 경험 내역</RecordDateContents>
          <RecordDateContents>Aprill 12 - 14, 2019</RecordDateContents>
        </RecordDateContainer>
        <TotalFailContainer>
          <TotalFailTitle>Total failure</TotalFailTitle>
          <TotalFailCount>19</TotalFailCount>
          <FailCard />
          <FailCard />
          <FailCard />
          <FailCard />
        </TotalFailContainer>
      </ReceiptContainer>
      <ShareButton>자랑하기</ShareButton>
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

const Logo = styled.div`
  width: 120px;
  height: 30px;
  background-color: #d9d9d9;
  text-align: center;
`;

const ReceiptContainer = styled.section`
  width: 360px;
  height: 665px;
  margin-top: 30px;
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
  height: 435px;
  margin-top: 35px;
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
  margin-bottom: 11px;
  font-size: 12px;
  font-weight: 700;
  border-bottom: 1px solid #b8b8b8;
`;

const TotalFailCount = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: 700;
  right: 0;
  margin-top: 3px;
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
