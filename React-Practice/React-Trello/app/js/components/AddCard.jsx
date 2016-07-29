import React, {PropTypes, Component} from 'react';

class AddCard extends Component {
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

  onSelectAddCard(direction) {
    this.props.onSelectAddCard(direction);
  }

  outSideAddCard(direction) {
    this.props.outSideAddCard(direction);
  }

  render() {
    let enableClass = !this.props.state.boards.board.showFrom ? '' : 'show-add-list';
    let disable =`${enableClass} add-list-card`;
    return (
      <div className={disable}>
        <form onSubmit={this.addCardItem}>
          <span className="placeholder"> Add a list… </span>
            <input
              onClick={this.onSelectAddCard.bind(this)}
              type="text"
              className="form-input input-lg"
              placeholder="Add a list"
              ref="keywords"
              />
            <div className="list-add-controls">
              <button className="create-card" type="submit"> Save </button>
              <a href="javascript:void(0)" 
                onClick={this.outSideAddCard.bind(this, false)}
                className="icon-close">X</a>
            </div>
          </form>
      </div>
    )
  }
}

AddCard.propTypes = {
  addCardItem: PropTypes.func.isRequired,
  onSelectAddCard: PropTypes.func.isRequired,
  outSideAddCard: PropTypes.func.isRequired
}

export default AddCard