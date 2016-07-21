import React, {PropTypes, Component } from 'react';
import BoardItem from '../containers/BoardItem';

class HomePage extends Component {
  render() {
    return (
      <div className="content">
        <div className="member-boards-view">
          <BoardItem />
        </div>
      </div>
    )
  }
}

export default HomePage
