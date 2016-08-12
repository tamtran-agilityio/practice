import React, {Component, PropTypes}from 'react';
import ReactDOM from 'react-dom';
import {toMonthAndYearString} from '../helpers/DateUtilities';
import WeekContent from './WeekContent';
import Month from '../month/Month';

export default class Week extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: this.props.dayCurrent
    }
  }
  
  move(view, isForward) {
    this.setState({
      view: view,
      enabled: false
    });
  }

  enable() {
    this.setState({ 
      enabled: true 
    });
  }

  nextMonth(event) {
    event.preventDefault();
    let view = this.state.view;
    view.setMonth(view.getMonth() + 1);
    this.move(view, true);
  }

  preMonth(event) {
    event.preventDefault();
    let view = this.state.view;
      view.setMonth(view.getMonth() - 1);
    this.move(view, false);
  }

  onSelect(day) {
    this.props.onSelect(day)
  }

  render() {
    return (
      <div className="modal-picker">
        <div className="date-picker">
          <div className="month-of-year">
            <div className="pre-month"
              onClick= {this.preMonth.bind(this)}>
            </div>
            <div className="title-month">{toMonthAndYearString(this.state.view)}</div>
            <div className="next-month"
              onClick= {this.nextMonth.bind(this)}>
            </div>
          </div>
        </div>
        <div className='week-header'>
          <span className="week-title">Mon</span>
          <span className="week-title">Tue</span>
          <span className="week-title">Wed</span>
          <span className="week-title">Thu</span>
          <span className="week-title">Fri</span>
          <span className="week-title">Sat</span>
          <span className="week-title">Sun</span>
        </div>
        <Month
          dayCurrent ={this.state.view}
          onSelect={this.onSelect.bind(this)}
        />
      </div>
    ) 
  }
}
