/**
 * @brief [ create reducers board ]
 * @details [ Handle action, edit, select start, show popup create board, hide popup ]
 * 
 * @param  [ state, action ]
 * @return [ board item]
 */
import { combineReducers } from 'redux';
import { Map, List} from 'immutable';
import * as actionTypes from '../constants/actionTypes';

function getBoards() {
  let board = localStorage.getItem("board");
  let temp = JSON.parse(board);
  return Promise.resolve(temp);
}

  /*
   * Get data part board
   * @param  boardIdParam infor dashboard init
  */
function getBoard(boardIdParam) {
  let persistedBoads = JSON.parse(localStorage.getItem('board') || '[]');
  let boardRs = null;
  let boardId: number;
  persistedBoads.forEach( (board: any) => {
    if (board.boardId === boardIdParam){
      let ret = new Board(board.boardTitle, board.boardId, board.cards);
      ret.start = board.start;
      boardRs = ret;
    }
  });
  return Promise.resolve(boardRs);
}

function updateBoard(boardParam: Board){
    let boardId: number;
    let persistedBoads = JSON.parse(localStorage.getItem('board') || '[]');
    let found = false;
    persistedBoads.forEach( (board: any, idx: number) => {
      if (board.boardId === boardParam.boardId){
        persistedBoads[idx] = boardParam;
        found = true;
      }
    });
    if (!found){
      persistedBoads.push(boardParam);
    }

    // save to localstorage
    localStorage.setItem('board', JSON.stringify(persistedBoads));
    return Promise.resolve(persistedBoads);
  }

function board(state = {
  boardId: '',
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
      let getListBoard = JSON.parse(localStorage.getItem("board") || '[]');
      // Get id by value max
      let id = getListBoard.length + 1;
      console.log("getListBoard", getListBoard);

      let newData = {
        boardId: id,
        start: false,
        text: action.text
      }
      updateBoard(newData);
      return {
        boardId: id,
        start: false,
        text: action.text
      }
      break;

    case 'EDIT_BOARD':
      return {
        text: action.text,
      }

    case 'SELECT_START':
      if (state.boardId !== action.boardId) {
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

const reducers = {
  board
};

export default combineReducers(reducers);

