import {connect} from 'react-redux';
import {showCreateBoard, hideCreateBoard, addCard} from '../actions/Action';
import AddCard from '../components/AddCard';

const mapStateToProps = (state) => {
  return { state };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBoardItem: (keyword) => {
      dispatch(addCard(keyword));
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

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);