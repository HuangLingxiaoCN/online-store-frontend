import Cookies from "js-cookie";
import axios from "axios";
import { LOGIN, LOGOUT } from "./Types";

const jwt: any = Cookies.get("jwt");

// When mounting in the application, if the jwt token exists,
// we should get the user email using axios
let userEmail = "";
if (jwt) {
  axios("https://fierce-spring-store-backend.herokuapp.com/api/user/me", {
    headers: { "x-auth-token": jwt },
  })
    .then((res) => (userEmail = res.data.email))
    .catch((err) => console.error(err));
}

const initialState = {
  isLoggedIn: jwt ? true : false,
  email: userEmail,
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
