import './styles/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Week from './js/week/WeekHeader';

let Datepicker = React.createClass({
  render: function() {
    return (
      <div className="datepicker">
        <input
          className="input-datepicker"
          placeholder="Day time"
        />
        <Week/>
      </div>
    );
  }
});
ReactDOM.render(
  <Datepicker />,
  document.getElementById('header')
);
