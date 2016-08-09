import { routerReducer } from 'react-router-redux';
import {combineReducers} from 'redux';
import rootReducer from './Index';

const boardApp = combineReducers({
  rootReducer,
  routing: routerReducer
})

export default boardApp
