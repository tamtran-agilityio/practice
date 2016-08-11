import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {clone} from '../helpers/DateUtilities';

export default class Day extends Component {
  constructor(props) {
    super(props);
  }

  getDayCurrent() {
    let dayCurrented = new Date();
    return dayCurrented.getDate();
  }

  render() {
    let currentTime = this.getDayCurrent();
    return (
      <div className={(currentTime === this.props.dayCurrent) ? "date-item current": "date-item"}>
        <span className="date-picker-trigger">
          {this.props.dayCurrent}
        </span>
      </div>
    ) 
  }
}