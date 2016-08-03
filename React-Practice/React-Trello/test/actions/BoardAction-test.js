import * as BoardListAction from '../../app/js/actions/Action';
import * as actionTypes from '../../app/js/constants/actionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { expect } from 'chai';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('Board list action', () => {
  let data = {
      boardId: 1,
      start: false,
      text: 'test Board'
    },
    dataNew = {
      boardId: 1,
      start: false,
      text: 'new text'
    }
  
  afterEach(() => {
    nock.cleanAll()
  });

  it('should create an action add board', () => {
    
    const expectedAction = {
      type: 'ADD_BOARD',
      boardId: data.boardId,
      start: data.start,
      text: data.text
    }

    // Add new a data
    expect(BoardListAction.addBoard(data.text, data.start, data.boardId)).to.deep.equal(expectedAction)
  });

  it('should edit action board', () => {
    const expectedAction = {
      type: 'EDIT_BOARD',
      boardId: data.boardId,
      text: data.text
    }

    // Edit a data
    expect(BoardListAction.editBoard(data.boardId, data.text)).to.deep.equal(expectedAction)
  });

  it('should select start board', () => {
    const expectedAction = {
      type: 'SELECT_START',
      boardId: data.boardId,
      start: data.start
    }
    // Select Start
    expect(BoardListAction.startBoard(data.boardId, data.start)).to.deep.equal(expectedAction)
  });

  it('should select board', () => {
    const expectedAction = {
      type: 'SELECT_BOARD',
      boardId: data.boardId
    }
    // select board
    expect(BoardListAction.selectBoard(dataNew.boardId)).to.deep.equal(expectedAction)
  });

  // show popup add board
  it('should show pop up create board', () => {
    expect(BoardListAction.showCreateBoard()).to.deep.equal({
      type: 'SHOW_CREATE_BOARD'
    });
  });

  // hide popup add board
  it('should hide pop up create board', () => {
    expect(BoardListAction.hideCreateBoard()).to.deep.equal({
      type: 'HIDE_CREATE_BOARD'
    });
  });

  let card = {
      boardId: 1,
      cardId: 1,
      text: 'test Board'
    },
    newCard = {
      boardId: 1,
      cardId: 1,
      text: 'new text'
    }

  it('should create an action add card', () => {
    
    const expectedAction = {
      type: 'ADD_CARD',
      boardId: card.boardId,
      cardId: card.cardId,
      text: card.text
    }

    // Add new a card
    expect(BoardListAction.addCard(card.text, card.boardId, card.cardId)).to.deep.equal(expectedAction)
  });

  it('should an action edit card', () => {
    
    const expectedAction = {
      type: 'EDIT_CARD',
      cardId: card.cardId,
      text: card.text
    }

    // Add new a card
    expect(BoardListAction.editCard(card.text, card.cardId)).to.deep.equal(expectedAction)
  });

  it('should show form add card member', () => {
    const expectedAction = {
      type: 'LISTS_SHOW_FORM',
      show: true
    }
    // Active form add card member
    expect(BoardListAction.showForm(true)).to.deep.equal(expectedAction);
  });

  it('should show form add card member', () => {
    const expectedAction = {
      type: 'LISTS_HIDE_FORM',
      hide: false
    }
    // Not active form add card member
    expect(BoardListAction.hideForm(false)).to.deep.equal(expectedAction);
  });

  let member = {
      memberId: 1,
      text: 'Test member'
    }

  it('should select member card for add comment', () => {
    const expectedAction = {
      type: 'SELECT_MEMBER',
      memberId: member.memberId
    }
    // Not active form add card member
    expect(BoardListAction.selectMember(member.memberId)).to.deep.equal(expectedAction);
  });

  let comment = {
    memberId: 1,
    text: 'Content comment',
    commentId: 1
  }

  it('should action add comment', () => {
    const expectedAction = {
      type: 'ADD_COMMENT',
      memberId: member.memberId,
      text: comment.text,
      commentId: comment.commentId
    }
    // Not active form add card member
    expect(BoardListAction.addComment(member.memberId, comment.text, comment.commentId)).to.deep.equal(expectedAction);
  });

  it('should action active form add member', () => {
    const expectedAction = {
      type: 'LISTS_SHOW_FORM_MEMBER',
      show: true
    }

    expect(BoardListAction.showAddMember(true)).to.deep.equal(expectedAction);
  });

  it('should action hide form add member', () => {
    const expectedAction = {
      type: 'LISTS_HIDE_FORM_MEMBER',
      hide: false
    }

    expect(BoardListAction.hideAddMember(false)).to.deep.equal(expectedAction);
  });

  it('should action show popup comment', () => {
    const expectedAction = {
      type: 'SHOW_CREATE_COMMENT',
      memberId: member.memberId
    }

    expect(BoardListAction.showCreateComment(member.memberId)).to.deep.equal(expectedAction);
  });

  it('should action show popup label', () => {
    const expectedAction = {
      type: 'SHOW_CREATE_LABEL',
    }

    expect(BoardListAction.showAddLabel(true)).to.deep.equal(expectedAction);
  })
})
