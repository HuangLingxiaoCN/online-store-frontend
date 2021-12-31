import Cookies from 'js-cookie'

import {
  LOGIN,
  LOGOUT,
} from './Types'

const initialState = {
  isLoggedIn: Cookies.get('jwt') ? true : false
}

export default function reducerFunction(state = initialState, action: any) {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true
      }
    
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      }

    default:
      return state
  }
}

