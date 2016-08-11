import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import {clone, toStringDay, toDayOfMonthString, toMonthAndYearString, moveToDayOfWeek} from '../helpers/DateUtilities';
import Day from '../day/Day';

export default class WeekContent extends Component {
  constructor(props, def) {
    super(props);
    this.def = this.props.selected || new Date();
    this.state = {
      days: this.buildDays(this.props.day),
    }
  }

  buildDays(start) {
    if (start != undefined) {
      let days = [];
      let cloneDay = clone(start);
      for (var i = 1; i <= 6; i++) {
        cloneDay = clone(cloneDay);
        cloneDay.setDate(cloneDay.getDate()+1);
        let newDay = {
          year: cloneDay.getFullYear(),
          monthCurrent: cloneDay.getMonth(),
          dayCurrent: cloneDay.getDate(),
          day: cloneDay.getDay()
        }
        days.push(newDay);
      }
      return days; 
    }
  }

  render() {
    return (
      <div className="week-picker">
        {
          this.state.days.map((day, i) => 
            <Day
              key= {i}
              {...day}
            />
          )
        }
      </div>
    )
  }
}