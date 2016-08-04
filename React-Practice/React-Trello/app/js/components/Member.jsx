import React, {PropTypes, Component} from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

class Member extends Component {
  constructor(props) {
    super(props);
  }

  totalComment(commentParamId){
    let comments = JSON.parse(localStorage.getItem("comment") || '[]');
    let sum = 0;
    comments.map( (comment) => {
      if (parseInt(comment.memberId) === parseInt(commentParamId)) {
        sum = sum + 1;
      }
    })
    return sum;
  }

  onClickMember(direction) {
    this.props.onClickMember(direction);
  }

  render() {
    let showcomment = '';
    if (this.totalComment(this.props.memberId) == 0) {
      showcomment = 'badges-hide';
    } else {
      showcomment = 'badges';
    }
    return (
      <li className="card-member-item" key={this.props.memberId} >
        <a href="javascript:void(0)" className="link-item" 
          onClick={this.onClickMember.bind(this, this.props.memberId)}
          memberId = {this.props.memberId}
        >
          <div className="card-member-title">
            <h3 className="member-title-decs">{this.props.text}</h3>
          </div>
          <div className={showcomment}>
            <div className="comments">
              <span className="icon-comment">
                <i className="fa fa-comment-o" aria-hidden="true"></i>
              </span>
              <span className="badge-text">
                {this.totalComment(this.props.memberId)}
              </span>
            </div>
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