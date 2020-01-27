import * as AUTH from './authConstant';

const authLogin = {
  username: '',
  password: '',
  versi: '',
  latitude: '',
  longitude: '',
  accuracy: '',
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

// const sessionInitialState = {
//   userData: {
//     id: '',
//     name: '',
//     token: '',
//     refreshToken: '',
//   },
//   isSeeLanding: 0,
//   lang: 'en-EN',
//   action: '',
// };

// export const sessionReducers = (state = sessionInitialState, action) => {
//   switch (action.type) {
//     case AUTH.SET_AUTH:
//       return {
//         ...state,
//         userData: action.payload.userData,
//         action: action.type,
//       };
//     case AUTH.CLEAR_AUTH:
//       return {
//         ...state,
//         userData: {
//           id: '',
//           name: '',
//           email: '',
//           token: '',
//           refreshToken: '',
//         },
//         action: action.type,
//       };
//     case AUTH.SET_SEE_LANDING:
//       return {
//         ...state,
//         isSeeLanding: 1,
//         action: action.type,
//       };
//     default:
//       return state;
//   }
// };
