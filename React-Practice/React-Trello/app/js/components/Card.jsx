import React, {PropTypes} from 'react';
import AddMember from '../containers/AddMember';
import MemberList from '../containers/MemberList';

const Card = ({text, cardId}) => (
  
  <li className="list-wrapper" key={cardId}>
    <div className="list">
      <div className="list-header">
        {text} {cardId}
      </div>
      <div className="">
        <MemberList cardId = {cardId}/>
        <AddMember cardId = {cardId}/>
      </div>
    </div>
  </li>
)

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  cardId: PropTypes.number.isRequired
}

export default Card
