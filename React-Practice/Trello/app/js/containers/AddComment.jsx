import {connect} from 'react-redux';
import {showCreateComment, hideCreateComment, addComment} from '../actions/Action';
import AddComment from '../components/AddComment';

const mapStateToProps = (state) => {
  return { state };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCommentItem: (memberId, keyword) => {
      dispatch(addComment(memberId, keyword));
    },

    handleClosePopupComment: (direction) => {
      dispatch(hideCreateComment());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
