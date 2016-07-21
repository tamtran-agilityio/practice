import {connect} from 'react-redux';
import {showCreateBoard, hideCreateBoard, addBoard} from '../actions/Action';
import Modal, {closeStyle} from './Popup';
import HeaderPage from '../components/HeaderPage';

function mapStateToProps(state) {
  const props = {};
  return props;
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: (direction) => {
      console.log("direction", direction);
      if (direction === true) {
        dispatch(showCreateBoard());
      }
    },

    onClickShowPopup: (direction) => {
      console.log("AAAAAAAAA", direction);
      dispatch(showCreateBoard());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderPage);