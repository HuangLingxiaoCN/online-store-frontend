import Cookies from "js-cookie";
import axios from "axios";
import { LOGIN, LOGOUT } from "./Types";

const jwt: any = Cookies.get("jwt");

// When mounting in the application, if the jwt token exists,
// we should get the user email using axios

let userEmail = ""

// async function getUserEmail() {
//   if (!jwt) throw new Error("jwt is not found in cookies!");
//     const res: any = await axios(
//       "https://fierce-spring-store-backend.herokuapp.com/api/user/me",
//       {
//         headers: { "x-auth-token": jwt },
//       }
//     );
//     const email = res.data.email;
//     return email;
// }

// try {
//   (async function() {
//     userEmail = await getUserEmail();
//     console.log(userEmail);
//   }());
// } catch (error) {
//   //
// }

const initialState = {
  isLoggedIn: jwt ? true : false,
  email: userEmail
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
