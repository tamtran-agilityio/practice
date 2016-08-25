import {compose, createStore, combineReducers, applyMiddleware} from 'redux';
import {filterReducer as currentFilter} from './filter';
import {todosReducer as todos} from './todos';
let persistState = require('redux-localstorage');
let createLogger = require('redux-logger');

const rootReducer = combineReducers({
  todos,
  currentFilter
});

const createStoreWithMiddleware = applyMiddleware(createLogger())(createStore);
const createPersistentStore = compose(persistState())(createStoreWithMiddleware);

export class AppStore {
  constructor () {
    return createPersistentStore(rootReducer);
  }
}