import React, {PropTypes, Component } from 'react';

class AddMember extends Component {
  constructor(props){
    super(props);
    this.addMemberItem = this.addMemberItem.bind(this);
  }

  addMemberItem(event) {
    event.preventDefault();
    const keywords = this.refs.keywords.value;
    if (!keywords.trim()) {
      return 
    }
    this.props.addMemberItem(keywords, this.props.cardId);
    this.refs.keywords.value ='';
  }

  render() {
    return (
      <div className="add-list-member">
        <form className="form-add-member" onSubmit={this.addMemberItem}>
          <span className="placeholder"> Add a card… </span>
            <textarea
              type="text"
              className="form-input input-lg"
              placeholder="What are you organzing?"
              ref="keywords"
              />
            <div className="list-add-controls">
              <button className="create-member" type="submit"> Add </button>
              <a href="#" className="icon-close">X</a>
            </div>
          </form>
      </div>
    )
  }
}

AddMember.propTypes = {
  addMemberItem: PropTypes.func.isRequired
}

export default AddMember