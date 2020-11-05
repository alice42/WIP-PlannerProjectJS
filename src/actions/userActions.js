export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_ERROR = 'AUTH_ERROR'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

export const authRequestValid = data => ({
  type: AUTH_SUCCESS,
  data
})

export const authRequestError = message => ({
  type: AUTH_ERROR,
  message
})

export const logoutRequest = () => ({
  type: LOGOUT_SUCCESS
})
