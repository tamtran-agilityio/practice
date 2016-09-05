import './style/style.scss';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Login from './js/containers/Login';
import configureStore from './js/AppStore';

const store = configureStore();

render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById('root')
)