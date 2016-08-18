import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {clone, isBefore, isAfter, isSameDay, isSameDays, convertDay} from '../helpers/DateUtilities';

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected ? props.selected : false
    }
  }

  /**
   * @details [handle add class render model]
   * @param  [description]
   */
  _getDayClassName(day) {
    let dayCurrented = new Date();
    let className = "date-item ";
    if (isSameDay(day, dayCurrented)) {
      className += "today ";
    }
    if (this._isDisabled(day)){
      className += "disabled";
    }
    if (this.state.selected && isSameDays(convertDay(day), convertDay(this.props))) {
      className += " selected";
    } else {
      className += "";
    }

    return className;
  }

  /**
   * @details [handle when click day of select]
   */
  _onSelect(event) {
    if (!this._isDisabled(this.props)) {
      this.props.onSelect(this.props);
      this.setState({
        selected: true
      });
    }
  }

  /**
   * @details [handle when add min day and max day select]
   * @param  [day input current]
   */
  _isDisabled(day) {
    let minDate = this.props.minDate;
    let maxDate = this.props.maxDate;
    if (minDate === null && maxDate === null) {
      return false;
    } else if (minDate === null) {
      return isAfter(day, maxDate);
    } else if (maxDate === null) {
      return isBefore(day, minDate);
    } else {
      return (isBefore(day, minDate)) || (isAfter(day, maxDate));
    }
  }

  render() {
    return (
      <div className={this._getDayClassName(this.props)}
        onClick={this._onSelect.bind(this)}
      >
        <span className="date-picker-trigger">
          {this.props.dayCurrent}
        </span>
      </div>
    ) 
  }
}

Day.propTypes = {
  dayCurrent: PropTypes.number.isRequired
}

export default Day