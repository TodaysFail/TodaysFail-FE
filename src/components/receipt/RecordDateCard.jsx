import styled from 'styled-components';

export default function RecordDateCard({ date }) {
  return (
    <RecordDateContainer>
      <RecordDateContents>내일은 좀 더 성장할 소중한 경험 내역</RecordDateContents>
      <RecordDateContents>{date}</RecordDateContents>
    </RecordDateContainer>
  );
}

const RecordDateContainer = styled.div`
  width: 100%;
  padding: 8px;
  border-top: 1px dashed #b8b8b8;
  border-bottom: 1px dashed #b8b8b8;
`;

const RecordDateContents = styled.p`
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  color: #1e1e1e;
`;
