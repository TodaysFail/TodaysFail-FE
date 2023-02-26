import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function RedcordPage() {
  const [dateYMD, setDateYMD] = useState('2023-01-01');
  const [dateHMS, setDateHMS] = useState('00:00:00');

  useEffect(() => {
    checkCurrentTime();
  }, []);

  const checkCurrentTime = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    const seconds = String(today.getSeconds()).padStart(2, '0');

    setDateYMD(`${year}-${month}-${date}`);
    setDateHMS(`${hours}:${minutes}:${seconds}`);
  };

  const timer = () => {
    setInterval(checkCurrentTime, 1000);
  };

  timer();

  return (
    <RedcordPageContainer>
      <Logo>오늘의 실패</Logo>
      <RedcordPageHeaderContainer>
        <RedcordPageHeaderContent>
          <RedcordPageHeaderTitle>어떤 실패를 경험하셨나요?</RedcordPageHeaderTitle>
          <RedcordPageHeaderDate>
            <DateYMD>{dateYMD}</DateYMD>
            <DateHMS>{dateHMS}</DateHMS>
          </RedcordPageHeaderDate>
        </RedcordPageHeaderContent>
      </RedcordPageHeaderContainer>
    </RedcordPageContainer>
  );
}

const RedcordPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 390px;
  height: 844px;
  margin: 0 auto;
  background: #c4ebd6;
`;

const RedcordPageHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: green;
`;

const RedcordPageHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const RedcordPageHeaderTitle = styled.h2`
  width: 390px;
  padding: 10px 10px 10px 48px;
`;

const RedcordPageHeaderDate = styled.div`
  display: flex;
  width: 390px;
  justify-content: space-between;
  padding: 10px;
  border-top: solid 1px;
  border-bottom: solid 1px;
`;
const DateYMD = styled.span``;
const DateHMS = styled.span``;

const Logo = styled.div`
  padding: 10px 10px 10px 150px;
`;
