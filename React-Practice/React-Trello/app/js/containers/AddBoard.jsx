import React from 'react';
import {connect} from 'react-redux';
import {addBoard} from '../actions/BoardAction';

let AddBoard = ({dispatch}) => {
  let input
  return (
    <div>
      <form onSubmit={ e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return 
        }
        dispatch(addBoard(input.value))
          input.value =''
        }}>
        <input ref={ node => {
          input = node
        }}/>
        <button type="submit">Add Board </button>
      </form>
    </div>
  )
}

AddBoard = connect()(AddBoard)

export default AddBoard
