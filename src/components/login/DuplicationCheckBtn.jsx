import axios from 'axios';
import React from 'react';
import Button from './Button';

export default function DuplicationCheckBtn({ isValid, nickname, setWarningMessage, setIsDuplicated }) {
  const duplicationNicknameAPI = async (nickname) => {
    await axios
      .post('http://localhost:3000/login', {
        nickname: `${nickname}`,
      })
      .then((res) => {
        setWarningMessage(res, '사용 가능한 닉네임입니다 : )');
        setIsDuplicated(false);
      })
      .catch((res) => {
        setWarningMessage(res, '중복된 닉네임입니다. 다시 시도하세요.');
        setIsDuplicated(true);
      });
  };

  return (
    <Button
      className='login__button--duplicationCheck'
      text='중복검사'
      disabled={!isValid}
      handleClick={() => {
        duplicationNicknameAPI(nickname);
      }}
    ></Button>
  );
}
