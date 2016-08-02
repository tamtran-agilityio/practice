import React, {PropTypes, Component } from 'react';
import Board from '../containers/Board';

class ListBoard extends Component {
  constructor(props){
    super(props);
  }

  onClickShowPopup(direction) {
    console.log("direction 111", direction);
    this.props.onClickShowPopup(direction);
  }

  render() {
    let rows = [];
    return (
      <div>
        <ul className="boards-page-board-section">
          <div className="board-section-header">
            <span className="section-header-icon">
              <i className="fa fa-star-o icon-start-board" aria-hidden="true"></i>
            </span>
            <h3 className="section-header-name">Start Board</h3>
          </div>
          { 
            this.props.boards.map((board) => {
              if (board.start === true ) {
                rows.push(<Board
                  key = {board.boardId}
                  {...board}
                  onClick={() => onBoardClick(board.boardId)}
                />)
                }
              })
            }
            {rows}
        </ul>
        <ul className="boards-page-board-section">
          <div className="board-section-header">
            <span className="section-header-icon">
              <i className="fa fa-credit-card icon-start-board" aria-hidden="true"></i>
            </span>
            <h3 className="section-header-name">My Board</h3>
          </div>
          { 
            this.props.boards.map(board =>
            <Board
              key = {board.boardId}
              {...board}
              onClick={() => onBoardClick(board.boardId)}
            />)
          }
          <li className="section-list-item" onClick={this.onClickShowPopup.bind(this, false)}>
            <a href="javascript:void(0)" className="board-add">
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

ListBoard.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.shape({
    boardId: PropTypes.number.isRequired,
    start: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onClickShowPopup: PropTypes.func.isRequired
}

export default ListBoard