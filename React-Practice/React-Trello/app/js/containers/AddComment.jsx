import {connect} from 'react-redux';
import {showCreateComment, hideCreateComment, addComment} from '../actions/Action';
import AddComment from '../components/AddComment';

const mapStateToProps = (state) => {
  return { state };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCommentItem: (keyword) => {
      dispatch(addComment(keyword));
    },

    handleClosePopupComment: (direction) => {
      dispatch(hideCreateComment());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
