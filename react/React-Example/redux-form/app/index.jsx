import './style/style.scss';
import 'babel-polyfill'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import store from './js/store';
import UserForm from './js/components/user-form';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <UserForm />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));