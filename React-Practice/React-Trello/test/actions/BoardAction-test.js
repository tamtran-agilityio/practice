import * as BoardListAction from '../../app/js/actions/Action';
import nock from 'nock';
import expect from 'expect';

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

  it('should create an action add board', () => {
    
    const expectedAction = {
      type: 'ADD_BOARD',
      boardId: data.boardId,
      start: data.start,
      text: data.text
    }

    // Add new a data
    expect(BoardListAction.addBoard(data.text, data.start, data.boardId)).toEqual(expectedAction)
  })

  it('should edit action board', () => {
    const expectedAction = {
      type: 'EDIT_BOARD',
      boardId: data.boardId,
      text: data.text
    }

    // Edit a data
    expect(BoardListAction.editBoard(data.boardId, data.text)).toEqual(expectedAction)
  })

  it('should select start board', () => {
    const expectedAction = {
      type: 'SELECT_START',
      boardId: data.boardId,
      start: data.start
    }
    // Select Start
    expect(BoardListAction.startBoard(data.boardId, data.start)).toEqual(expectedAction)
  })
})
