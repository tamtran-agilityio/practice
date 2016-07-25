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

  render() {
    return (
      <div className="add-list-card">
        <form onSubmit={this.addCardItem}>
          <span className="placeholder"> Add a list… </span>
            <input
              type="text"
              className="form-input input-lg"
              placeholder="What are you organzing?"
              ref="keywords"
              />
            <div className="list-add-controls">
              <button className="create-card" type="submit"> Save </button>
              <a href="#" className="icon-close">X</a>
            </div>
          </form>
      </div>
    )
  }
}

Card.propTypes = {
  addCardItem: PropTypes.func.isRequired
}

export default Card