import { SIGN_IN, SIGN_OUT } from './userConstant';

const initialState = localStorage.getItem('userState') ? {
  ...JSON.parse(localStorage.getItem('userState')),
  isSignedIn: true
} : {
  email: '',
  username: '',
  token: '',
  isSignedIn: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case SIGN_IN:
      localStorage.setItem('userState', JSON.stringify(action.state));
      return {
        ...state,
        email: action.state.email,
        username: action.state.username,
        token: action.state.token,
        isSignedIn: true
      }

    case SIGN_OUT:
      localStorage.removeItem('userState');
      return {
        email: '',
        username: '',
        token: '',
        isSignedIn: false
      }

    default:
      return state
  }
}

export default userReducer;
