import { connect } from 'react-redux';
import { } from '../actions/Action';
import ListMember from '../components/ListMember';

const getMember = (members, cardParamId) => {
  members = JSON.parse(localStorage.getItem("member") || '[]');
  let arr: Array<any> = [];
  members.map( (member) => {
    if (parseInt(member.cardId) === parseInt(cardParamId)) {
      arr.push(member);
    }
  })
  return arr;
}

const mapStateToProps = (state, ownProps) => {
  return {
    state,
    members: getMember(state.members, ownProps.cardId)
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
)(ListMember)