import React from 'react';
import ReactDOM from 'react-dom';
import {clone, toStringDay, toDayOfMonthString, toMonthAndYearString} from '../helpers/DateUtilities';
import Week from '../week/Week';

export default class DayPicker extends React.Component {
  constructor(props, def) {
    super(props);
    this.def = this.props.selected || new Date();
    this.state = {
      view: clone(this.def),
      selected: clone(this.def),
      minDate: null,
      maxDate: null,
      id: this.getUniqueIdentifier()
    }
  }

  getUniqueIdentifier() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  render() {
    return (
      <div className="date-picker">
        <input key = {this.state.id}
          ref="trigger"
          type="text"
          className="date-picker-trigger"
          readOnly="true"
          value={toStringDay(this.state.selected)}
          onClick={this.show}
        />
        <Week/>
      </div>
    ) 
  }
}

ReactDOM.render(
  <DayPicker/>,
  document.getElementById('app')
);