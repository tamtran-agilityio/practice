import './styles/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import DayPicker from './js/day/DayPicker';

let Datepicker = React.createClass({
  render: function() {
    var d = new Date();
    var n = d.getMonth();
    console.log("SSS Date", Date.now(), n);
    return (
      <div className="datepicker">
        <input
          className="input-datepicker"
          placeholder="Day time"
        />
      </div>
    );
  }
});
ReactDOM.render(
  <Datepicker />,
  document.getElementById('header')
);