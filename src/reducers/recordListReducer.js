import { DELETE, SET } from '../actions/recordListActions';

const initialState = {
  recordList: [],
};

function recordListReducer(state = initialState, action) {
  const newList = [];

  switch (action.type) {
    case SET:
      return {
        ...state,
        recordList: [...action.payload],
      };
    case DELETE:
      for (let i = 0; i < state.recordList.length; i++) {
        const newRecords = [];

        for (let j = 0; j < state.recordList[i].records.length; j++) {
          if (state.recordList[i].records[j].id !== action.payload) {
            newRecords.push(state.recordList[i].records[j]);
          }
        }

        if (newRecords.length > 0) {
          newList.push({
            date: state.recordList[i].date,
            receiptDate: state.recordList[i].receiptDate,
            total: state.recordList[i].total,
            records: newRecords,
          });
        }
      }

      return {
        ...state,
        recordList: newList,
      };
    default:
      return state;
  }
}

export default recordListReducer;
