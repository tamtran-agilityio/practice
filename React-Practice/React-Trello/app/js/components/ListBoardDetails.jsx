import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import Board from './Board';
import {addBoard, startBoard} from '../actions/Action';
import ListCard from '../containers/ListCard';
import AddComment from '../containers/AddComment';

class ListBoardDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card-content">
        <div className="board-wrapper">
          <div className="board-main-content">
            <div className="board-header">
              <h2 className="board-title">
                {this.props.params.id}
              </h2>
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
ListBoardDetails.propTypes = {
  // boardId: PropTypes.number.isRequired
}

export default connect()(ListBoardDetails);