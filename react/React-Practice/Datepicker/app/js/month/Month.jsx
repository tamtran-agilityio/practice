import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import {clone, toStringDay, toDayOfMonthString, toMonthAndYearString, moveToDayOfWeek, getFullYear} from '../helpers/DateUtilities';
import WeekContent from '../week/WeekContent';

export default class Month extends Component {
  constructor(props, def) {
    super(props);
  }

  getWeekStartDates(view) {
    view.setDate(1);
    view = moveToDayOfWeek(clone(view), 0);

    let current = clone(view);
    current.setDate(current.getDate()+7);

    let starts = [view],
    month = current.getMonth();
    let firstDay = {
      day: clone(view)
    }
    let arr = [];
    arr.push(firstDay);
    while (current.getMonth() === month) {
      let newdate = {
        day: clone(current)
      };
      arr.push(newdate);
      current.setDate(current.getDate()+7);
    }
    return arr;
  }

  render() {
    let starts = this.getWeekStartDates(this.props.dayCurrent);
    return (
      <div className="month-picker">
        {
          starts.map((start, i) => 
            <WeekContent
              key= {i}
              {...start}
            />
          )
        }
      </div>
    )
  }
}