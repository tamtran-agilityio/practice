import {TodoActions} from '../actions/todoAction';
import {TodoCollection} from '../services/collection';

const todoCollection = new TodoCollection();
const initialState = {
  todos: todoCollection.getTodos(),
  currentFilter: 'SHOW_ALL',
  count: todoCollection.countTodo()
}

export function todoReducer(state = initialState, action) {

  switch (action.type) {

    case 'ADD_TODO':
      return {
        todos: state.todos.concat({
          id: action.id,
          text: action.text,
          completed: action.completed
        }),
        currentFilter: state.currentFilter,
        count: countTodo(state.todos, action) + 1
      };
    case 'EDIT_TODO':
      return {
        todos: editTodo(state.todos, action),
        currentFilter: state.currentFilter,
        count: countTodo(state.todos, action)
      };
    case 'TOGGLE_TODO':
      return {
        todos: toggleTodo(state.todos, action),
        currentFilter: state.currentFilter,
        count: countTodo(state.todos, action)
      };
    case 'REMOVE_TODO':
      return {
        todos: state.todos.filter(todo => todo.id !== action.id),
        currentFilter: state.currentFilter,
        count: countTodo(state.todos, action)
      };
    case 'SET_CURRENT_FILTER':
      return { 
        todos: state.todos.map(todo => todo),
        currentFilter: action.filter,
        count: countTodo(state.todos, action)
      };
    case 'CLEAR_COMPLETED':
      return {
        todos: state.todos.filter(todo => todo.completed !== true),
        currentFilter: state.currentFilter,
        count: countTodo(state.todos, action)
      }
    case 'COMPLETE_ALL':
      let countItem = 0;
      if (action.checked === true) {
        countItem = 0;
      } else {
        countItem = state.todos.length;
      }
      return {
        todos: completeAllTodo(state.todos, action.checked),
        currentFilter: state.currentFilter,
        count: countItem
      }
    default:
      return state;
  }
};

function countTodo(todos, action) {
  let countItem = 0;
  toggleTodo(todos, action).map(todo => {
    if (todo.completed === false) {
      countItem ++;
    }
  });
  return countItem;
}

function editTodo(todos, action) {
  //map returns new array
  return todos.map(todo => {
    //skip other items
    if (todo.id !== action.id)
      return todo;
    //toggle
    return {
      id: todo.id,
      text: action.text,
      completed: todo.completed
    };
  });
}

function toggleTodo(todos, action){
  //map returns new array
  return todos.map(todo => {
    //skip other items
    if (todo.id !== action.id)
      return todo;
    //toggle
    return {
      id: todo.id,
      text: todo.text,
      completed: !todo.completed
    };
  });
}

function completeAllTodo(todos, checked) {
  //map returns new array
  return todos.map(todo => {
    //toggle all
    return {
      id: todo.id,
      text: todo.text,
      completed: checked
    };
  });
}