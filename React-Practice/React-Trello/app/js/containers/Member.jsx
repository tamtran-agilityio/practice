import { connect } from 'react-redux';
import { showCreateComment } from '../actions/Action';
import Member from '../components/Member';

const mapStateToProps = (state, ownProps) => {
  console.log("SSSSSSSSSSSSSSSSSSSSS=+++++111", state);
  console.log("SSSSSSSSSSSSSSSSSSSSS=+++++11122", ownProps);
  return {
    ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickMember: (direction) => {
      dispatch(showCreateComment())
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Member)