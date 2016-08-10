import React, {PropTypes, Component } from 'react';
import Card from '../containers/Card';
import AddCard from '../containers/AddCard';

class ListCard extends Component {
  constructor(props){
    super(props);
  }

  onSelectAddCard(event) {
  }

  render() {
    return (
      <ul className="list-content" 
        onClick= {this.onSelectAddCard.bind(this)} 
        boardIdDetails = {this.props.boardId}>
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

ListCard.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    cardId: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default ListCard