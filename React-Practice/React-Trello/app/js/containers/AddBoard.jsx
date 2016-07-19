import React from 'react';
import {connect} from 'react-redux';
import {addBoard} from '../actions/BoardAction';
import Modal, {closeStyle} from './Popup';

class AddBoard extends React.Component{
  constructor(){
    super()
    this.state = {};
  }

  show() {
    this.setState({show: true})
  }

  close() {
    this.setState({show: false})
  }

  render(){
    let input;
    let { dispatch } = this.props;
    return (
      <div>
      <a onClick={this.show.bind(this)}>Open Modal</a>
        <Modal className="modal-content"
        closeOnOuterClick={true}
        show={this.state.show}
        onClose={this.close.bind(this)}
        transitionSpeed={1000}>

        <a key="close" className="close" onClick={this.close.bind(this)}>X</a>
        <div className="pop-over-header">
          <div className="pop-over-header-title">Create Board</div>
        </div>
        <div className="pop-over-content">
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
        </div>
        </Modal>
      </div>
    ) 
  }
}

AddBoard = connect()(AddBoard)

export default AddBoard