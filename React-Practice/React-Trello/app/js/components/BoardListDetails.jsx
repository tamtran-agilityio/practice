import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import Board from './Board';
import {addBoard, startBoard} from '../actions/BoardAction';

class BoardListDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    return (
      <div className="content-board">
        <div className="board-wrapper">
          <div className="board-main-content">
            {props.params.id}
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(BoardListDetails);