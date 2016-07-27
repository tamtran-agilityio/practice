import { connect } from 'react-redux';
import { startBoard } from '../actions/Action';
import Board from '../components/Board';

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	onClick: (direction) => {
  	  console.log("direction",direction);
      dispatch(startBoard(direction));
    }
  }
}

const ListBoardDetaisl = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

export default Board