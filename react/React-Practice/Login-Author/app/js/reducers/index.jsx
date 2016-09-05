import { routerStateReducer as router } from 'redux-router';
import { combineReducers } from 'redux';
import { pvlogin } from './reducers';

const rootReducer = combineReducers({
  pvlogin,
  routing: router
})

export default rootReducer