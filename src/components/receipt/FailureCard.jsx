import React from 'react';
import styled from 'styled-components';
import feelIcon from '../../assets/feel-icon.svg';

export default function FailCard({ title, content, feel, createdAt, order }) {
  return (
    <Conatiner>
      <Number>{order}</Number>
      <Contents>
        <ContentsTitle>{title}</ContentsTitle>
        <ContentsCount>x 1</ContentsCount>
        <ContentsText>{content}</ContentsText>
        <ContentsFeel>{feel}</ContentsFeel>
        <ContentsCount>{createdAt}</ContentsCount>
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
  width: 29px;
  height: 18px;
  margin-right: 8px;
  padding: 2px 6px;
  font-size: 9px;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.011em;
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
  word-break: break-all;
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
