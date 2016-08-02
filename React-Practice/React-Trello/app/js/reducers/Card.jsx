import * as actionTypes from '../constants/actionTypes';

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
  isProcessing: false,
  keyword:'',
  showCreateBoard: false,
  showCreateComment: false,
  showForm: false,
  showAddMember: false,
  showAddLabel: false}, action) {
  console.info('card state', state);
  console.info('card action', action);
  let getListCards = JSON.parse(localStorage.getItem("card") || '[]');
  let cardId = getListCards.length + 1;
  switch (action.type) {
    case 'ADD_CARD':
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