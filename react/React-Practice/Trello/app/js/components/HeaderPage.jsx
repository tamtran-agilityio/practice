import React , {PropTypes, Component } from 'react';
import AddBoard from '../containers/AddBoard';
import { Router, Route, Link, browserHistory } from 'react-router';

class HeaderPage extends Component {
  constructor(props) {
    super(props);
  }

  handleShowPopup(direction) {
    this.props.onClickShowPopup(direction);
  }
  render() {
    return (
      <div className="header">
        <div className="header-boards btn-header">
          <i className="fa fa-credit-card icon-heard" aria-hidden="true"></i>
          <span className="header-btn-text"> Boards </span>
        </div>
        <div className="header-logo">
          <Link to={`/`}>
            <div className="logo-trello"></div>
          </Link>
        </div>
        <div className="header-user">
          <a href="javascript:void(0)" className="btn-header" onClick={this.handleShowPopup.bind(this, true)} >
            <i className="fa fa-plus-square fa-2x" aria-hidden="true"></i>
          </a> 
          <a href="javascript:void(0)" className="btn-header header-member">
            <div className="member">
              <span className="member-initials"> T </span>
              <span className="member-gold-badge"></span>
            </div>
            <span className="header-btn-text"> Tamtamxuan </span>
          </a>
          <AddBoard  showCreateBoard={this.props.showCreateBoard}/>
        </div>
      </div>
    )
  }
}

HeaderPage.propTypes = {
  showModal: PropTypes.func,
  onClickShowPopup: PropTypes.func
}

export default HeaderPage
