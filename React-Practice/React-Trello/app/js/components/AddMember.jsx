import React, {PropTypes, Component } from 'react';

class AddMember extends Component {
  constructor(props){
    super(props);
    this.addMemberItem = this.addMemberItem.bind(this);

    this.state = {
      active: props.active ? props.active : false
    }

    // Assign all the correct event handlers.
    this.setActive = this.setActive.bind(this);
  }

  addMemberItem(event) {
    event.preventDefault();
    const keywords = this.refs.keywords.value;
    if (!keywords.trim()) {
      return 
    }
    this.props.addMemberItem(keywords, this.props.cardId);
    this.refs.keywords.value ='';
    this.setState(
      {
        active: false
      });
  }

  hideFormMember(direction) {
    this.setState(
      {
        active: false
      });
  }

  setActive() {
    this.setState(
      {
        active: true
      });
  }

  render() {
    return (
      <div className="add-list-member show-form">
        <a href="javascript:void(0)" 
          onClick={this.setActive}
          className={!this.state.active ? '' : 'hide'}
        > Add a card… 
        </a>
        <div className={this.state.active ? '' : 'hide'}>
          <form className="form-add-member" onSubmit={this.addMemberItem}>
            <textarea
              type="text"
              className="form-input input-lg"
              ref="keywords"
              />
              <button className="create-member" type="submit"> Add </button>
              <a href="javascript:void(0)"
                onClick={this.hideFormMember.bind(this)}
                className="icon-close">X</a>
          </form>
        </div>
      </div>
    )
  }
}

AddMember.propTypes = {
  addMemberItem: PropTypes.func.isRequired
}

export default AddMember