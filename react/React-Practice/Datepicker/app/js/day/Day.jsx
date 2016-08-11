import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

export default class Day extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="date-item">
        <span
          className="date-picker-trigger"
        >
          {this.props.dayCurrent}
        </span>
      </div>
    ) 
  }
}