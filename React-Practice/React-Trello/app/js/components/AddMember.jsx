import React, {PropTypes, Component } from 'react';

class AddMember extends Component {
  constructor(props){
    super(props);
    this.addMemberItem = this.addMemberItem.bind(this);
    // this.props.state.boards.board.showAddMember = false;
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

  showFormMember(direction) {
    this.props.showFormMember(direction);
  }

  hideFormMember(direction) {
    this.props.hideFormMember(direction);
  }

  render() {
    return (
      <div className="add-list-member show-form">
        <a href="javascript:void(0)" 
          onClick={this.showFormMember.bind(this)}
          className={!this.props.state.boards.board.showAddMember ? '' : 'hide'}> Add a card… 
        </a>
        <div className={this.props.state.boards.board.showAddMember ? '' : 'hide'}>
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
  addMemberItem: PropTypes.func.isRequired,
  showFormMember: PropTypes.func.isRequired
}

export default AddMember