import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {clone, isBefore, isAfter, isSameDay} from '../helpers/DateUtilities';

class Day extends Component {
  constructor(props) {
    super(props);
  }

  getDayClassName(day) {
    let dayCurrented = new Date();
    let className = "date-item ";
    if (isSameDay(day, dayCurrented)) {
      className += "today ";
    }
    if (this.isDisabled(day)){
      className += "disabled";
    }
    return className;
  }

  onSelect(event) {
    event.preventDefault();
    if (!this.isDisabled(this.props)) {
      this.props.onSelect(this.props);
    }
  }

  isDisabled(day) {
    let minDate = this.props.minDate;
    let maxDate = this.props.maxDate;
    if (minDate === null && maxDate === null) {
      return false;
    } else if (minDate === null) {
      return isAfter(day, maxDate);
    } else if (maxDate === null) {
      console.log("SSSAAAAA", isBefore(day, minDate));
      return isBefore(day, minDate);
    } else {
      console.log("SSSAAAAA", isBefore(day, minDate));
      console.log("SSSAAAAA", isAfter(day, minDate));
      return (isBefore(day, minDate)) || (isAfter(day, maxDate));
    }
  }

  render() {
    console.log("AAAAAAAA", this.props);
    return (
      <div className={this.getDayClassName(this.props)}
        onClick={this.onSelect.bind(this)}
      >
        <span className="date-picker-trigger">
          {this.props.dayCurrent}
        </span>
      </div>
    ) 
  }
}

export default Day