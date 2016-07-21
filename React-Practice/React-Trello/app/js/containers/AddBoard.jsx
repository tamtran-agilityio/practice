import {connect} from 'react-redux';
import {showCreateBoard, hideCreateBoard, addBoard} from '../actions/Action';
import Modal, {closeStyle} from './Popup';
import AddBoard from '../components/AddBoard';

const mapStateToProps = (state) => {
  console.log("SSSSS", state);

  return { state };
}

const mapDispatchToProps = (dispatch) => {
  console.log("direction111111", dispatch);
  return {
    onSubmit: (keyword) => {
      dispatch(addBoard(keyword));
    },

    onClick: (direction) => {
      console.log("direction111111", direction);
      if (direction === true) {
        dispatch(hideCreateBoard());
      }
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
