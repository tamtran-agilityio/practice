import React, {PropTypes, Component} from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

class Board extends Component {
  constructor(props) {
    super(props);
    this.onSelectStart = this.onSelectStart.bind(this);
  }

  onSelectStart(event) {
    event.preventDefault();
    console.log("Event", event);
  }
  render() {
    return (
      <li className="section-list-item" key={this.props.boardId}>
        <Link to={`/board/${this.props.boardId}`}>
            <div className="board-tile-details">
              <div className="board-tile-details-name">
                {this.props.text}
              </div>
            </div>
            <span className="board-tile-options" onClick={this.onSelectStart.bind(this)}>
              <i className="fa fa-star-o icon-start"></i>
            </span>
        </Link>
      </li>
    )
  }
}

Board.propTypes = {
  onSelectStart: PropTypes.func,
  start: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  boardId: PropTypes.number.isRequired
}

export default Board
