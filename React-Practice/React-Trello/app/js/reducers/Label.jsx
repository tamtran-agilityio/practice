import * as actionTypes from '../constants/actionTypes';

export default function label(state = {
  memberId: '',
  text: '',
  start: false,
  isProcessing: false,
  keyword:'',
  showCreateComment: false,
  showAddLabel: false
}, action) {
  console.info('card state', state);
  console.info('card action', action);
  switch (action.type) {
    case 'SHOW_CREATE_LABEL':
      return {
        showCreateComment: true,
        memberId: state.memberId,
        showAddLabel: true
      }

    case 'HIDE_CREATE_LABEL':
      return {
        showCreateComment: true,
        memberId: state.memberId,
        showAddLabel: false
      }
    default:
      return state
  }
}