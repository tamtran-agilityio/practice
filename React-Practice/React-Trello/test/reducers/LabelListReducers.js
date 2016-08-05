import {expect, assert } from 'chai';
import sinon from 'sinon';
import rootReducer from '../../app/js/reducers/Index';
import label from '../../app/js/reducers/Label';
import * as actionTypes from '../../app/js/constants/actionTypes';

describe('Label reducer', () => {
  it('should return the initial state label', () => {
    expect(
      label(undefined, {})
    ).to.deep.equal({
      memberId: '',
      text: '',
      start: false,
      keyword:'',
      showCreateComment: false,
      showAddLabel: false
    })
  });

  it('should handle SELECT_LABEL', () => {
    expect(
      label([], {
        type: actionTypes.SELECT_LABEL,
        labelId: 1
      })
    ).to.deep.equal(
      {
        showAddLabel: true,
        labelId: 1
      }
    )
  });

  it('should handle SHOW_CREATE_LABEL', () => {
    expect(
      label([], {
        type: actionTypes.SHOW_CREATE_LABEL,
        memberId: 1
      })
    ).to.deep.equal(
      {
        showCreateComment: true,
        memberId: undefined,
        showAddLabel: true
      }
    )
  });
  it('should handle HIDE_CREATE_LABEL', () => {
    expect(
      label([], {
        type: actionTypes.HIDE_CREATE_LABEL,
      })
    ).to.deep.equal(
      {
        showCreateComment: true,
        memberId: undefined,
        showAddLabel: false
      }
    )
  });
});