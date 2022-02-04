import { LOGIN, LOGOUT } from "./Types";

export const userLogin = (email: any) => {
  return {
    type: LOGIN,
    payload: email,
  };
};

export const userLogout = {
  type: LOGOUT,
};
