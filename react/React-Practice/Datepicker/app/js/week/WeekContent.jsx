import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import {clone, toStringDay, toDayOfMonthString, toMonthAndYearString, moveToDayOfWeek} from '../helpers/DateUtilities';
import Day from '../day/Day';

class WeekContent extends Component {
  constructor(props) {
    super(props);
  }

  /*
   * @brief [Render day]
   * @details [Render day to list day of week]
   * 
   * @param  [start day being of week]
   */
  _buildDays(start) {
    let days = [];
    let cloneDay = clone(start);
    for (var i = 1; i <= 7; i++) {
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

  /**
   * @details [select day of month when click]
   */
  onSelect(day) {
    this.props.onSelect(day)
  }

  render() {
    let days = this._buildDays(this.props.day);
    return (
      <div className="week-picker">
        {
          days.map((day, i) => 
            <Day
              key= {i}
              {...day}
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

WeekContent.propTypes = {
  onSelect: PropTypes.func.isRequired
}

export default WeekContent