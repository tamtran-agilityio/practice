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
        text: board.text,
        cards: board.cards
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

function getCards() {
  let card = localStorage.getItem("card");
  let temp = JSON.parse(card);
  return Promise.resolve(temp);
}

function getCardItem(boardIdParam) {
  let persistedCards = JSON.parse(localStorage.getItem('card') || '[]');
  let cardRs = null;
  let card = null;
  let cardId: number;
  persistedCards.map( function(card) {
    if (card.cardId === parseInt(cardIdParam)){
      let ret = {
        cardId: card.cardId,
        start: card.start,
        text: card.text,
        cards: card.cards
      }
      ret.start = card.start;
      cardRs = ret;
    }
  })
  return cardRs;
}

function updateCard(cardParam: Card){
  let cardId;
  let persistedCards = JSON.parse(localStorage.getItem('card') || '[]');
  let found = false;
  persistedCards.forEach( (card: any, idx: number) => {
    if (card.cardId === cardParam.cardId){
      persistedCards[idx] = cardParam;
      found = true;
    }
  });
  if (!found){
    persistedCards.push(cardParam);
  }

  // save to localstorage
  localStorage.setItem('card', JSON.stringify(persistedCards));
  return Promise.resolve(persistedCards);
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

      let newBoard = {
        boardId: id,
        start: false,
        text: action.text
      }
      updateBoard(newBoard);
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

    case 'ADD_CARD':
      let getListCards = JSON.parse(localStorage.getItem("card") || '[]');
      // Get id by value max
      let cardId = getListCards.length + 1;

      let newCard = {
        boardId: action.boardId,
        cardId: cardId,
        text: action.text
      }
      updateCard(newCard);

      return {
        boardId: action.boardId,
        cardId: cardId,
        text: action.text
      }
      break;

    default:
      return state
  }
}

const reducers = {
  board
};

export default combineReducers(reducers);

