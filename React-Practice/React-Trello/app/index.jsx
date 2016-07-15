import React from 'react';
import {ReactDOM, render} from 'react-dom';
import App from './js/components/app';
import Home from './js/components/home';
import Contact from './js/components/contact';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';

render((
  <Router history={browserHistory}>
  	<Route>
	    <Route path="/" component={Home} />
	    <IndexRoute component={Home} />
	    <Route path="contact" component={Contact} />
	  </Route>
  </Router>
), document.getElementById('App'));

// import { applyMiddleware, createStore } from 'redux'
// import { createMiddleware, History, match, navigate, reducer, route } from 'redux-routing'
 
// // define routes 
// const routes = [
//   route('/', () => console.log('navigated to /')),
//   route('/foo', () => console.log('navigated to /foo')),
//   route('/foo/:bar', () => console.log('navigated to /foo/:bar'))
// ]
 
// // create routing middleware, set up with HTML5 History 
// const middleware = createMiddleware(History)
 
// // create store with middleware 
// const createStoreWithMiddleware = applyMiddleware(middleware)(createStore)
// const store = createStoreWithMiddleware(reducer)
 
// // subscribe to changes 
// store.subscribe(() => {
//   const route = store.getState()
//   const matched = match(route.href, routes)
 
//   if (matched) {
//     matched.handler()
//   } else {
//     console.log('404 not found')
//   }
// })
 
// // start navigating 
// store.dispatch(navigate('/'))
// // logs 'navigated to /' 
// store.dispatch(navigate('/foo'))
// // logs 'navigated to /foo' 
// store.dispatch(navigate('/foo/123'))
// // logs 'navigated to /foo/:bar' 
// store.dispatch(navigate('/foo/bar/baz'))
// // logs '404 not found' 