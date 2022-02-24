import { SIGN_IN, SIGN_OUT } from './userConstant'

export const signinAction = (state) => {
  return {
    type: SIGN_IN,
    state: { ...state }
  }
}

export const signoutAction = () => {
  return {
    type: SIGN_OUT
  }
}