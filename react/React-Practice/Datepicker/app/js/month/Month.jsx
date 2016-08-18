import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import {clone, toStringDay, toDayOfMonthString, toMonthAndYearString, moveToDayOfWeek, getFullYear} from '../helpers/DateUtilities';
import WeekContent from '../week/WeekContent';

class Month extends Component {
  constructor(props) {
    super(props);
  }

  /**
   * @details [get day begin of week]
   * 
   * @param  [confirm day start of week]
   */
  _getWeekStartDates(view) {
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
  
  /**
   * @details [handle when click day of select]
   */
  onSelect(day) {
    this.props.onSelect(day);
  }

  render() {
    let starts = this._getWeekStartDates(this.props.dayCurrent);
    return (
      <div className="month-picker">
        {
          starts.map((start, i) => 
            <WeekContent
              key= {i}
              {...start}
              onSelect={this.onSelect.bind(this)}
              minDate={this.props.minDate}
              maxDate={this.props.maxDate}
            />
          )
        }
      </div>
    )
  }
}

Month.propTypes = {
  onSelect: PropTypes.func.isRequired
}

export default Month