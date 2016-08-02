import { connect } from 'react-redux';
import { } from '../actions/Action';
import ListComment from '../components/ListComment';

const getMember = (comments, memberParamId) => {
  comments = JSON.parse(localStorage.getItem("comment") || '[]');
  let arr: Array<any> = [];
  comments.map( (comment) => {
    if (parseInt(comment.memberId) === parseInt(memberParamId)) {
      arr.push(comment);
    }
  })
  return arr;
}

const mapStateToProps = (state, ownProps) => {
  return {
    comments: getMember(state.comments, state.rootReducer.comment.memberId)
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
)(ListComment)