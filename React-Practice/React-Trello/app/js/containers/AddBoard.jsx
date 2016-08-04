import {connect} from 'react-redux';
import {showCreateBoard, hideCreateBoard, addBoard} from '../actions/Action';
import AddBoard from '../components/AddBoard';

const mapStateToProps = (state) => {
  console.log("SSSSSSSSSSSSSSSSS", state);
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
      dispatch(showCreateBoard(true))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBoard);
