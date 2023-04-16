import React from 'react';
import styled from 'styled-components';
import coffee1 from '../../assets/coffee1.svg';
import coffee2 from '../../assets/coffee2.svg';

export default function EventBanner() {
  const handleOpenSurvey = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSem4Wp0ynGckr-mMQT8W2LXJGVHNZ19Bz2GXVQvKJNPcvn7Sg/viewform?usp=sf_link',
    );
  };

  return (
    <Banner onClick={handleOpenSurvey}>
      <Main>
        <MainText>오늘의 실패 사용 설문조사</MainText>
        <SubText>설문조사 참여하고 커피쿠폰 받아가세요!</SubText>
      </Main>
      <Images>
        <Coffee1 src={coffee1} />
        <Coffee2 src={coffee2} />
      </Images>
    </Banner>
  );
}

const Banner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 16px 0px;
  margin-bottom: 15px;
  background-color: #efefef;
  border-radius: 6px;
  cursor: pointer;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-left: 20px;
  z-index: 3;
`;

const Images = styled.div`
  position: absolute;
  display: flex;
  right: 10px;
  justify-content: end;
  width: 100%;
  height: 100%;
`;

const MainText = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  font-family: 'Pretendard-Bold';
  font-size: 14px;
  line-height: 150%;
`;

const SubText = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  font-family: 'Pretendard-Light';
  font-size: 12px;
  line-height: 150%;
`;

const Coffee1 = styled.img`
  position: relative;
  width: 80px;
  height: 64px;
  right: -48px;
  z-index: 1;
`;

const Coffee2 = styled.img`
  position: relative;
  width: 105px;
  height: 64px;
  z-index: 2;
`;
