import { connect } from 'react-redux';
import { } from '../actions/Action';
import ListComment from '../components/ListComment';

const getMember = (comments, memberParamId) => {
  comments = JSON.parse(localStorage.getItem("comment") || '[]');
  console.log("SSSSS", comments);
  let arr: Array<any> = [];
  comments.map( (comment) => {
    console.log("comment", comment);
    if (parseInt(comment.memberId) === parseInt(memberParamId)) {
      arr.push(comment);
    }
  })
  return arr;
}

const mapStateToProps = (state, ownProps) => {
  console.log("state list" , state,"state list 111",  ownProps);
  return {
    // comments: getMember(state.comments, 1)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickMember: (direction) => {
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListComment)