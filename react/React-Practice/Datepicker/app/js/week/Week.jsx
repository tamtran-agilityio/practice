import React, {Component, PropTypes}from 'react';
import ReactDOM from 'react-dom';
import {toMonthAndYearString} from '../helpers/DateUtilities';
import WeekContent from './WeekContent';
import Month from '../month/Month';

class Week extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: this.props.dayCurrent
    }
  }
  
  /**
   * @details [change state when click next and pre month]
   * 
   * @param w [set back value day]
   * @param d [set value active]
   */
  _move(view, isForward) {
    this.setState({
      view: view,
      enabled: false
    });
  }

  _enable() {
    this.setState({ 
      enabled: true 
    });
  }

  /**
   * @details [handle when click button next]
   * 
   * @param  [listen event when click next button]
   */
  nextMonth(event) {
    this.props.nextMonth(event);
    event.preventDefault();
    let view = this.state.view;
    view.setMonth(view.getMonth() + 1);
    this._move(view, true);
  }

  /**
   * @details [handle when click button pre]
   * 
   * @param  [listen event when click pre button]
   */

  preMonth(event) {
    this.props.preMonth(event);
    event.preventDefault();
    let view = this.state.view;
      view.setMonth(view.getMonth() - 1);
    this._move(view, false);
  }

  /**
   * @details [handle when click day of select]
   */
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
          minDate={this.props.minDate}
          maxDate={this.props.maxDate}
        />
      </div>
    ) 
  }
}

Week.propTypes = {
  onSelect: PropTypes.func.isRequired
}

export default  Week