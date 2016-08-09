import {connect} from 'react-redux';
import {showCreateBoard, hideCreateBoard, addBoard} from '../actions/Action';
import HeaderPage from '../components/HeaderPage';

function mapStateToProps(state) {
  const props = {};
  return props;
}

function mapDispatchToProps(dispatch) {
  return {
    onClickShowPopup: (direction) => {
      dispatch(showCreateBoard());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderPage);