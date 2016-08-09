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
    onSelectStart: (direction) => {
      dispatch(startBoard(direction));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)
