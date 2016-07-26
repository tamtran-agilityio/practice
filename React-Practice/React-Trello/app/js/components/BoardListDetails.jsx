import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import Board from './Board';
import {addBoard, startBoard} from '../actions/Action';
import CardList from '../containers/CardList';
import AddComment from '../containers/AddComment';

class BoardListDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    console.log("this.props AAA", this.props);
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
              <AddComment memberId= {this.props.memberId}/>
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