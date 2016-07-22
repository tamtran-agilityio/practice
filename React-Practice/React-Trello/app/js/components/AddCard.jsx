import React, {PropTypes, Component } from 'react';

class Card extends Component {
  constructor(props){
    super(props);
  }

  addCardItem(direction) {
    this.props.addCardItem(direction);
  }

  render() {
    return (
      <div className="add-list-card">
        <form onSubmit={this.addCardItem}>
            <label>Title</label>
            <input
              type="text"
              className="form-input input-lg"
              placeholder="What are you organzing?"
              ref="keyword"
              />
            <button className="create-board" type="submit"> Save </button>
          </form>
      </div>
    )
  }
}

Card.propTypes = {
  addCardItem: PropTypes.func.isRequired
}

export default Card