import 'babel-polyfill'
import React, {PropTypes} from 'react';
import Board from './Board';

const BoardList = ({ boards, onBoardClick}) => (
  <ul>
    {boards.map(board =>
      <Board
        key = {board.id}
        {...board}
        onClick={() => onBoardClick(board.id)}
      />
    )}
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