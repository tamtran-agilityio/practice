import React, {PropTypes, Component } from 'react';

class Card extends Component {
  constructor(props){
    super(props);
    this.addCardItem = this.addCardItem.bind(this);
  }

  addCardItem(event) {
    event.preventDefault();
    const keywords = this.refs.keywords.value;
    if (!keywords.trim()) {
      return 
    }
    this.props.addCardItem(keywords, this.props.boardId);
    this.refs.keywords.value ='';
  }

  onSelectAddCard(event) {
    event.preventDefault();
    console.log("event add list", event);
  }

  render() {
    let enableClass = this.isSelect ? '' : 'show-add-list';
    let disable =`${enableClass} add-list-card`;
    return (
      <div className={disable}>
        <form onSubmit={this.addCardItem}>
          <span className="placeholder"> Add a list… </span>
            <input
              onClick={this.onSelectAddCard}
              type="text"
              className="form-input input-lg"
              placeholder="Add a list"
              ref="keywords"
              />
            <div className="list-add-controls">
              <button className="create-card" type="submit"> Save </button>
              <a href="javascript:void(0)" className="icon-close">X</a>
            </div>
          </form>
      </div>
    )
  }
}

Card.propTypes = {
  addCardItem: PropTypes.func.isRequired,
  onSelectAddCard: PropTypes.func.isRequired
}

export default Card