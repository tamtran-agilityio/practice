import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import Board from './Board';
import {addBoard, startBoard} from '../actions/Action';
import AddCard from '../containers/AddCard';

class BoardListDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    console.log("SSSSSSS11", props);
    return (
      <div className="content-board">
        <div className="board-wrapper">
          <div className="board-main-content">
            <div className="board-header">
              <h2 className="board-title">
                {props.params.id}
              </h2>
            </div>
            <div className="card-content">
              <AddCard/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(BoardListDetails);