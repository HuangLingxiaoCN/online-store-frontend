export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export type RootState = {
  isLoggedIn: Boolean,
  email: String,
}

export type ActionType = {
  type: string,
  payload: string
}