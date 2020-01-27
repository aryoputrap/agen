import {takeLatest, put, call} from 'redux-saga/effects';
import {LOGIN, LOGOUT} from './authConstant';
// import axios from 'axios';

import {
  login,
  loginSuccess,
  loginFailed,
  logout,
  logoutSuccess,
  logoutFailed,
} from './authAction';
// import {loginApi} from './authApi';
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
  payload.config = error.config;
  return payload;
}

function* sagaLogin(user) {
  try {
    const response = yield call(login, user);
    console.log(response);
    yield put({type: 'LOGIN_SUCCESS'});
    yield put(loginSuccess(response.data));
  } catch (error) {
    console.log(error);
    yield put(loginFailed(axiosErrorToPayload(error)));
  }
}
function* sagaLogout() {
  try {
    const result = yield call(logout);
    yield put(logoutSuccess(result));
  } catch (error) {
    console.log(error);
    yield put(logoutFailed({code: error.code, message: error.message}));
  }
}

export default [takeLatest(LOGIN, sagaLogin), takeLatest(LOGOUT, sagaLogout)];
