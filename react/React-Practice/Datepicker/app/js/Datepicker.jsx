import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import {clone, toMonthAndYearString} from './helpers/DateUtilities';
import Week from './week/Week';

class Datepicker extends Component {
  constructor(props) {
    super(props);
    this.props = new Date();
    this.state = {
      view: clone(this.props),
      active: props.active ? props.active : false,
      showModel: props.showModel ? props.showModel : false,
      day: clone(this.props).getDate(),
      monthIndex: clone(this.props).getMonth() + 1,
      year: clone(this.props).getFullYear()
    }
  }

  /**
   * @details [handle when click day of select]
   */
  onSelect(day) {
    this.setState({
      day: day.dayCurrent,
      monthIndex: day.monthCurrent + 1,
      year: day.year,
      active: true,
      showModel: false,
    });
  }

  /**
   * @details [handle show model when click input]
   * 
   * @param  [listen event when click input]
   */
  _onClickOutSide(e) {
    const components = ReactDOM.findDOMNode(this.refs.component);
    if (e.target === components ) {
      this.setState({
        showModel: true
      });
    } else {
      this.setState({
        showModel: false
      });
    }
  }

  componentDidMount() {
    document.addEventListener('click', this._onClickOutSide.bind(this), true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this._onClickOutSide.bind(this), true);
  }

  /**
   * @param  [handle show model when click pre button]
   */
  preMonth(e) {
    this.setState({
      showModel: true
    });
  }

  /**
   * @param  [handle show model when click next button]
   */
  nextMonth(e) {
    this.setState({
      showModel: true
    });
  }

  render() {
    return (
      <div className="datepicker__input-container">
        <input
          ref='component'
          className="input-datepicker"
          placeholder={this.state.day +'/'+ this.state.monthIndex +'/'+ this.state.year}
          onClick={this._onClickOutSide.bind(this)}
        />
        <div className={this.state.showModel ? 'modal-picker-active': 'hide-model'}>
          <Week
            dayCurrent ={this.state.view}
            onSelect={this.onSelect.bind(this)}
            minDate={this.props.minDay}
            maxDate={this.props.maxDay}
            preMonth={this.preMonth.bind(this)}
            nextMonth={this.nextMonth.bind(this)}
          />
        </div>
      </div>
    )
  }
}

Datepicker.propTypes = {
  minDay: PropTypes.string.isRequired,
  maxDay: PropTypes.string.isRequired
}
export default Datepicker
