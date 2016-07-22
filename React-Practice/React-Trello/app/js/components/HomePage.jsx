import React, {PropTypes, Component } from 'react';
import BoardList from '../containers/BoardList';

class HomePage extends Component {
  render() {
    return (
      <div className="content">
        <div className="member-boards-view">
          <BoardList showCreateBoard={this.props.showCreateBoard}/>
        </div>
      </div>
    )
  }
}

export default HomePage
