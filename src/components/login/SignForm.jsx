import axios from 'axios';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDebounce } from '../../hooks/useDebounce';

export default function SignForm({ nickname, setNickname, setIsDuplicated, setWarningMessage }) {
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
      setIsDuplicated(true);
    }
  };

  // 커스텀 훅: 매 입력마다 요청 보내면 성능 저하 우려
  // debouncedCheckTerm에 바뀐 nickname 저장 됨
  const debouncedCheckTerm = useDebounce(nickname, 500);

  // 닉네임 중복검사
  useEffect(() => {
    // 서버에 닉네임 중복검사
    const duplicationNicknameAPI = async (nickname) => {
      await axios
        .get(`https://port-0-todaysfail-be-r8xoo2mlejm1bez.sel3.cloudtype.app:443/api/v1/member/duplicate/${nickname}`)
        .then((response) => {
          if (response.data) {
            setWarningMessage('이미 존재하는 닉네임입니다');
            setIsDuplicated(true);
          } else {
            setWarningMessage('사용 가능한 닉네임입니다 : )');
            setIsDuplicated(false);
          }
        })
        .catch((response) => {});
    };

    if (debouncedCheckTerm) duplicationNicknameAPI(debouncedCheckTerm);
  }, [setWarningMessage, setIsDuplicated, debouncedCheckTerm]);

  return (
    <Wrapper>
      <Bullet>
        <StyledInput
          id='nickname-input'
          type='text'
          placeholder='닉네임을 정해주세요!'
          value={nickname}
          onChange={checkValidNickname}
        />
        <NicknameLength>{nickname.length} / 10</NicknameLength>
      </Bullet>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: pink;
`;

const Bullet = styled.li`
  display: flex;
`;

const StyledInput = styled.input`
  width: 131px;
  height: 24px;
  left: 36px;
  top: 457px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  letter-spacing: -0.011em;

  /* gray */

  color: #c7c7c7;
`;

const NicknameLength = styled.span`
  width: 40px;
  height: 24px;
  left: 335px;
  top: 457px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  text-align: center;
  letter-spacing: -0.011em;

  /* gray */
  background: blue;
  color: #c7c7c7;
`;
