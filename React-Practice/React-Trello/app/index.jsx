import './style/style.scss';
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import LoadApp from './js/reducers/LoadApp'
import App from './js/components/App'
import HomePage from './js/components/HomePage'
import ListBoard from './js/components/ListBoard'
import Board from './js/components/Board'
import ListBoardDetails from './js/components/ListBoardDetails'
import { Router, IndexRoute,  Route, Link, browserHistory, hashHistory } from 'react-router';

const store = createStore(
  LoadApp
);

store.subscribe(() => {
});

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="board/:id" component={ListBoardDetails} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
