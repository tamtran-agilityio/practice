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
        <div className="header-logo">
          <Link to={`/`}> Trello </Link>
        </div>
        <div className="header-user">
          <a href="#"  onClick={this.handleShowPopup.bind(this, true)} >
            open modal
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
