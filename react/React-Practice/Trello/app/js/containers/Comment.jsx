import { connect } from 'react-redux';
import { } from '../actions/Action';
import Comment from '../components/Comment';

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickComment: (direction) => {
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment)