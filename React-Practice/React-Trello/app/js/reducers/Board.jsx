  /*
   * Get data part board
   * @param  boardIdParam infor dashboard init
  */
function getBoardItem(boardIdParam) {
  let persistedBoads = JSON.parse(localStorage.getItem('board') || '[]');
  let boardRs = null;
  let board = null;
  let boardId: number;
  persistedBoads.map( function(board) {
    if (board.boardId === parseInt(boardIdParam)){
      let ret = {
        boardId: board.boardId,
        start: board.start,
        text: board.text
      }
      ret.start = board.start;
      boardRs = ret;
    }
  })
  return boardRs;
}

function updateBoard(boardParam: Board){
  let boardId;
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


import * as actionTypes from '../constants/actionTypes';

export default function board(state = {
  boardId: '',
  text: '',
  start: false,
  isProcessing: false,
  keyword:'',
  showCreateBoard: false
} , action) {
  console.info('state aaa111', state);
  console.info('action aaa1111', action);
  let localStorage = window.localStorage;
  let getListBoard = JSON.parse(localStorage.getItem("board") || '[]');
  // Get id by value max
  let boardId = getListBoard.length + 1;
  switch (action.type) {
    case 'ADD_BOARD':
      let newBoard = {
        boardId: boardId,
        start: false,
        text: action.text
      }
      updateBoard(newBoard);
      return {
        boardId: boardId,
        start: false,
        text: action.text
      }
      break;

    case 'EDIT_BOARD':
      return {
        text: action.text,
      }

    case 'SELECT_START':
      let item = getBoardItem(action.boardId);
      let changeStart = {
        boardId: item.boardId,
        text: item.text,
        start: !item.start
      }
      updateBoard(changeStart);
      return {
        boardId: item.boardId,
        text: item.text,
        start: !item.start
      }
    case 'SHOW_CREATE_BOARD':
      return { 
        showCreateBoard: true,
        boardId: boardId
      }

    case 'HIDE_CREATE_BOARD':
      return {
        showCreateBoard: false
      }

    default:
      return state
  }
}