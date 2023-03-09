import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/Button';
import Failure from './Failure';

export default function DailyFailure({ failures }) {
  const navigate = useNavigate();
  const handlePrint = () => {
    navigate(`/receipt?date=${failures.date}`);
  };

  return (
    <>
      {failures.records.length ? (
        <div>
          <DailyHeader>
            <FailureDate>{failures.date}</FailureDate>
            <Button
              type={{ bgColor: 'white', width: '104', fontSize: '14', isHover: 'true' }}
              text={'영수증 뽑기'}
              handleClick={handlePrint}
            />
          </DailyHeader>
          <FailuresContainer>
            {failures.records.map((failure, idx) => (
              <Failure key={failure.id} failure={failure} num={String(failures.records.length - idx)} />
            ))}
          </FailuresContainer>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

const DailyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const FailureDate = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
`;

const FailuresContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  border-radius: 10px;
  padding: 18px 14px;
  margin-bottom: 24px;
  gap: 18px;
`;
