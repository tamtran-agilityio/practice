import {expect, assert } from 'chai';
import sinon from 'sinon';
import rootReducer from '../../app/js/reducers/Index';
import comment from '../../app/js/reducers/Comment';
import * as actionTypes from '../../app/js/constants/actionTypes';

describe('Member reducer', () => {
  it('should return the initial state member', () => {
    expect(
      comment(undefined, {})
    ).to.deep.equal({
      commentId: '',
      memberId: '',
      text: '',
      keyword:'',
      showCreateComment: false,
      showAddLabel: false
    })
  });

  it('should handle ADD_COMMENT', () => {
    expect(
      comment([], {
        type: actionTypes.ADD_COMMENT,
        text: 'Run the tests',
        memberId: 1
      })
    ).to.deep.equal(
      {
        showCreateComment: true,
        memberId: undefined,
        commentId: undefined,
        text: 'Run the tests',
        showAddLabel: false
      }
    )
  });

  it('should handle SHOW_CREATE_COMMENT', () => {
    expect(
      comment([], {
        type: actionTypes.SHOW_CREATE_COMMENT,
        memberId: 1,
      })
    ).to.deep.equal(
      {
        showCreateComment: true,
        memberId: 1,
        showAddLabel: false
      }
    )
  });
  it('should handle HIDE_CREATE_COMMENT', () => {
    expect(
      comment([], {
        type: actionTypes.HIDE_CREATE_COMMENT,
      })
    ).to.deep.equal(
      {
        showCreateComment: false
      }
    )
  });
});