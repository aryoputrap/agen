import * as AUTH from './authConstant';
import {combineReducers} from 'redux';

const rootReducer = (
  state = {
    token: {},
    loading: true,
    error: null,
  },
  action,
) => {
  switch (action.type) {
    case 'GET_TOKEN':
      return {...state, token: action.token};
    case 'SAVE_TOKEN':
      return {...state, token: action.token};
    case 'REMOVE_TOKEN':
      return {...state, token: action.token};
    case 'LOADING':
      return {...state, loading: action.isLoading};
    case 'ERROR':
      return {...state, error: action.error};
    default:
      return state;
  }
};

export default combineReducers({
  token: rootReducer,
});

// const authInitialState = {
//   otpToken: '',
//   otpPhone: '',
//   createIDToken: '',
//   loginError: null,
//   registerError: null,
//   referalError: null,
//   otpError: null,
//   otpResendError: null,
//   createIDError: null,
//   action: '',
// };
const authLogin = {
  username: '',
  password: '',
  versi: '1.0.0',
  latitude: '',
  longitude: '',
  accuracy: '2.0',
  loginError: null,
  action: '',
};

export const authReducers = (state = authLogin, action) => {
  switch (action.type) {
    case AUTH.LOGIN:
      return {
        ...state,
        action: action.type,
      };
    case AUTH.LOGIN_SUCCESS:
      return {
        ...state,
        action: action.type,
      };
    case AUTH.LOGIN_FAILED:
      return {
        ...state,
        action: action.type,
      };
    case AUTH.LOGOUT:
      return {
        ...state,
        action: action.type,
      };
    case AUTH.LOGOUT_SUCCESS:
      return {
        ...state,
        action: action.type,
      };
    case AUTH.LOGOUT_FAILED:
      return {
        ...state,
        action: action.type,
      };
    default:
      return state;
  }
};

const sessionInitialState = {
  userData: {
    id: '',
    name: '',
    token: '',
    refreshToken: '',
  },
  isSeeLanding: 0,
  lang: 'en-EN',
  action: '',
};

export const sessionReducers = (state = sessionInitialState, action) => {
  switch (action.type) {
    case AUTH.SET_AUTH:
      return {
        ...state,
        userData: action.payload.userData,
        action: action.type,
      };
    case AUTH.CLEAR_AUTH:
      return {
        ...state,
        userData: {
          id: '',
          name: '',
          email: '',
          token: '',
          refreshToken: '',
        },
        action: action.type,
      };
    case AUTH.SET_SEE_LANDING:
      return {
        ...state,
        isSeeLanding: 1,
        action: action.type,
      };
    default:
      return state;
  }
};
