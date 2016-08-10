import React from 'react';
import ReactDOM from 'react-dom';

export default class WeekHeader extends React.Component {
  render() {
    return (
      <div className='week-header'>
        <span className="week-title">Sun</span>
        <span className="week-title">Mon</span>
        <span className="week-title">Tue</span>
        <span className="week-title">Wed</span>
        <span className="week-title">Thu</span>
        <span className="week-title">Fri</span>
        <span className="week-title">Sat</span>
      </div>
    )
  }
};