import { connect } from 'react-redux';
import { showCreateComment, addComment, editMember} from '../actions/Action';
import Member from '../components/Member';

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickMember: (direction) => {
      dispatch(showCreateComment(direction))
    },
    editMember: (ownProps, direction) => {
      dispatch(editMember(ownProps, direction))
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Member)