import styled from 'styled-components';
import FailureCard from './FailureCard';

export default function FailureList({ total, failureList }) {
  return (
    <>
      <TotalFailTitle>Total failure</TotalFailTitle>
      <TotalFailCount>{total}</TotalFailCount>
      <TotalFailContainer>
        {failureList &&
          failureList.map((el, i) => (
            <FailureCard
              key={el.id}
              order={i + 1 < 10 ? `0${i + 1}` : i + 1}
              title={el.title}
              content={el.content}
              feel={el.feel}
              createdAt={el.createdAt}
            />
          ))}
      </TotalFailContainer>
    </>
  );
}

const TotalFailContainer = styled.section`
  width: 330px;
  height: 355px;
  margin-top: 14px;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const TotalFailTitle = styled.h3`
  width: 100%;
  padding-bottom: 9px;
  margin-top: 36px;
  font-size: 12px;
  font-weight: 700;
  border-bottom: 1px solid #b8b8b8;
`;

const TotalFailCount = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: 700;
  top: 173px;
  right: 15px;
`;
