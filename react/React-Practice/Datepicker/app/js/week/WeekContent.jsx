import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import {clone, toStringDay, toDayOfMonthString, toMonthAndYearString, moveToDayOfWeek} from '../helpers/DateUtilities';
import Day from '../day/Day';

export default class WeekContent extends Component {
  constructor(props) {
    super(props);
  }

  buildDays(start) {
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

  render() {
    let days = this.buildDays(this.props.day);
    return (
      <div className="week-picker">
        {
          days.map((day, i) => 
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