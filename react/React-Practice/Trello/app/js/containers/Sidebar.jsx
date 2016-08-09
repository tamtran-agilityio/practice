import {connect} from 'react-redux';
import {showAddLabel, hideAddLabel, addBoard} from '../actions/Action';
import Sidebar from '../components/Sidebar';

const mapStateToProps = (state) => {
  return { state };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickPopupLabel: (direction) => {
      dispatch(showAddLabel(true))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
