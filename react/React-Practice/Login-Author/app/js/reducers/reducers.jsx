import { FB_LOGIN } from '../constants/ActionTypes';

const initialState = [
  {
    accessToken: null,
    isLoggedIn: false,
    isLoggedOut: true,
    userData: []
  }
]

export default function pvlogin(state = initialState, action) {

  switch (action.type) {
    case 'FB_LOGIN':
      console.log("AA", action);
      return {
        accessToken: action.authResponse.accessToken,
        isLoggedIn: true,
        isLoggedOut: false,
      }

    default:
      return state
  }
}