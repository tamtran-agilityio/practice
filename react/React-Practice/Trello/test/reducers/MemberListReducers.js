import {expect, assert } from 'chai';
import sinon from 'sinon';
import rootReducer from '../../app/js/reducers/Index';
import member from '../../app/js/reducers/Member';
import * as actionTypes from '../../app/js/constants/actionTypes';

describe('Member reducer', () => {
  it('should return the initial state member', () => {
    expect(
      member(undefined, {})
    ).to.deep.equal({
      memberId: '',
      text: '',
      keyword:'',
      showAddMember: false
    })
  });

  it('should handle ADD_MEMBER', () => {
    expect(
      member([], {
        type: actionTypes.ADD_MEMBER,
        text: 'Run the tests',
        cardId: 1
      })
    ).to.deep.equal(
      {
        cardId: 1,
        memberId: 1,
        text: 'Run the tests'
      }
    )
  });

  it('should handle LISTS_SHOW_FORM_MEMBER', () => {
    expect(
      member([], {
        type: actionTypes.LISTS_SHOW_FORM_MEMBER,
      })
    ).to.deep.equal(
      {
        showAddMember: true,
        showFrom: false
      }
    )
  });
  it('should handle LISTS_HIDE_FORM_MEMBER', () => {
    expect(
      member([], {
        type: actionTypes.LISTS_HIDE_FORM_MEMBER,
      })
    ).to.deep.equal(
      {
        showAddMember: false
      }
    )
  });
});