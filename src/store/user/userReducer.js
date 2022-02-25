import { SIGN_IN, SIGN_OUT } from './userConstant'

const initialState = {
  email: '',
  username: '',
  token: '',
  isSignedIn: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case SIGN_IN:
      return {
        ...state,
        email: action.state.email,
        username: action.state.username,
        token: action.state.token,
        isSignedIn: true
      }

    case SIGN_OUT:
      return {
        ...initialState
      }

    default:
      return state
  }
}

export default userReducer;
