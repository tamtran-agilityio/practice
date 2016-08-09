import { combineReducers } from 'redux';
import board from './Board';
import card from './Card';
import member from './Member';
import comment from './Comment';
import label from './Label';

const rootReducer = combineReducers({
  board,
  card,
  member,
  comment,
  label
});

export default rootReducer;