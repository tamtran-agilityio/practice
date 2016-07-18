import './style/style.scss';
// import React from 'react';
// import {ReactDOM, render} from 'react-dom';
// import App from './js/components/App';
// import Home from './js/components/home';
// import Contact from './js/components/contact';
// import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';

// render((
//   <Router history={browserHistory}>
//     <Route>
//       <Route path="/" component={App} />
//       <IndexRoute component={App} />
//       <Route path="contact" component={Contact} />
//     </Route>
//   </Router>
// ), document.getElementById('App'));
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