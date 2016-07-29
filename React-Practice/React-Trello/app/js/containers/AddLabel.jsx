import {connect} from 'react-redux';
import {showCreateComment, hideCreateComment} from '../actions/Action';
import AddLabel from '../components/AddLabel';

const mapStateToProps = (state) => {
  return { state };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClosePopupComment: (direction) => {
      
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddLabel);
