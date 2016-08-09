import * as actionTypes from '../constants/actionTypes';

function getCardtem(cardIdParam) {
  let persistedBoads = JSON.parse(localStorage.getItem('card') || '[]');
  let cardRs = null;
  let card = null;
  let cardId: number;
  persistedBoads.map( function(card) {
    if (card.cardId === parseInt(cardIdParam)){
      let ret = {
        boardId: card.boardId,
        cardId: card.cardId,
        text: card.text
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

export default function card(state = {
  boardId: '',
  commentId: '',
  memberId: '',
  text: '',
  keyword:'',
  showCreateBoard: false,
  showCreateComment: false,
  showForm: false,
  showAddMember: false,
  showAddLabel: false}, action) {
  console.info('card state', state);
  console.info('card action', action);
  switch (action.type) {
    case 'ADD_CARD':
      let getListCards = JSON.parse(localStorage.getItem("card") || '[]');
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
    case 'EDIT_CARD':
    let item = getCardtem(action.cardId);
      let changeCard = {
        boardId: item.boardId,
        cardId: action.cardId,
        text: action.text
      }
      updateCard(changeCard);
      return {
        boardId: item.boardId,
        cardId: action.cardId,
        text: action.text
      }
    case 'LISTS_SHOW_FORM':
      return { 
        showFrom: true
      }

    case 'LISTS_HIDE_FORM':
      return { 
        showFrom: false
      }
    default:
      return state
  }
}