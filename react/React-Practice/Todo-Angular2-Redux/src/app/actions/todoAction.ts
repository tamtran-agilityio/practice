import {actionTypes} from '../constants/actionTypes';
import {TodoCollection} from '../services/collection'; 



export class TodoActions {
  constructor() {
  }
  
  addTodo(text, id) {
    return {
      type: actionTypes.ADD_TODO,
      id: id,
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
  
  completeAll(checked) {
    return {
      type: actionTypes.COMPLETE_ALL,
      checked: checked
    };
  }

  clearComplete() {
    return {
      type: actionTypes.CLEAR_COMPLETED
    };
  }
}
