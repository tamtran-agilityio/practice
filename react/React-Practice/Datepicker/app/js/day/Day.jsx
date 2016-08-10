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
          onClick={this.show}
        >
          {this.props.dayCurrent}
        </span>
      </div>
    ) 
  }
}