import React, {PropTypes, Component} from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active ? props.active : false,
      text: ''
    }

    // Assign all the correct event handlers.
    this.onEditMember = this.onEditMember.bind(this);
    this.editMember = this.editMember.bind(this);
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

  onEditMember(event) {
    event.preventDefault();
    this.setState({
      active: true
    });
  }

  editMember(event) {
    event.preventDefault();
    this.setState({
      active: false
    });
    const keyword = this.refs.keywords.value;
    if (!keyword.trim()) {
      return 
    }
    this.props.editMember(keyword, this.props.memberId);
  }

  render() {
    return (
      <li className="card-member-item" key={this.props.memberId} >
        <i className="fa fa-pencil list-card-operation" aria-hidden="true"
          onClick={this.onEditMember}
        ></i>
        <div className={this.state.active ? 'quick-card-editor' : 'hide'}>
          <div className="quick-card-editor-card">
            <form className="form-edit-member" onSubmit={this.editMember.bind(this)}>
              <textarea
                type="text"
                className="form-input input-lg list-card"
                ref="keywords"
                placeholder=""
                defaultValue={this.props.text}
                />
              <button className="edit-member" type="submit"> Save </button>
            </form>
          </div>
        </div>
        <a href="javascript:void(0)" className="link-item" 
          onClick={this.onClickMember.bind(this, this.props.memberId)}
          memberId = {this.props.memberId}
        >
          <div className="card-member-title">
            <h3 className="member-title-decs">{this.props.text}</h3>
          </div>
          <div className={this.totalComment(this.props.memberId) == 0 ? 'badges-hide' : 'badges'}>
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