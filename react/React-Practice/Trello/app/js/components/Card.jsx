import React, {PropTypes, Component} from 'react';
import AddMember from '../containers/AddMember';
import ListMember from '../containers/ListMember';

class Card extends Component {
  constructor(props) {
    super(props);
    this.editCard = this.editCard.bind(this);
  }

  editCard(event) {
    const keyword = this.refs.keywords.value;
    if (!keyword.trim()) {
      return 
    }
    this.props.editCard(keyword, this.props.cardId);
  }

  render() {
    return (
      <li className="list-wrapper" key={this.props.cardId}>
        <div className='list'>
          <div className="list-header">
            <input
              type="text"
              className="input-edit-cart"
              ref="keywords"
              placeholder=""
              defaultValue={this.props.text}
              onChange={this.editCard.bind(this)}
              />
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
  text: PropTypes.string.isRequired,
  cardId: PropTypes.number.isRequired,
  editCard: PropTypes.func.isRequired
}

export default Card
