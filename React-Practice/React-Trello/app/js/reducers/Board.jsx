/**
 * @brief [ create reducers board ]
 * @details [ Handle action, edit, select start, show popup create board, hide popup ]
 * 
 * @param  [ state, action ]
 * @return [ board item]
 */
import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const reducers = {
  board
};

function board(state = {
  id: '',
  text: '',
  start: false,
  isProcessing: false,
  keyword:'',
  showCreateBoard: false
} , action) {
  console.info('state', state);
  console.info('action', action);
  switch (action.type) {
    case 'ADD_BOARD':
      return {
        id: action.id,
        text: action.text,
        start: false
      }

    case 'EDIT_BOARD':
      return {
        text: action.text,
      }

    case 'SELECT_START':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        start: !state.start
      })
    case 'SHOW_CREATE_BOARD':
      return { 
        showCreateBoard: true
      }

    case 'HIDE_CREATE_BOARD':     
      return {
        showCreateBoard: false
      }

    default:
      return state
  }
}

// function showpopup(state = {
//   showCreateBoard: false
// } , action) {
//   console.log('state1111', state);
//   console.log('action1111', action);
//   switch (action.type) {
//     case 'SHOW_CREATE_BOARD':
//       console.log('11111111111111111111');
//       return { 
//         showCreateBoard: true
//       }

//     case 'HIDE_CREATE_BOARD':
//       console.log('HIDE_CREATE_BOARD`1111');
//       return {
//         showCreateBoard: false
//       }

//     default:
//       return state
//   }
// }

// const boards = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_BOARD':
//       return [
//         ...state,
//         board(undefined, action)
//       ]

//     case 'SELECT_START':
//       return state.map(start =>
//         board(start, action)
//       )
//     default:
//       return state
//   }
// }

export default combineReducers(reducers);

