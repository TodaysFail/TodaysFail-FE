import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../../api/apiController';
import Button from '../../components/common/Button';
import Modal from '../../components/common/Modal';
import InputForm from '../../components/record/InputForm';
import checkCurrentTime from '../../utils/helpers/checkCurrentTime';

export default function RecordPage() {
  const [searchParams] = useSearchParams();
  const [dateYMD, setDateYMD] = useState('2023-01-01');
  const [dateHMS, setDateHMS] = useState('00:00:00');
  const [titleText, setTitleText] = useState('');
  const [contentText, setContentText] = useState('');
  const [feelText, setFeelText] = useState('');
  const recordId = searchParams.get('recordId');

  // 모달 오픈 체크 상태
  const [isVisibleCancleModal, setIsVisibleCancleModal] = useState(false);
  const [isVisibleSaveModal, setIsVisibleSaveModal] = useState(false);
  const navigate = useNavigate();

  const getContent = useCallback(async () => {
    const recordRes = await axios.get(`/record/${recordId}`);

    return recordRes.data;
  }, [recordId]);

  const setContent = useCallback(async () => {
    const recordData = await getContent();

    setTitleText(recordData.title);
    setContentText(recordData.content);
    setFeelText(recordData.feel);
  }, [getContent]);

  useEffect(() => {
    if (recordId) {
      setContent();
    }

    checkCurrentTime(setDateYMD, setDateHMS);
    setInterval(() => checkCurrentTime(setDateYMD, setDateHMS), 1000);
  }, [getContent, recordId, setContent]);

  const submitContent = async () => {
    if (!(titleText && contentText && feelText)) return setIsVisibleSaveModal(true);

    if (recordId) {
      await axios
        .put(`/record`, {
          content: contentText,
          feel: feelText,
          recordId,
          title: titleText,
        })
        .then((res) => {
          navigate('/');
        })
        .catch();
    } else {
      await axios
        .post(`/record`, {
          content: contentText,
          feel: feelText,
          title: titleText,
        })
        .then((res) => {
          navigate('/');
        })
        .catch((res) => {});
    }
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
            setIsVisibleCancleModal(true);
          }}
        />
        <Button type={{ bgColor: 'black', width: 360, fontSize: 16 }} text='저장하기' handleClick={submitContent} />
      </RecordPageButtonContainer>
      {isVisibleCancleModal && (
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
                setIsVisibleCancleModal(false);
              }}
            />
          </RecordPageModalButtonContainer>
        </Modal>
      )}
      {isVisibleSaveModal && (
        <Modal mainText='내용을 입력해주세요!' subText='내용이 전부 입력되지 않았습니다.'>
          <RecordPageModalButtonContainer>
            <Button
              type={{ bgColor: 'black', width: 95, fontSize: 16 }}
              text='확인하기'
              handleClick={() => {
                setIsVisibleSaveModal(false);
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
  width: 100%;
  height: 100%;
  flex: auto;
  padding: 0 15px;
  margin: 0 auto;
  background: #ffffff;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: auto;
  padding: 19px 0px 0px 0px;
`;

const RecordPageHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 15px;
  width: 100%;
  height: 122px;
  background: green;
  background: #000000;
  border-radius: 10px;
`;

const RecordPageInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fafafa;
  border-radius: 10px;
  padding: 15px;
  height: 100%;
  flex: auto;
  margin-bottom: 12px;
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
  width: 100%;
  display: flex;
  justify-content: center;
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
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-top: solid 1px;
  border-bottom: solid 1px;
  border-color: white;
  flex-wrap: nowrap;
`;

const DateYMD = styled.span`
  color: white;
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
  font-family: 'Pretendard-Light';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  /* identical to box height, or 18px */

  text-align: right;

  color: #ffffff;
`;
