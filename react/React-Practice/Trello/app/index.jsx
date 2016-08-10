import './style/style.scss';
import'./style/awesome/font-awesome.scss';
import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './js/components/App';
import HomePage from './js/components/HomePage';
import ListBoard from './js/components/ListBoard';
import Board from './js/components/Board';
import ListBoardDetails from './js/components/ListBoardDetails';
import { Router, IndexRoute,  Route, Link, browserHistory, hashHistory } from 'react-router';
import AppStore from './js/AppStore';

const store = AppStore();

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
