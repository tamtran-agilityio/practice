import * as actionTypes from '../constants/actionTypes';

export const addBoard = (text, start, boardId) => {
  console.log("addBoard==>", text);
  return {
    type: actionTypes.ADD_BOARD,
    text,
    start,
    boardId
  }
}

export const editBoard = (boardId, text) => {
  console.log("addBoard==>", text);
  return {
    type: actionTypes.EDIT_BOARD,
    boardId,
    text
  }
}

export const startBoard = (boardId) => {
  console.log("startBoard", boardId);
  return {
    type: actionTypes.SELECT_START,
    boardId,
    start
  }
}

export const selectBoard = (boardId) => {
  console.log("selectBoard", boardId);
  return {
    type: actionTypes.SELECT_BOARD,
    boardId
  }
}

export const showCreateBoard = () => {
  console.log("showCreateBoard", actionTypes);
  return {
    type: actionTypes.SHOW_CREATE_BOARD
  }
}

export const hideCreateBoard = () => {
  console.log("hideCreateBoard");
  return {
    type: actionTypes.HIDE_CREATE_BOARD
  }
}

export const addCard = (text, boardId, cardId) => {
  console.log("addCard", text);
  return {
    type: actionTypes.ADD_CARD,
    text,
    boardId,
    cardId
  }
}

export const editCard = (text, cardId) => {
  console.log("editCard", text);
  return {
    type: actionTypes.EDIT_CARD,
    cardId,
    text
  }
}

export const addMember = (text, cardId, memberId) => {
  console.log("addMember", text, cardId, memberId);
  return {
    type: actionTypes.ADD_MEMBER,
    text,
    memberId,
    cardId
  }
}

export const editMember = (text) => {
  console.log("editMember", text);
  return {
    type: actionTypes.EDIT_MEMBER,
    memberId,
    text
  }
}

export const selectMember = (memberId) => {
  console.log("selectMember", memberId);
  return {
    type: actionTypes.SELECT_MEMBER,
    memberId
  }
}

export const addComment = (text, commentId, memberId) => {
  console.log("addComment", text);
  return {
    type: actionTypes.ADD_COMMENT,
    text,
    commentId,
    memberId
  }
}

export const showCreateComment = (commentId) => {
  console.log("showCreateComment", commentId);
  return {
    type: actionTypes.SHOW_CREATE_COMMENT,
    commentId
  }
}

export const hideCreateComment = () => {
  console.log("hideCreateComment");
  return {
    type: actionTypes.HIDE_CREATE_COMMENT
  }
}

export const addLabel = (color) => {
  console.log("addLabel", color);
  return {
    type: actionTypes.ADD_LABEL,
    labelId,
    color
  }
}

export const selectLabel = (labelId) => {
  console.log("selectLabel", labelId);
  return {
    type: actionTypes.ADD_LABEL,
    labelId
  }
}