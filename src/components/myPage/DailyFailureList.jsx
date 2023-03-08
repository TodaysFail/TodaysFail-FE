import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../../api/apiController';

import DailyFailure from './DailyFailure';
import NoFailures from './NoFailures';

export default function DailyFailureList({ nickname }) {
  const [dailyFailures, setDailyFailures] = useState([]);
  const navigate = useNavigate();

  const getRecord = useCallback(() => {
    axios
      .get(`/record?writer=${nickname}`)
      .then((res) => {
        setDailyFailures(res.data);
      })
      .catch(() => {
        localStorage.removeItem('nickname');
        navigate('/login');
      });
  }, [navigate, nickname]);

  useEffect(() => {
    getRecord();
  }, [getRecord]);

  return (
    <ListContainer>
      {dailyFailures.length ? (
        <List>
          {dailyFailures.map((el) => (
            <DailyFailure key={el.date} failures={el} getRecord={getRecord} />
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
