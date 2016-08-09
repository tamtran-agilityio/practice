import { connect } from 'react-redux';
import { showCreateComment, addComment} from '../actions/Action';
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
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Member)