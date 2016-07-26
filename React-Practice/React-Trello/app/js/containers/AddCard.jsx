import {connect} from 'react-redux';
import {addCard} from '../actions/Action';
import AddCard from '../components/AddCard';

const mapStateToProps = (state) => {
  return { state };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCardItem: (keywords, boardId) => {
      dispatch(addCard(keywords, boardId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);