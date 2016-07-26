import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import Board from './Board';
import {addBoard, startBoard} from '../actions/Action';
import CardList from '../containers/CardList';
import AddComment from '../containers/AddComment';

class BoardListDetails extends Component {
  constructor(props) {
    super(props);
    console.log("add cooment", props);
  }

  render() {
    const props = this.props;
    return (
      <div className="card-content">
        <div className="board-wrapper">
          <div className="board-main-content">
            <div className="board-header">
              <h2 className="board-title">
                {props.params.id}
              </h2>
            </div>
            <div className="card-content">
              <CardList boardId = {props.params.id}/>
              <AddComment/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

BoardListDetails.propTypes = {
  // boardId: PropTypes.number.isRequired
}

export default connect()(BoardListDetails);