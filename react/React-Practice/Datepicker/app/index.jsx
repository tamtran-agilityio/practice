import './styles/styles.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Datepicker from './js/Datepicker';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Datepicker
          minDay = {'08/15/2016'}
          maxDay = {'08/24/2016'}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
