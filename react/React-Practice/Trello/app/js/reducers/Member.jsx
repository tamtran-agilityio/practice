import * as actionTypes from '../constants/actionTypes';

function getMember(memberIdParam) {
  let persistedBoads = JSON.parse(localStorage.getItem('member') || '[]');
  let memberRs = null;
  let member = null;
  let memberId: number;
  persistedBoads.map( function(member) {
    if (member.memberId === parseInt(memberIdParam)){
      let ret = {
        cardId: member.cardId,
        memberId: member.memberId,
        text: member.text
      }
      memberRs = ret;
    }
  })
  return memberRs;
}

function updateMember(memberParam: Member){
  let memberId;
  let persistedMember = JSON.parse(localStorage.getItem('member') || '[]');
  let found = false;
  persistedMember.forEach( (member: any, idx: number) => {
    if (member.memberId === memberParam.memberId){
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

export default function member(state = {
  memberId: '',
  text: '',
  keyword:'',
  showAddMember: false
}, action) {
  switch (action.type) {
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
    case 'EDIT_MEMBER':
      let item = getMember(action.memberId);
      let changeMember = {
        cardId: item.cardId,
        memberId: item.memberId,
        text: action.text
      }
      updateMember(changeMember);
      return {
        cardId: item.cardId,
        text: item.text,
        start: !item.start
      }
    case 'LISTS_SHOW_FORM_MEMBER':
      return {
        showAddMember: true,
        showFrom: false
      }
    case 'LISTS_HIDE_FORM_MEMBER':
      return {
        showAddMember: false
      }
    default:
      return state
  }
}