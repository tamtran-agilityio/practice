import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {clone} from '../helpers/DateUtilities';

class Day extends Component {
  constructor(props) {
    super(props);
  }

  getDayCurrent() {
    let dayCurrented = new Date();
    return dayCurrented.getDate();
  }

  onSelect(event) {
    event.preventDefault();
    this.props.onSelect(this.props);
  }

  render() {
    let currentTime = this.getDayCurrent();
    return (
      <div className={(currentTime === this.props.dayCurrent) ? "date-item current": "date-item"}
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