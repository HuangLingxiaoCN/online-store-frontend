import Cookies from "js-cookie";
import { ActionType } from "./ReduxTypes";
import { LOGIN, LOGOUT } from "./ReduxTypes";

const jwt: any = Cookies.get("jwt");
let loggedIn = false;
// When mounting in the application, if the jwt token exists,
// we should get the user email using axios

// If the admin login was emitted before, set isLoggedIn to be false
if (jwt) {
  if (jwt.length === 149) {
    // Normal user logged in
    loggedIn = true;
  }
}

const initialState = {
  isLoggedIn: loggedIn,
  email: ""
};

export default function reducerFunction(state = initialState, action: ActionType) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        email: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        email: "",
      };

    default:
      return state;
  }
}
