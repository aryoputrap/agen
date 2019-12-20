import * as AUTH from './authConstant';

export const login = payload => ({type: AUTH.LOGIN, payload});
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
