import * as AUTH from './authConstant';
// import {apiauth} from '../_bootredux/bootApi';
import {BASE_URL} from '../Api';
import axios from 'axios';

// export const login = payload => ({type: AUTH.LOGIN, payload});
export const login = sendData => {
  const credentials = 'dG9rb3BhbmRhaS5pZDp0MGtPcEBOZEAhMTIzNDU2Nzg=';
  const header = {
    Authorization: 'Basic ' + credentials,
    'Content-Type': 'application/json',
    'x-api-key': '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
  };
  return {
    type: AUTH.LOGIN,
    payload: axios({
      url: `${BASE_URL}/login`,
      method: 'POST',
      data: sendData,
      headers: header,
    }),
  };
};

export const loginSuccess = payload => ({type: AUTH.LOGIN_SUCCESS, payload});
export const loginFailed = payload => ({type: AUTH.LOGIN_FAILED, payload});

export const register = payload => ({type: AUTH.REGISTER, payload});
export const registerSuccess = payload => ({
  type: AUTH.REGISTER_SUCCESS,
  payload,
});
export const registerFailed = payload => ({
  type: AUTH.REGISTER_FAILED,
  payload,
});

export const setAuth = payload => ({type: AUTH.SET_AUTH, payload});

export const referal = payload => ({type: AUTH.REFERAL, payload});
export const referalSuccess = payload => ({
  type: AUTH.REFERAL_SUCCESS,
  payload,
});
export const referalFailed = payload => ({type: AUTH.REFERAL_FAILED, payload});

export const otp = payload => ({type: AUTH.OTP, payload});
export const otpSuccess = payload => ({type: AUTH.OTP_SUCCESS, payload});
export const otpFailed = payload => ({type: AUTH.OTP_FAILED, payload});

export const otpResend = payload => ({type: AUTH.OTPRESEND, payload});
export const otpResendSuccess = payload => ({
  type: AUTH.OTPRESEND_SUCCESS,
  payload,
});
export const otpResendFailed = payload => ({
  type: AUTH.OTPRESEND_FAILED,
  payload,
});

export const createID = payload => ({type: AUTH.CREATEID, payload});
export const createIDSuccess = payload => ({
  type: AUTH.CREATEID_SUCCESS,
  payload,
});
export const createIDFailed = payload => ({
  type: AUTH.CREATEID_FAILED,
  payload,
});
export const createIDSetToken = payload => ({
  type: AUTH.CREATEID_SET_TOKEN,
  payload,
});

export const logout = payload => ({type: AUTH.LOGOUT, payload});
export const logoutSuccess = payload => ({type: AUTH.LOGOUT_SUCCESS, payload});
export const logoutFailed = payload => ({type: AUTH.LOGOUT_FAILED, payload});

// // import * as AUTH from './authConstant';
// import {AsyncStorage} from 'react-native';
// //ACTION_TOKEN_CRUD
// export const getToken = token => ({type: 'GET_TOKEN', token});
// export const saveToken = token => ({type: 'SAVE_TOKEN', token});
// export const removeToken = () => ({type: 'REMOVE_TOKEN'});
// export const loading = bool => ({type: 'LOADING', isLoading: bool});
// export const errortoken = error => ({type: 'ERROR', error});
// //ASYNCSTOREAGE_TOKEN
// export const saveUserToken = () => dispatch =>
//   AsyncStorage.setItem('userToken', 'abc')
//     .then(data => {
//       dispatch(loading(false));
//       dispatch(saveToken('token saved'));
//       dispatch(saveToken(data));
//     })
//     .catch(err => {
//       dispatch(loading(false));
//       dispatch(errortoken(err.message || 'ERROR'));
//     });

// export const removeUserToken = () => dispatch =>
//   AsyncStorage.removeItem('userToken')
//     .then(data => {
//       dispatch(loading(false));
//       dispatch(removeToken(data));
//     })
//     .catch(err => {
//       dispatch(loading(false));
//       dispatch(errortoken(err.message || 'ERROR'));
//     });

// // export const login = payload => ({type: AUTH.LOGIN, payload});
// // export const loginSuccess = payload => ({type: AUTH.LOGIN_SUCCESS, payload});
// // export const loginFailed = payload => ({type: AUTH.LOGIN_FAILED, payload});
// // export const setAuth = payload => ({type: AUTH.SET_AUTH, payload});
// // export const createIDSetToken = payload => ({
// //   type: AUTH.CREATEID_SET_TOKEN,
// //   payload,
// // });
// // export const logout = payload => ({type: AUTH.LOGOUT, payload});
// // export const logoutSuccess = payload => ({type: AUTH.LOGOUT_SUCCESS, payload});
// // export const logoutFailed = payload => ({type: AUTH.LOGOUT_FAILED, payload});
