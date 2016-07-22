import {connect} from 'react-redux';
import {showCreateBoard, hideCreateBoard, addBoard} from '../actions/Action';
import AddBoard from '../components/AddBoard';

const mapStateToProps = (state) => {
  return { state };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBoardItem: (keyword) => {
      dispatch(addBoard(keyword));
    },

    handleClosePopup: (direction) => {
      dispatch(hideCreateBoard());
    },

    onClickShowPopup: (direction) => {
      if (direction === true) {
        dispatch(showCreateBoard());
      } else {
        dispatch(hideCreateBoard());
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBoard);
