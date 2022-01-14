import Cookies from 'js-cookie'

import {
  LOGIN,
  LOGOUT,
} from './Types'

const initialState = {
  isLoggedIn: Cookies.get('jwt') ? true : false,

  // Initial email is empty so refreshing the page will make email empty
  email: ''
}

export default function reducerFunction(state = initialState, action: any) {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        email: action.payload
      }
    
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        email: ''
      }

    default:
      return state
  }
}

