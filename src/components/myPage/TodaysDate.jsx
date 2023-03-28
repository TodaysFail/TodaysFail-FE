import styled from 'styled-components';

export default function TodaysDate() {
  const today = new Date();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const date = String(today.getDate()).padStart(2, '0');

  return (
    <DateContainer>
      <span>{`${month}.${date}`}</span>
      <span>{days[today.getDay()]}</span>
    </DateContainer>
  );
}

const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 150%;
`;
