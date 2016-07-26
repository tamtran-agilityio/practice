import { connect } from 'react-redux';
import { } from '../actions/Action';
import CardList from '../components/CardList';

const getCard = (cards, boardParamId) => {
  cards = JSON.parse(localStorage.getItem("card") || '[]');
  let arr: Array<any> = [];
  cards.map( (card) => {
    if (parseInt(card.boardId) === parseInt(boardParamId)) {
      arr.push(card);
    }
  })
  return arr;
}

const mapStateToProps = (state, ownProps) => {
  return {
    cards: getCard(state.cards, ownProps.boardId)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList)