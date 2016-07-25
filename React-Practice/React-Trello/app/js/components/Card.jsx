import React, {PropTypes} from 'react';

const Card = ({text, cardId}) => (
  
  <li className="list-wrapper" key={cardId}>
    <div className="list">
      <div className="list-header">
        {text}
      </div>
      <div className="">
        Content
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
