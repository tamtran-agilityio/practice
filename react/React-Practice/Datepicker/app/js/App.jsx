import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {clone, toMonthAndYearString} from './helpers/DateUtilities';
import Week from './week/Week';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.props = new Date();
    this.state = {
      view: clone(this.props),
      active: props.active ? props.active : false,
      day: clone(this.props).getDate(),
      monthIndex: clone(this.props).getMonth() + 1,
      year: clone(this.props).getFullYear()
    }
  }

  onSelect(day) {
    this.setState({
      day: day.dayCurrent,
      monthIndex: day.monthCurrent + 1,
      year: day.year,
      active: true
    });
  }

  render() {
    console.log("SAA111", this.state );
    return (
      <div className="datepicker__input-container">
        <input
          className="input-datepicker"
          placeholder={this.state.day +'/'+ this.state.monthIndex +'/'+ this.state.year}
        />
        <Week
          dayCurrent ={this.state.view}
          onSelect={this.onSelect.bind(this)}
        />
      </div>
    )
  }
}