import React from 'react';
import styled from 'styled-components';
import feelIcon from '../../assets/feel-icon.svg';

export default function FailCard() {
  return (
    <Conatiner>
      <Number>01</Number>
      <Contents>
        <ContentsTitle>핫케이크 태움</ContentsTitle>
        <ContentsCount>x 1</ContentsCount>
        <ContentsText>
          분명히 가스불을 약으로 했는데 어느 순간 분명히 가스불을 약으로 했는데 어느 순간 재가 됐다.
        </ContentsText>
        <ContentsFeel>다음에 더 잘하면 된다</ContentsFeel>
        <ContentsCount>03:16:42</ContentsCount>
      </Contents>
    </Conatiner>
  );
}

const Conatiner = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Number = styled.p`
  width: 27px;
  height: 18px;
  margin-right: 8px;
  padding-top: 4px;
  font-size: 9px;
  font-weight: 400;
  text-align: center;
  background-color: #1e1e1e;
  color: #ffffff;
  border-radius: 50%;
`;

const Contents = styled.div`
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px dashed #b8b8b8;
`;

const ContentsTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #1e1e1e;
  display: inline;
`;

const ContentsCount = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: #1e1e1e;
  float: right;
  margin-top: 3px;
`;

const ContentsText = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #848484;
  margin: 11px 0 19px 0;
`;

const ContentsFeel = styled.p`
  display: inline;
  font-weight: 400;
  font-size: 12px;
  color: #1e1e1e;

  &::before {
    content: url(${feelIcon});

    margin-right: 7px;
  }
`;
