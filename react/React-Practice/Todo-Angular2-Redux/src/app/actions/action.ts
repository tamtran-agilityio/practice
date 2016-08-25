// import {actionTypes as types} from '../constants/actionTypes';

export const actionTypes = {
  ADD_TODO: 'ADD_TODO',
  EDIT_TODO: 'EDIT_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  SET_CURRENT_FILTER: 'SET_CURRENT_FILTER',
  COMPLETE_ALL: 'COMPLETE_ALL',
  CLEAR_COMPLETED: 'CLEAR_COMPLETED'
}

export class TodoActions {
  constructor() {
  }
  
  addTodo(text) { 
    return {
      type: actionTypes.ADD_TODO,
      text: text,
      completed: false
    };
  }
  
  editTodo(id, text) {
    return {
      type: actionTypes.EDIT_TODO,
      id: id,
      text: text
    };
  }

  toggleTodo(id){
    return {
      type: actionTypes.TOGGLE_TODO,
      id: id
    };
  }
  
  removeTodo(id){
    return {
      type: actionTypes.REMOVE_TODO,
      id: id
    };    
  }
  
  setCurrentFilter(filter){
    return {
      type: actionTypes.SET_CURRENT_FILTER,
      filter: filter
    };
  }
  
  completeAll() {
    return {
      type: actionTypes.COMPLETE_ALL
    };
  }

  clearComplete() {
    return {
      type: actionTypes.CLEAR_COMPLETED
    };
  }
}
