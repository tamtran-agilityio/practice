import expect from 'expect'
import reducer from '../../app/js/reducers/Board'
import * as types from '../../app/js/constants/actionTypes'

describe('Board reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([
      {
        text: 'Use Redux',
        start: false,
        id: 0
      }
    ])
  })
})