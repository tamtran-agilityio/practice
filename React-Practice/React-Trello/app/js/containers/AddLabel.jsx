import {connect} from 'react-redux';
import {showAddLabel, hideAddLabel} from '../actions/Action';
import AddLabel from '../components/AddLabel';

const mapStateToProps = (state) => {
  return { state };
}

const mapDispatchToProps = (dispatch) => {
  return {
    hidePopupLabel: (direction) => {
      dispatch(hideAddLabel())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddLabel);
