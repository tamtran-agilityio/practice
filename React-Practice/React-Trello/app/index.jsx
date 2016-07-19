import './style/style.scss';
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import boardApp from './js/reducers/index'
import App from './js/components/App'

let store = createStore(boardApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)