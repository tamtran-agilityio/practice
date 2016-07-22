import React, {PropTypes} from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

const Board = ({ onClick, start, text, boardId }) => (
  
  <li className="section-list-item" key={boardId}>
    <Link to={`/board/${boardId}`}>
        <div className="board-tile-details">
          <div className="board-tile-details-name">
            {text}
          </div>
        </div>
        <span className="board-tile-options" onClick={onClick}
          style={{ display: start ? 'block' : 'none'}}
        >
          <i className="fa fa-star-o icon-start"></i>
        </span>
    </Link>
  </li>
)

Board.propTypes = {
  onClick: PropTypes.func.isRequired,
  start: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  boardId: PropTypes.number.isRequired
}

export default Board
