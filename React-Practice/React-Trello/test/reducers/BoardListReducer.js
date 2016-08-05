import {expect, assert } from 'chai';
import sinon from 'sinon';
import rootReducer from '../../app/js/reducers/Index';
import board from '../../app/js/reducers/Board';
import * as actionTypes from '../../app/js/constants/actionTypes';

describe('Board reducer', () => {
  it('should return the initial state all app', () => {
    expect(
      rootReducer(undefined, {})
    ).to.deep.equal(
      {
        board: {
          boardId: '' ,
          keyword: '' ,
          showCreateBoard: false,
          start: false,
          text: '' 
        },
        card: {
          boardId: '' ,
          commentId: '',
          keyword: '' ,
          memberId: '' ,
          showAddLabel: false,
          showAddMember: false,
          showCreateBoard: false,
          showCreateComment: false,
          showForm: false,
          text: '' 
        },
        comment: {
          commentId: '',
          keyword: '' ,
          memberId: '' ,
          showAddLabel: false,
          showCreateComment: false,
          text: '' 
        },
        label: {
          keyword: '' ,
          memberId: '' ,
          showAddLabel: false,
          showCreateComment: false,
          start: false,
          text: '' 
        },
        member: {
          keyword: '' ,
          memberId: '' ,
          showAddMember: false,
          text: '' 
        }
      }
    )
  });

  it('should return the initial state board', () => {
    expect(
      board(undefined, {})
    ).to.deep.equal({
      boardId: '' ,
      keyword: '' ,
      showCreateBoard: false,
      start: false,
      text: ''
    })
  });

  it('should edit board', () => {
    expect(
      board(undefined, {
        type: actionTypes.SELECT_START,
        boardId: 1,
        start: false
      })
    ).to.be.empty;
  });
  it('should handle ADD_BOARD', () => {
    expect(
      board([], {
        type: actionTypes.ADD_BOARD,
        text: 'Run the tests'
      })
    ).to.deep.equal(
      {
        boardId: 1,
        start: false,
        text: 'Run the tests'
      }
    )
  });

  it('should handle EDIT_BOARD', () => {
    expect(
      board([], {
        type: actionTypes.EDIT_BOARD,
        text: 'Run the tests'
      })
    ).to.deep.equal(
      {
        text: 'Run the tests'
      }
    )
  });
  it('should handle SHOW_CREATE_BOARD', () => {
    expect(
      board([], {
        type: actionTypes.SHOW_CREATE_BOARD,
        boardId: 1
      })
    ).to.deep.equal(
      {
        showCreateBoard: true,
        boardId: 2
      }
    )
  });
  it('should handle HIDE_CREATE_BOARD', () => {
    expect(
      board([], {
        type: actionTypes.HIDE_CREATE_BOARD,
      })
    ).to.deep.equal(
      {
        showCreateBoard: false
      }
    )
  });
});