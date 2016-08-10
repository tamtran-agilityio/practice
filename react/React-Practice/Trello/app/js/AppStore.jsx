import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import logger from './devs/DevTools';
import boardApp from './reducers/LoadApp';

// Create an enhanced history that syncs navigation events with the store
const enhancer = applyMiddleware(thunk, logger);

export default function configureStore(initialState) {
  return createStore(boardApp, initialState, enhancer);
}