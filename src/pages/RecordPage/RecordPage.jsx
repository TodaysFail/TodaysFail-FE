import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../../api/apiController';
import Button from '../../components/common/Button';
import InputForm from '../../components/record/InputForm';
import Modal from '../../components/common/Modal';
import checkCurrentTime from '../../utils/helpers/checkCurrentTime';

export default function RecordPage() {
  const [dateYMD, setDateYMD] = useState('2023-01-01');
  const [dateHMS, setDateHMS] = useState('00:00:00');
  const [titleText, setTitleText] = useState('');
  const [contentText, setContentText] = useState('');
  const [feelText, setFeelText] = useState('');

  // 모달 오픈 체크 상태
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkCurrentTime(setDateYMD, setDateHMS);
    setInterval(() => checkCurrentTime(setDateYMD, setDateHMS), 1000);
  }, []);

  const submitContent = async () => {
    await axios
      .post(`/record`, {
        // content: '핫케이크를 태웠다. 끝.',
        // feel: '다음에 더 잘하면 된다',
        // title: '핫케이크 태움',
        // writer: '도모',
        content: contentText,
        feel: feelText,
        title: titleText,
        writer: localStorage.getItem('nickname'),
      })
      .then((res) => {
        navigate('/');
      })
      .catch((res) => {});
  };

  return (
    <RecordPageContainer>
      <Main>
        <RecordPageHeaderContainer>
          <RecordPageHeaderContent>
            <RecordPageHeaderTitle>어떤 실패를 경험하셨나요?</RecordPageHeaderTitle>
            <RecordPageHeaderDate>
              <DateYMD>{dateYMD}</DateYMD>
              <DateHMS>{dateHMS}</DateHMS>
            </RecordPageHeaderDate>
          </RecordPageHeaderContent>
        </RecordPageHeaderContainer>

        <RecordPageInputContainer>
          <RecordPageInputContent>
            <InputForm
              label={'제목'}
              placeholder='어떤 실패를 하셨나요?'
              maxLength='17'
              text={titleText}
              setText={setTitleText}
            />
          </RecordPageInputContent>
          <RecordPageInputContent>
            <InputForm
              label={'내용'}
              placeholder='자세하게 알려주세요!'
              maxLength='300'
              text={contentText}
              setText={setContentText}
            />
          </RecordPageInputContent>
          <RecordPageInputContent>
            <InputForm
              label={'느낀점'}
              placeholder='이번 실패로 얻은 점은 무엇인가요?'
              maxLength='20'
              text={feelText}
              setText={setFeelText}
            />
          </RecordPageInputContent>
        </RecordPageInputContainer>
      </Main>

      <RecordPageButtonContainer>
        <Button
          type={{ bgColor: 'white', width: 360, fontSize: 16 }}
          text='취소하기'
          handleClick={() => {
            setIsVisibleModal(true);
          }}
        />
        <Button type={{ bgColor: 'black', width: 360, fontSize: 16 }} text='저장하기' handleClick={submitContent} />
      </RecordPageButtonContainer>
      {isVisibleModal && (
        <Modal mainText='정말 취소하실건가요?' subText='실패를 기록하면 성장할 가능성이 높아져요!'>
          <RecordPageModalButtonContainer>
            <Button
              type={{ bgColor: 'white', width: 95, fontSize: 16 }}
              text='취소하기'
              handleClick={() => navigate('/')}
            />
            <Button
              type={{ bgColor: 'black', width: 95, fontSize: 16 }}
              text='계속하기'
              handleClick={() => {
                setIsVisibleModal(false);
              }}
            />
          </RecordPageModalButtonContainer>
        </Modal>
      )}
    </RecordPageContainer>
  );
}

const RecordPageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 390px;
  /* height: 844px; */
  height: 100vh;
  padding: 0 15px;
  margin: 0 auto;
  background: #ffffff;
`;

const Main = styled.div`
  min-height: 660px;
  padding: 19px 0px 0px 0px;
`;

const RecordPageHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* width: 360px; */
  width: 100%;
  height: 122px;
  background: green;
  background: #000000;
  border-radius: 10px;
  /* margin: 10px 10px 10px 15px; */
`;

const RecordPageInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fafafa;
  border-radius: 10px;
  padding: 15px;
  height: 79%;
`;

const RecordPageButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  margin-bottom: 16px;
`;

const RecordPageModalButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const RecordPageInputContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const RecordPageHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const RecordPageHeaderTitle = styled.h2`
  /* width: 390px; */
  width: 100%;
  padding: 8px 10px 0px 79px;
  color: white;

  font-family: 'Pretendard-Light';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  /* identical to box height, or 30px */

  letter-spacing: -0.011em;

  /* white */

  margin-bottom: 16px;
`;

const RecordPageHeaderDate = styled.div`
  display: flex;
  width: 330px;
  justify-content: flex-start;
  padding: 5px;
  border-top: solid 1px;
  border-bottom: solid 1px;
  border-color: white;
  margin: 0px 10px 10px 13px;
  flex-wrap: nowrap;
`;

const DateYMD = styled.span`
  color: white;
  margin: 0px 198px 0px 0px;

  font-family: 'Pretendard-Bold';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 21px */

  color: #ffffff;
`;

const DateHMS = styled.span`
  color: white;
  padding: 1.7px 0px 0px 0px;
  font-family: 'Pretendard-Light';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  /* identical to box height, or 18px */

  text-align: right;

  color: #ffffff;
`;
