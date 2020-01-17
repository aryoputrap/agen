import {takeLatest, put, call} from 'redux-saga/effects';
import auth from '@react-native-firebase/auth';
import {
  LOGIN,
  REFERAL,
  OTP,
  REGISTER,
  CREATEID,
  LOGOUT,
  OTPRESEND,
} from './authConstant';
import {
  loginFailed,
  loginSuccess,
  referalFailed,
  referalSuccess,
  otpSuccess,
  otpFailed,
  registerSuccess,
  registerFailed,
  createIDSuccess,
  createIDFailed,
  logoutSuccess,
  logoutFailed,
  otpResendSuccess,
  otpResendFailed,
} from './authActions';
import {
  referalApi,
  registerApi,
  otpApi,
  createIdApi,
  otpResendApi,
} from './authApi';
// import {RESPONSE_STATUS} from '../../utils/constants';

function axiosErrorToPayload(error) {
  const payload = {};
  if (error.response) {
    payload.data = error.response.data;
    payload.status = error.response.status;
    payload.headers = error.response.headers;
  } else if (error.request) {
    payload.request = error.request;
  } else {
    payload.message = error.message;
  }
  // payload.config = error.config;
  return payload;
}
function* sagaLogin(params) {
  try {
    // console.log(params.payload);
    const result = yield call(
      [auth(), 'signInWithEmailAndPassword'],
      params.payload.email,
      params.payload.password,
    );
    yield put(loginSuccess(result));
    console.log(result);
  } catch (error) {
    console.log(error);
    yield put(loginFailed({code: error.code, message: error.message}));
  }
}
function* sagaLogout() {
  try {
    const result = yield call([auth(), 'signOut']);
    yield put(logoutSuccess(result));
  } catch (error) {
    console.log(error);
    yield put(logoutFailed({code: error.code, message: error.message}));
  }
}

function* sagaReferal(params) {
  try {
    const response = yield call(referalApi, params.payload);
    console.log(response);
    yield put(referalSuccess(response.data));
  } catch (error) {
    // console.log(error);
    yield put(referalFailed(axiosErrorToPayload(error)));
  }
}

function* sagaOtp(params) {
  try {
    const response = yield call(otpApi, params.payload);
    // console.log(response);
    yield put(otpSuccess(response.data));
  } catch (error) {
    // console.log(error);
    yield put(otpFailed(axiosErrorToPayload(error)));
  }
}

function* sagaResendOtp(params) {
  try {
    const response = yield call(otpResendApi, params.payload);
    console.log(response);
    yield put(otpResendSuccess(response.data));
  } catch (error) {
    console.log(error);
    yield put(otpResendFailed(axiosErrorToPayload(error)));
  }
}

function* sagaRegister(params) {
  try {
    console.log(params);
    const response = yield call(registerApi, params.payload);
    console.log(response);
    yield put(registerSuccess(response.data));
  } catch (error) {
    console.log(error);
    yield put(registerFailed(error));
  }
}

function* sagaCreateID(params) {
  try {
    const response = yield call(createIdApi, params.payload);
    console.log(response);
    yield put(createIDSuccess(response.data));
  } catch (error) {
    console.log(error);
    yield put(createIDFailed(axiosErrorToPayload(error)));
  }
}

export default [
  takeLatest(LOGIN, sagaLogin),
  takeLatest(REFERAL, sagaReferal),
  takeLatest(REGISTER, sagaRegister),
  takeLatest(OTP, sagaOtp),
  takeLatest(OTPRESEND, sagaResendOtp),
  takeLatest(CREATEID, sagaCreateID),
  takeLatest(LOGOUT, sagaLogout),
];
