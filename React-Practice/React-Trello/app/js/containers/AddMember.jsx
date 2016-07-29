import {connect} from 'react-redux';
import {addMember, showAddMember, hideAddMember} from '../actions/Action';
import AddMember from '../components/AddMember';

const mapStateToProps = (state) => {
  return { state };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMemberItem: (keywords, cardId) => {
      dispatch(addMember(keywords, cardId));
    },
    showFormMember: (direction) => {
      dispatch(showAddMember(true));
    },
    hideFormMember: (direction) => {
      dispatch(hideAddMember(false));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMember);