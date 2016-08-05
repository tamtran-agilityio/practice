import {expect, assert } from 'chai';
import sinon from 'sinon';
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
    // let mockLocalStorage = {
    //   getItem(key) {
    //     return '[]';
    //   }
    // };

    // sinon.mock(localStorage).expects('getItem').once();
    // localStorage.getItem.verify();
    function once(fn) {
      let returnValue, called = false;
      return function () {
        if (!called) {
          called = true;
          returnValue = fn.apply(this, arguments);
        }
        return returnValue;
      };
    }

    let mockLocalStorage = { 
      getItem(key) {
        return '[]';
      }
    };
    let mock = sinon.mock(localStorage);
    mock.expects("getItem").once().returns(42);

    let proxy = once(mockLocalStorage.method);

    assert.equals(proxy(), 42);
    mock.verify();

    expect(
      board(undefined, {
        type: actionTypes.SELECT_START,
        boardId: '',
        start: false
      })
    ).to.be.empty;
  });
})