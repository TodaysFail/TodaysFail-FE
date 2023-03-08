import styled from 'styled-components';
import axios from '../../api/apiController';
import { ReactComponent as DeleteIcon } from '../../assets/delete.svg';
import { ReactComponent as StarIcon } from '../../assets/star_icon.svg';

export default function Failure({ failure, getRecord, num }) {
  const handleDelete = () => {
    axios
      .delete(`/record?writer=${localStorage.getItem('nickname')}&recordId=${failure.id}`)
      .then(() => {
        getRecord();
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
          <DeleteButton onClick={handleDelete}>
            <DeleteIcon />
          </DeleteButton>
        </Feel>
      </Main>
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

const DeleteButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 8px;
`;
