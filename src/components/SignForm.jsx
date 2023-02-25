import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import DuplicationCheckBtn from './DuplicationCheckBtn';

export default function SignForm() {
  const [nickname, setNickname] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');
  const [isDuplicated, setIsDuplicated] = useState(true);
  const navigate = useNavigate();

  // 유효성 체크: 영문 소문자와 숫자만 사용 가능하고 최소 길이는 1 최대 길이는 10
  const checkValidNickname = (event) => {
    const input = event.target.value;
    const regex = /^[a-z0-9]{1,10}$/;

    if (regex.test(input)) {
      setNickname(input);
      setIsValid(true);
      setIsDuplicated(true);
      setWarningMessage('유효한 닉네임입니다. 중복검사를 해주세요 : )');
    } else {
      setIsValid(false);
      setIsDuplicated(true);
      setWarningMessage('영문 소문자와 숫자 조합으로 최대 10자까지 가능합니다');
    }

    if (input === '') {
      setNickname('');
      setWarningMessage('');
    }
  };

  // 시작버튼 클릭 시 서버에 닉네임 전달
  const submitNickname = async (nickname) => {
    await axios
      .post('http://localhost:3000/login', {
        nickname: `${nickname}`,
      })
      .then((res) => {
        navigate('/');
        localStorage.setItem('nickname', nickname);
      })
      .catch((res) => {});
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
      <DuplicationCheckBtn
        isValid={isValid}
        nickname={nickname}
        setWarningMessage={setWarningMessage}
        setIsDuplicated={setIsDuplicated}
      />
      {warningMessage && <div>{warningMessage}</div>}
      <div>
        <Button
          className='login__button--start'
          text='시작하기'
          disabled={isDuplicated}
          onclick={() => {
            submitNickname(nickname);
          }}
        ></Button>
      </div>
    </div>
  );
}
