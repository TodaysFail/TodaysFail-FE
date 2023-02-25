import React, { useState } from 'react';
import DuplicationCheckBtn from './DuplicationCheckBtn';

export default function SignForm() {
  const [nickname, setNickname] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');

  const checkValidNickname = (event) => {
    const input = event.target.value;
    const regex = /^[a-z0-9]{1,12}$/; // 영문 소문자와 숫자만 사용 가능하고 최소 길이는 1 최대 길이는 12

    if (regex.test(input)) {
      setNickname(input);
      setIsValid(true);
      setWarningMessage('');
    } else {
      setIsValid(false);
      setWarningMessage('영문 소문자와 숫자 조합으로 최대 12자까지 가능합니다');
    }

    if (input === '') {
      setNickname('');
      setWarningMessage('');
    }
  };

  return (
    <div>
      <input
        id='nickname-input'
        type='text'
        placeholder='ex) todaysfail12'
        value={nickname}
        onChange={checkValidNickname}
      />
      <DuplicationCheckBtn isValid={isValid} nickname={nickname} setWarningMessage={setWarningMessage} />
      {warningMessage && <div>{warningMessage}</div>}
      <div>
        <button disabled={!isValid}>시작하기</button>
      </div>
    </div>
  );
}
