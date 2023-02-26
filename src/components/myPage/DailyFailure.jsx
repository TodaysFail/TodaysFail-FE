import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import Failure from './Failure';

export default function DailyFailure({ failures, getRecord }) {
  const navigate = useNavigate();
  const handlePrint = () => {
    navigate('/recordPage');
  };

  return (
    <div>
      <DailyHeader>
        <FailureDate>{failures.date}</FailureDate>
        <Button name={'영수증 뽑기'} handleClick={handlePrint} />
      </DailyHeader>
      <FailuresContainer>
        {failures.records.map((failure, idx) => (
          <Failure
            key={failure.id}
            failure={failure}
            getRecord={getRecord}
            num={String(failures.records.length - idx)}
          />
        ))}
      </FailuresContainer>
    </div>
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
