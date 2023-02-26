import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import todaysFailLogo from '../../assets/logo.png';

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
      <LogoContainer>
        <Logo />
      </LogoContainer>
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
  width: 360px;
  height: 122px;
  background: green;
  background: #000000;
  border-radius: 10px;
  margin: 10px 10px 10px 15px;
`;

const RedcordPageHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const RedcordPageHeaderTitle = styled.h2`
  width: 390px;
  padding: 8px 10px 0px 79px;
  color: white;

  font-family: 'Pretendard-Light';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  /* identical to box height, or 30px */

  letter-spacing: -0.011em;

  /* white */

  color: #ffffff;
`;

const RedcordPageHeaderDate = styled.div`
  display: flex;
  width: 330px;
  justify-content: flex-start;
  padding: 5px;
  border-top: solid 1px;
  border-bottom: solid 1px;
  border-color: white;
  margin: 0px 10px 10px 13px;
  flex-wrap: nowrap;
`;

const DateYMD = styled.span`
  color: white;
  margin: 0px 198px 0px 0px;

  font-family: 'Pretendard-Bold';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 21px */

  color: #ffffff;
`;

const DateHMS = styled.span`
  color: white;

  font-family: 'Pretendard-Light';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  /* identical to box height, or 18px */

  text-align: right;

  color: #ffffff;
`;

const LogoContainer = styled.div`
  width: 100px;
  padding: 20px 10px 20px 120px;
`;

const Logo = styled.img.attrs({
  src: `${todaysFailLogo}`,
  alt: 'todaysFail Logo',
})`
  width: 150px;
`;
