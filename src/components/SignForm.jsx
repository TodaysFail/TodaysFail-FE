import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from '../hooks/useDebounce';
import Button from './Button';

export default function SignForm() {
  const [nickname, setNickname] = useState('');
  const [warningMessage, setWarningMessage] = useState('');
  const [isDuplicated, setIsDuplicated] = useState(true);
  const navigate = useNavigate();

  // 유효성 체크: 영문 소문자와 숫자만 사용 가능하고 최소 길이는 1 최대 길이는 10
  const checkValidNickname = (event) => {
    const input = event.target.value;

    if (input.length > 10) return false;

    const regex = /^[a-z0-9]{1,10}$/;

    if (regex.test(input)) {
      setNickname(input);
    }

    if (input === '') {
      setNickname('');
      setWarningMessage('');
    }
  };

  // 서버에 닉네임 중복검사
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
        setWarningMessage(res, '이미 존재하는 닉네임입니다');
        setIsDuplicated(true);
      });
  };

  // 커스텀 훅: 매 입력마다 요청 보내면 성능 저하 우려
  // debouncedCheckTerm에 바뀐 nickname 저장 됨
  const debouncedCheckTerm = useDebounce(nickname, 500);

  // 닉네임 중복검사
  useEffect(() => {
    if (debouncedCheckTerm) duplicationNicknameAPI(debouncedCheckTerm);
  }, [debouncedCheckTerm]);

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
        placeholder='닉네임을 정해주세요!'
        value={nickname}
        onChange={checkValidNickname}
      />
      <span>{nickname.length} / 10</span>
      <hr />
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
