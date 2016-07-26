import React, {PropTypes, Component} from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

class Member extends Component {
  constructor(props) {
    super(props);
  }

  onClickMember(direction) {
    console.log("direction member AAAAAA", direction);
    this.props.onClickMember(direction);
  }

  render() {
    return (
      <li className="card-member-item" key={this.props.memberId} >
        <a href="javascript:void(0)" className="link-item" 
          onClick={this.onClickMember.bind(this, this.props.memberId)}
          memberId = {this.props.memberId}
        >
            <div className="card-member-title">
              {this.props.text} { this.props.memberId }
          </div>
        </a>
      </li>
    )
  }
}

Member.propTypes = {
  onClickMember: PropTypes.func,
  text: PropTypes.string.isRequired,
  memberId: PropTypes.number.isRequired
}

export default Member