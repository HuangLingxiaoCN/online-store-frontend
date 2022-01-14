export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export type RootState = {
  isLoggedIn: Boolean,
  email: String,
}