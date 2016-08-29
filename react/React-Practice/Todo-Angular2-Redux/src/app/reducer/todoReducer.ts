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
        count: todoCollection.countTodo()
      };
    case 'TOGGLE_TODO':
      return {
        todos: toggleTodo(state.todos, action),
        currentFilter: state.currentFilter,
        count: todoCollection.countTodo()
      };
    case 'REMOVE_TODO':
      return {
        todos: state.todos.filter(todo => todo.id != action.id),
        currentFilter: state.currentFilter
      };
    case 'SET_CURRENT_FILTER':
      return { 
        todos: state.todos.map(todo => todo),
        currentFilter: action.filter
      };
    default:
      return state;
  }
};

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