import {connect} from 'react-redux';
import {addMember} from '../actions/Action';
import AddMember from '../components/AddMember';

const mapStateToProps = (state) => {
  console.log("state add addMember", state);
  return { state };
}

const mapDispatchToProps = (dispatch) => {
  console.log("state add addMember", dispatch);
  return {
    addMemberItem: (keywords, cardId) => {
      dispatch(addMember(keywords, cardId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMember);