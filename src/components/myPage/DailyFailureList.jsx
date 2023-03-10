import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { setRecordList } from '../../actions/recordListActions';
import axios from '../../api/apiController';
import DailyFailure from './DailyFailure';
import NoFailures from './NoFailures';

export default function DailyFailureList({ nickname }) {
  const dispatch = useDispatch();
  const { recordList } = useSelector((state) => state.record);

  const navigate = useNavigate();

  const getRecord = useCallback(() => {
    axios
      .get(`/record?writer=${nickname}`)
      .then((res) => {
        dispatch(setRecordList(res.data));
      })
      .catch(() => {
        localStorage.removeItem('nickname');
        navigate('/login');
      });
  }, [dispatch, navigate, nickname]);

  useEffect(() => {
    getRecord();
  }, [getRecord]);

  return (
    <ListContainer>
      {recordList.length ? (
        <List>
          {recordList.map((el) => (
            <DailyFailure key={el.date} failures={el} />
          ))}
        </List>
      ) : (
        <NoFailures />
      )}
    </ListContainer>
  );
}

const ListContainer = styled.div`
  width: 100%;
  height: calc(100vh - 320px);
`;

const List = styled.div`
  padding-bottom: 52px;
`;
