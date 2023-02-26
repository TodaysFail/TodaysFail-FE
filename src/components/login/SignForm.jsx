import axios from 'axios';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDebounce } from '../../hooks/useDebounce';
import { ReactComponent as Vector } from '../../assets/Vector.svg';

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
  const debouncedCheckTerm = useDebounce(nickname, 480);

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
        <Vector />
      </Bullet>
      <StyledInput
        id='nickname-input'
        type='text'
        placeholder='닉네임을 정해주세요!'
        value={nickname}
        onChange={checkValidNickname}
      />
      <NicknameLength>{nickname.length} / 10</NicknameLength>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Bullet = styled.span`
  margin: 0 auto;
`;

const StyledInput = styled.input`
  width: 300px;
  height: 24px;
  left: 36px;
  top: 457px;
  border: none;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.011em;
  color: #000000;
  ::placeholder {
    color: #c7c7c7;
  }
`;

const NicknameLength = styled.span`
  width: 60px;
  height: 24px;
  left: 335px;
  top: 457px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.011em;
  color: #c7c7c7;
`;
