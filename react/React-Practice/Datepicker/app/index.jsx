import './styles/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';

let Datepicker = React.createClass({
  render: function() {
    return (
      <div>
        <App/>
      </div>
    )
  }
});
ReactDOM.render(
  <Datepicker />,
  document.getElementById('header')
);
