import axios from 'axios';
import React from 'react';

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
    <span>
      <button
        className='login__button--duplicationCheck'
        disabled={!isValid}
        onClick={() => {
          duplicationNicknameAPI(nickname);
        }}
      >
        중복검사
      </button>
    </span>
  );
}
