export const SET = 'SET';
export const DELETE = 'DELETE';

export const setRecordList = (newList) => ({ type: SET, payload: newList });
export const deleteRecord = (id) => ({ type: DELETE, payload: id });
