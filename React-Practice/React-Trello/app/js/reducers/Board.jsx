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

function updateMember(memberParam: Member){
  let memberId;
  let persistedMember = JSON.parse(localStorage.getItem('member') || '[]');
  let found = false;
  persistedMember.forEach( (member: any, idx: number) => {
    if (board.memberId === memberParam.memberId){
      persistedMember[idx] = memberParam;
      found = true;
    }
  });
  if (!found){
    persistedMember.push(memberParam);
  }

  // save to localstorage
  localStorage.setItem('member', JSON.stringify(persistedMember));
  return Promise.resolve(persistedMember);
}

function updateComment(commentParam: Member){
  let commentId;
  let persistedComment = JSON.parse(localStorage.getItem('comment') || '[]');
  let found = false;
  persistedComment.forEach( (comment: any, idx: number) => {
    if (board.commentId ===commentParam.commentId){
      persistedComment[idx] =commentParam;
      found = true;
    }
  });
  if (!found){
    persistedComment.push(commentParam);
  }

  // save to localstorage
  localStorage.setItem('comment', JSON.stringify(persistedComment));
  return Promise.resolve(persistedComment);
}

function board(state = {
  boardId: '',
  commentId: '',
  memberId: '',
  text: '',
  start: false,
  isProcessing: false,
  keyword:'',
  showCreateBoard: false,
  showCreateComment: false
} , action) {
  console.info('state aaa', state);
  console.info('action aaa', action);
  switch (action.type) {
    case 'ADD_BOARD':
      let getListBoard = JSON.parse(localStorage.getItem("board") || '[]');
      // Get id by value max
      let id = getListBoard.length + 1;
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

    case 'ADD_MEMBER':
      let getListMember = JSON.parse(localStorage.getItem("member") || '[]');
      // Get id by value max
      let memberId = getListMember.length + 1;

      let newMember = {
        cardId: action.cardId,
        memberId: memberId,
        text: action.text
      }
      updateMember(newMember);

      return {
        cardId: action.cardId,
        memberId: memberId,
        text: action.text
      }
      break;

    case 'SHOW_CREATE_COMMENT':
      return { 
        showCreateComment: true,
        memberId: action.memberId
      }

    case 'HIDE_CREATE_COMMENT':     
      return {
        showCreateComment: false
      }

    case 'ADD_COMMENT':
      let getListComment = JSON.parse(localStorage.getItem("comment") || '[]');
      // Get id by value max
      let commentId = getListComment.length + 1;

      let newComment = {
        memberId: action.memberId,
        commentId: commentId,
        text: action.text
      }
      updateComment(newComment);

      return {
        showCreateComment: true,
        memberId: action.memberId,
        commentId: action.commentId,
        text: action.text
      }

    default:
      return state
  }
}

const reducers = {
  board
};

export default combineReducers(reducers);

