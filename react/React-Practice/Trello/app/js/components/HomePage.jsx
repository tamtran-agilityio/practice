import React, {PropTypes, Component } from 'react';
import ListBoard from '../containers/ListBoard';

class HomePage extends Component {
  render() {
    return (
      <div className="content">
        <div className="member-boards-view">
          <ListBoard showCreateBoard={this.props.showCreateBoard}/>
        </div>
      </div>
    )
  }
}

export default HomePage
