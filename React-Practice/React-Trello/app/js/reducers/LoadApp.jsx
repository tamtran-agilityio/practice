import { routerReducer } from 'react-router-redux';
import {combineReducers} from 'redux';
import boards from './Board';

const boardApp = combineReducers({
  boards,
  routing: routerReducer
})

export default boardApp
