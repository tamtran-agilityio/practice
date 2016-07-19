import 'babel-polyfill'
import React, {PropTypes} from 'react';
import Board from './Board';
import AddBoard from '../containers/AddBoard';

const BoardList = ({ boards, onBoardClick, onClickShowPopup}) => (
  <ul>
    { 
      boards.map(board =>
      <Board
        key = {board.id}
        {...board}
        onClick={() => onBoardClick(board.id)}
      />
    )}
    <li className="section-list-item" onClick={() => onClickShowPopup()}>
      <a href="#" className="board-add">
        <span className="board-tile-details-add">
          Create new board...
        </span>
      </a>
    </li>
  </ul>
)

BoardList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    start: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onBoardClick: PropTypes.func.isRequired
}

export default BoardList