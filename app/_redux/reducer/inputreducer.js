import * as AUTH from '../../redux/auth/authConstant';

const authLogin = {
  id: null,
  username: '',
  password: '',
  versi: '1.0.0',
  latitude: '',
  longitude: '',
  accuracy: '4',
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
    case AUTH.PIN:
      return {
        ...state,
        action: action.type,
      };
    default:
      return state;
  }
};
