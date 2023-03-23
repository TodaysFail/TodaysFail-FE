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
      .get(`/record`)
      .then((res) => {
        dispatch(setRecordList(res.data));
      })
      .catch(() => {
        navigate('/login');
      });
  }, [dispatch, navigate]);

  useEffect(() => {
    getRecord();
  }, [getRecord]);

  return (
    <ListContainer>
      {recordList.length ? (
        <List>
          {recordList.map((el) => (
            <DailyFailure key={el.date} failures={el} writer={nickname} />
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
  height: 100%;
`;

const List = styled.div`
  padding-bottom: 52px;
`;
