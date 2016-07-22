import React, {PropTypes, Component } from 'react';
import Board from './Board';

class BoardList extends Component {
  constructor(props){
    super(props);
  }

  onClickShowPopup(direction) {
    this.props.onClickShowPopup(direction);
  }

  render() {
    return (
      <div>
        <ul>
          { 
            this.props.boards.map(board =>
            <Board
              key = {board.boardId}
              {...board}
              onClick={() => onBoardClick(board.boardId)}
            />)
          }
          <li className="section-list-item" onClick={this.onClickShowPopup.bind(this, false)}>
            <a href="#" className="board-add">
              <span className="board-tile-details-add">
                Create new board...
              </span>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

BoardList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.shape({
    boardId: PropTypes.number.isRequired,
    start: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onClickShowPopup: PropTypes.func.isRequired
}

export default BoardList