import React from 'react';
import styled from 'styled-components';
import Character from './Character';

export default function Profile({ nickname }) {
  return (
    <ProfileContainer>
      <ProfileMain>
        <Greet>
          <Nickname>{nickname}&nbsp;</Nickname>
          <span>님,</span>
          <div>안녕하세요!</div>
        </Greet>
        <Question>오늘은 어떤 실패로부터 성장하셨나요?</Question>
      </ProfileMain>
      <Character />
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: black;
  color: white;
  border-radius: 10px;
  padding: 12px 20px 26px 20px;
  margin-bottom: 26px;
`;

const ProfileMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Greet = styled.div`
  margin-top: 14px;
  font-size: 20px;
  line-height: 141%;
`;

const Question = styled.div`
  font-size: 12px;
`;

const Nickname = styled.span`
  font-family: 'Pretendard-Bold';
  font-weight: 800;
`;
