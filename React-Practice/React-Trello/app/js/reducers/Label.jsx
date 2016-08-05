import * as actionTypes from '../constants/actionTypes';

function getLabes() {
  let labelItems = [
    {'labelId':1, 'labelColor':'#61bd4f', 'active':false},
    {'labelId':2, 'labelColor':'#f2d600', 'active':false},
    {'labelId':3, 'labelColor':'#ffab4a', 'active':false},
    {'labelId':4, 'labelColor':'#eb5a46', 'active':false},
    {'labelId':5, 'labelColor':'#c377e0', 'active':false},
    {'labelId':6, 'labelColor':'#0079bf', 'active':false}
  ];
  let labelComment = localStorage.getItem("label");
  if (labelComment == null) {
    localStorage.setItem('label', JSON.stringify(labelItems));
  }
}

export default function label(state = {
  memberId: '',
  text: '',
  start: false,
  keyword:'',
  showCreateComment: false,
  showAddLabel: false
}, action) {
  console.info('card state', state);
  console.info('card action', action);
  getLabes();
  switch (action.type) {
    case 'SHOW_CREATE_LABEL':
      console.log("this state @@@@",action);
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