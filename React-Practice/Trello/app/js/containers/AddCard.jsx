import {connect} from 'react-redux';
import {addCard, showForm, hideForm} from '../actions/Action';
import AddCard from '../components/AddCard';

const mapStateToProps = (state) => {
  return { state };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCardItem: (keywords, boardId) => {
      dispatch(addCard(keywords, boardId));
    },
    onSelectAddCard: (direction) => {
      dispatch(showForm(true))
    },
    outSideAddCard: (direction) => {
      dispatch(hideForm(false))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);