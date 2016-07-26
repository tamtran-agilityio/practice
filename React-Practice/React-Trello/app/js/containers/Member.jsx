import { connect } from 'react-redux';
import { showCreateComment } from '../actions/Action';
import Member from '../components/Member';

const mapStateToProps = (state, ownProps) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log("direction dispatch Member", dispatch);
  return {
    onClickMember: (direction) => {
      console.log("direction", direction);
      dispatch(showCreateComment())
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Member)