import React, {PropTypes, Component } from 'react';
import Card from './Card';
import AddCard from '../containers/AddCard';

class CardList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <ul className="list-content">
        { 
          this.props.cards.map(card =>
          <Card
            key = {card.cardId}
            {...card}
            onClick={() => onBoardClick(card.cardId)}
          />)
        }
        <li className="list-wrapper">
          <AddCard boardId = {this.props.boardId}/>
        </li>
      </ul>
    )
  }
}

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    cardId: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default CardList