import * as TodoAction from '../actions/action';

const initialState = 'SHOW_ALL';

export function filterReducer (state = initialState, action) {
  switch (action.type) {
    case TodoAction.SET_CURRENT_FILTER:
      return action.filter;
    case TodoAction.ADD_TODO:
      return state;
    default:
      return state;
  }
}