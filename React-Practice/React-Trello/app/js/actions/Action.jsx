import * as actionTypes from '../constants/actionTypes';

export const addBoard = (text, start, boardId) => {
  return {
    type: actionTypes.ADD_BOARD,
    text,
    start,
    boardId
  }
}

export const editBoard = (boardId, text) => {
  return {
    type: actionTypes.EDIT_BOARD,
    boardId,
    text
  }
}

export const startBoard = (boardId, start) => {
  return {
    type: actionTypes.SELECT_START,
    boardId,
    start
  }
}

export const selectBoard = (boardId) => {
  return {
    type: actionTypes.SELECT_BOARD,
    boardId
  }
}

export const showCreateBoard = () => {
  return {
    type: actionTypes.SHOW_CREATE_BOARD
  }
}

export const hideCreateBoard = () => {
  return {
    type: actionTypes.HIDE_CREATE_BOARD
  }
}

export const addCard = (text, boardId, cardId) => {
  return {
    type: actionTypes.ADD_CARD,
    text,
    boardId,
    cardId
  }
}

export const editCard = (text, cardId) => {
  return {
    type: actionTypes.EDIT_CARD,
    cardId,
    text
  }
}

export const addMember = (text, cardId, memberId) => {
  return {
    type: actionTypes.ADD_MEMBER,
    text,
    memberId,
    cardId
  }
}

export const editMember = (text) => {
  return {
    type: actionTypes.EDIT_MEMBER,
    memberId,
    text
  }
}

export const showForm  = (show) => {
  return {
    type: actionTypes.LISTS_SHOW_FORM,
    show: show
  };
}

export const hideForm  = (hide) => {
  return {
    type: actionTypes.LISTS_HIDE_FORM,
    hide: hide
  };
}

export const selectMember = (memberId) => {
  return {
    type: actionTypes.SELECT_MEMBER,
    memberId
  }
}

export const addComment = (memberId, text, commentId ) => {
  return {
    type: actionTypes.ADD_COMMENT,
    memberId,
    text,
    commentId
  }
}

export const showAddMember  = (show, cardId) => {
  return {
    type: actionTypes.LISTS_SHOW_FORM_MEMBER,
    show,
    cardId
  };
}

export const hideAddMember  = (hide) => {
  return {
    type: actionTypes.LISTS_HIDE_FORM_MEMBER,
    hide: hide
  };
}

export const showCreateComment = (memberId) => {
  return {
    type: actionTypes.SHOW_CREATE_COMMENT,
    memberId
  }
}

export const hideCreateComment = () => {
  return {
    type: actionTypes.HIDE_CREATE_COMMENT
  }
}

export const showAddLabel  = () => {
  return {
    type: actionTypes.SHOW_CREATE_LABEL
  };
}

export const hideAddLabel  = () => {
  return {
    type: actionTypes.HIDE_CREATE_LABEL
  };
}

export const addLabel = (color, labelId) => {
  return {
    type: actionTypes.HIDE_CREATE_LABEL,
    labelId,
    color
  }
}

export const selectLabel = (labelId) => {
  return {
    type: actionTypes.ADD_LABEL,
    labelId
  }
}