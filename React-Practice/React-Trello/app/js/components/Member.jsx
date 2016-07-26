import React, {PropTypes} from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

const Member = ({ onClickMember, text, memberId }) => (
  <li className="card-member-item" key={memberId}>
    <a href="javascript:void(0)" className="link-item" onClickMember={onClickMember}>
        <div className="card-member-title">
          {text}
      </div>
    </a>
  </li>
)

Member.propTypes = {
  text: PropTypes.string.isRequired,
  memberId: PropTypes.number.isRequired
}

export default Member