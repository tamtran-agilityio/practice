import {expect} from 'chai';
import reducer from '../../app/js/reducers/Index';
import board from '../../app/js/reducers/Board';
import * as actionTypes from '../../app/js/constants/actionTypes';

describe('Board reducer', () => {
  it('should return the initial state all app', () => {
    expect(
      reducer(undefined, {})
    ).to.deep.equal(
      {
        board: {
          boardId: '' ,
          isProcessing: false,
          keyword: '' ,
          showCreateBoard: false,
          start: false,
          text: '' 
        },
        card: {
          boardId: '' ,
          commentId: '',
          isProcessing: false,
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
          isProcessing: false,
          keyword: '' ,
          memberId: '' ,
          showAddLabel: false,
          showCreateComment: false,
          text: '' 
        },
        label: {
          isProcessing: false,
          keyword: '' ,
          memberId: '' ,
          showAddLabel: false,
          showCreateComment: false,
          start: false,
          text: '' 
        },
        member: {
          isProcessing: false,
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
      isProcessing: false,
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
        boardId: '',
        start: false
      })
    ).to.be.empty;
  });
})