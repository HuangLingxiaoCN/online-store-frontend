import Cookies from "js-cookie";
import { LOGIN, LOGOUT } from "./Types";

const jwt: any = Cookies.get("jwt");

const initialState = {
  isLoggedIn: jwt ? true : false,
  email: '',
};

export default function reducerFunction(state = initialState, action: any) {
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
