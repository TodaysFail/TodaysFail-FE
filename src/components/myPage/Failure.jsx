import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { deleteRecord } from '../../actions/recordListActions';
import axios from '../../api/apiController';
import { ReactComponent as DeleteIcon } from '../../assets/delete.svg';
import { ReactComponent as StarIcon } from '../../assets/star_icon.svg';
import Button from '../common/Button';
import Modal from '../common/Modal';

export default function Failure({ failure, getRecord, num }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const handleUpdate = () => {
    navigate(`/recordpage?recordId=${failure.id}`);
  };

  const handleDelete = () => {
    axios
      .delete(`/record?recordId=${failure.id}`)
      .then(() => {
        dispatch(deleteRecord(failure.id));
      })
      .catch(() => {
        // TODO: 에러 처리
      });
  };

  return (
    <FailureContainer>
      <Number>{num.padStart(2, '0')}</Number>
      <Main>
        <FailureHeader>
          <Title>{failure.title}</Title>
          <Time>{failure.createdAt}</Time>
        </FailureHeader>
        <Content>{failure.content}</Content>
        <Feel>
          <FeelText>
            <StarIcon />
            <span>{failure.feel}</span>
          </FeelText>
          <ButtonContainer>
            <IconButton onClick={handleUpdate}>수정</IconButton>
            <IconButton onClick={() => setIsVisibleModal(true)}>
              <DeleteIcon />
            </IconButton>
          </ButtonContainer>
        </Feel>
      </Main>
      {isVisibleModal && (
        <Modal mainText='정말 삭제하실건가요?' subText='지금까지 기록한 실패가 삭제됩니다.'>
          <RecordPageModalButtonContainer>
            <Button
              type={{ bgColor: 'white', width: 95, fontSize: 16 }}
              text='취소하기'
              handleClick={() => {
                setIsVisibleModal(false);
              }}
            />
            <Button type={{ bgColor: 'black', width: 95, fontSize: 16 }} text='삭제하기' handleClick={handleDelete} />
          </RecordPageModalButtonContainer>
        </Modal>
      )}
    </FailureContainer>
  );
}

const FailureContainer = styled.div`
  display: flex;
  gap: 8px;
  border-bottom: 1px solid #b8b8b8;
`;

const Main = styled.div`
  width: 100%;
`;

const Number = styled.span`
  border-radius: 50%;
  border: 1px solid black;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 9px;
  line-height: 150%;
  padding: 0.5px 7px;
  height: fit-content;
`;

const FailureHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

const Title = styled.span`
  font-family: 'Pretendard-Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  margin-top: -2px;
`;

const Time = styled.span`
  font-family: 'Pretendard-Light';
  font-weight: 400;
  font-size: 12px;
`;

const Content = styled.div`
  font-family: 'Pretendard-Light';
  font-size: 14px;
  color: #848484;
  margin-bottom: 12px;
`;

const Feel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Pretendard-Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  margin-bottom: 10px;
`;

const FeelText = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const IconButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 8px;
`;

const RecordPageModalButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
