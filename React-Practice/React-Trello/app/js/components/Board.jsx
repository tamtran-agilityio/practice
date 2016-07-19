import React, {PropTypes} from 'react';

const Board = ({ onClick, start, text }) => (
  <li onClick={onClick} className="section-list-item">
    <a href="javascript:void(0)">
      <div className="board-tile-details">
        <div className="board-tile-details-name">
          {text}
        </div>
      </div>
      <span className="board-tile-options"
        style={{ display: start ? 'block' : 'none'}}
      >
        <i className="fa fa-star-o icon-start"></i>
      </span>
    </a>
  </li>
)

Board.propTypes = {
  onClick: PropTypes.func.isRequired,
  start: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Board
