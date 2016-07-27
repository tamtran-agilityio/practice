import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import Board from './Board';
import {addBoard, startBoard} from '../actions/Action';
import ListCard from '../containers/ListCard';
import AddComment from '../containers/AddComment';

class ListBoardDetails extends Component {
  constructor(props) {
    super(props);
    let boards = JSON.parse(localStorage.getItem("board") || '[]');
    let boardTitle, start;
    boards.map( (board) => {
      if (parseInt(board.boardId) === parseInt(props.params.id)) {
        this.boardTitle = board.text;
        this.start = board.start;
      }
    })
  }

  render() {
    return (
      <div className="card-content">
        <div className="board-wrapper">
          <div className="board-main-content">
            <div className="board-header">
              <h2 className="board-title">
                {this.boardTitle}
              </h2>
              <div className={this.start ? 'active' : 'none' }>
                {this.start}
                <h2> Start </h2>
              </div>
            </div>
            <div className="card-content">
              <ListCard boardId = {this.props.params.id}/>
              <AddComment memberId = {this.props} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(ListBoardDetails);