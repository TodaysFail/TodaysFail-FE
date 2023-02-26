import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import DailyFailure from './DailyFailure';
import NoFailures from './NoFailures';

export default function DailyFailureList({ nickname }) {
  const [dailyFailures, setDailyFailures] = useState([]);

  const getRecord = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/record?writer=${localStorage.getItem('nickname')}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setDailyFailures(res.data);
      });
  };

  useEffect(() => {
    getRecord();
  }, []);

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
      {/* <NoFailures /> */}
    </ListContainer>
  );
}

const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  /* padding-bottom: 72px; */
`;

const List = styled.div`
  padding-bottom: 52px;
`;
