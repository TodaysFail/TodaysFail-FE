import { combineReducers } from 'redux';
import recordListReducer from './recordListReducer';

const rootReducer = combineReducers({
  record: recordListReducer,
});

export default rootReducer;
