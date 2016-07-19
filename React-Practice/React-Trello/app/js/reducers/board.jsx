const board = (state, action) => {
  switch (action.type) {
    case 'ADD_BOARD':
      return {
        id: action.id,
        text: action.text,
        start: false
      }

    case 'START_BOARD':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        start: !state.start
      })

    default:
      return state
  }
}

const popup = (state, action) => {
  case 'SHOW_POPUP':
    return { showPopup: true, state }

  case 'CLOSE_POPUP':
    return { showPopup: false, state }
}

const boards = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOARD':
      return [
        ...state,
        board(undefined, action)
      ]

    case 'START_BOARD':
      return state.map(t =>
        board(t, action)
      )
    default:
      return state
  }
}

export default boards