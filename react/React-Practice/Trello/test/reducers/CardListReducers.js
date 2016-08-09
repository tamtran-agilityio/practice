import {expect, assert } from 'chai';
import sinon from 'sinon';
import rootReducer from '../../app/js/reducers/Index';
import card from '../../app/js/reducers/Card';
import * as actionTypes from '../../app/js/constants/actionTypes';

describe('Card reducer', () => {
  it('should return the initial state card', () => {
    expect(
      card(undefined, {})
    ).to.deep.equal({
      boardId: '',
      commentId: '',
      memberId: '',
      text: '',
      keyword:'',
      showCreateBoard: false,
      showCreateComment: false,
      showForm: false,
      showAddMember: false,
      showAddLabel: false
    })
  });

  it('should handle ADD_CARD', () => {
    expect(
      card([], {
        type: actionTypes.ADD_CARD,
        text: 'Run the tests',
        boardId: 1
      })
    ).to.deep.equal(
      {
        boardId: 1,
        cardId: 1,
        text: 'Run the tests'
      }
    )
  });

  it('should handle LISTS_SHOW_FORM', () => {
    expect(
      card([], {
        type: actionTypes.LISTS_SHOW_FORM,
      })
    ).to.deep.equal(
      {
        showFrom: true
      }
    )
  });
  it('should handle LISTS_HIDE_FORM', () => {
    expect(
      card([], {
        type: actionTypes.LISTS_HIDE_FORM,
      })
    ).to.deep.equal(
      {
        showFrom: false
      }
    )
  });
});