import React, { PropTypes, Component } from 'react';
import Modal, {closeStyle} from '../containers/Popup';

class AddBoard extends Component{
  constructor(props){
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();
    const keyword = this.refs.keyword.value;
    this.props.addBoardItem(keyword);
  }

  render() {
    return (
      <div >
        <div className={this.props.state.boards.board.showCreateBoard ? 'modal-content' : 'modal-content-hide' }
        onClose={this.props.hideCreateBoard}
        transitionSpeed={1000}>

        <a key="close" className="close" onClick={this.props.hideCreateBoard}>X</a>
        <div className="pop-over-header">
          <div className="pop-over-header-title">Create Board</div>
        </div>
        <div className="pop-over-content">
          <form >
            <label>Title</label>
            <input
              type="text"
              className="form-input input-lg"
              placeholder="What are you organzing?"
              ref="keyword"
              />
            <label>Team</label>
            <p className= "content-title">
              Teams make sharing and working within a group even easier. It doesn’t look like you are a member of any teams.
            </p>
            <button className="create-board" type="submit">Add Board </button>
          </form>
        {/*
          <form onSubmit={ e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return 
            }
            dispatch(addBoard(input.value))
              input.value =''
            }}>
            <label>Title</label>
            <input ref={ node => {
              input = node
            }}/>
            <label>Team</label>
            <p className= "content-title">
              Teams make sharing and working within a group even easier. It doesn’t look like you are a member of any teams.
            </p>
            <button className="create-board" type="submit">Add Board </button>
          </form>
        */}
          
        </div>
        </div>
      </div>
    );
  }
}

AddBoard.propTypes = {
  // onClick: PropTypes.func.isRequired,
  // addBoardItem: PropTypes.func
  // ,
  // start: PropTypes.bool.isRequired,
  // text: PropTypes.string.isRequired,
  // boardId: PropTypes.number.isRequired
}

export default AddBoard