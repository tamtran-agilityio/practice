import React, {PropTypes, Component} from 'react';
import AddMember from '../containers/AddMember';
import ListMember from '../containers/ListMember';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="list-wrapper" key={this.props.cardId}>
        <div className="list">
          <div className="list-header">
            {this.props.text}
          </div>
          <div className="">
            <ListMember cardId = {this.props.cardId}/>
            <AddMember cardId = {this.props.cardId}/>
          </div>
        </div>
      </li>
    );
  }
}

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  cardId: PropTypes.number.isRequired
}

export default Card
