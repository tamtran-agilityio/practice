import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import {clone, toStringDay, toDayOfMonthString, toMonthAndYearString} from '../helpers/DateUtilities';
import Day from '../day/Day';

export default class WeekContent extends Component {
  constructor(props, def) {
    super(props);
    this.def = this.props.selected || new Date();
    this.state = {
      days: this.buildDays(this.def),
      view: clone(this.def),
      selected: clone(this.def),
      minDate: null,
      maxDate: null,
      id: this.getUniqueIdentifier()
    }
  }

  buildDays(start) {
    let days = [];
    let cloneDay = clone(start);
    for (var i = 1; i <= 6; i++) {
      cloneDay = clone(cloneDay);
      cloneDay.setDate(cloneDay.getDate()+1);
      console.log("SSS Daya Day", cloneDay.getDate());
      let newDay = {
        monthCurrent: cloneDay.getMonth(),
        dayCurrent: cloneDay.getDate()
      }
      days.push(newDay);
    }
    return days;
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
    console.log("SSSSSS11111", this.state.days);
    return (
      <div className="week-picker">
        {
          this.state.days.map( day => 
            <Day
              key= {day.dayCurrent}
              {...day}
              onClick={() => onSelecteDay(day.dayCurrent)}
            />
          )
        }
      </div>
    )
  }
}