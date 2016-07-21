import './style/style.scss';
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import LoadApp from './js/reducers/LoadApp'
import App from './js/components/App'
import HomePage from './js/components/HomePage'
import BoardList from './js/components/BoardList'
import Board from './js/components/Board'
import BoardListDetails from './js/components/BoardListDetails'
import { Router, IndexRoute,  Route, Link, browserHistory, hashHistory } from 'react-router';
import { localState, saveState } from './js/service/localStorage';

const persistedState = localState();
const store = createStore(
  LoadApp,
  persistedState  
);

store.subscribe(() => {
  saveState(store.getState());
});

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="board/:id" component={BoardListDetails} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
