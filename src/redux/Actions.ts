import { LOGIN, LOGOUT } from "./ReduxTypes";

export const userLogin = (email: string) => {
  return {
    type: LOGIN,
    payload: email,
  };
};

export const userLogout = {
  type: LOGOUT,
};
