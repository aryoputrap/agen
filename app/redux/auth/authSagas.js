import {takeLatest, put, call} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import * as type from './authConstant';
import {
  // login,
  loginSuccess,
  loginFailed,
  // logout,
  logoutSuccess,
  // logoutFailed,
  // pin,
} from './authAction';
import {loginApi, logoutApi} from './authApi';
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

function* sagaLogin(action) {
  try {
    const response = yield call(loginApi, action.payload);
    console.log(response.data.data);
    const token = response.data.data.token;
    const firstlogin = response.data.data.first_login;
    const pinx = response.data.data.first_pin;
    console.log(pinx, firstlogin);
    // if (pinx === 0) {
    //   yield put({type: type.PIN});
    //   yield put(pin(pinx));
    // } else {
    //   yield AsyncStorage.setItem('token', token);
    //   yield put({type: type.LOGIN_SUCCESS});
    //   yield put(loginSuccess(response.data));
    // }
    yield AsyncStorage.setItem('token', token);
    yield put({type: type.LOGIN_SUCCESS});
    yield put(loginSuccess(response.data));
  } catch (error) {
    console.log(error);
    if (error === 'Networ Error') {
      yield put({type: type.LOGIN_FAILED_NETWORK});
    } else {
      yield put({type: type.LOGIN_FAILED});
    }
    yield put(loginFailed(axiosErrorToPayload(error)));
  }
}

function* sagaLogout(action) {
  try {
    const result = yield call(logoutApi, action.payload);
    yield AsyncStorage.removeItem('token');
    yield put({type: type.LOGOUT_SUCCESS});
    yield put(logoutSuccess(result));
  } catch (error) {
    console.log(error);
    if (error === 'Network Error') {
      yield put({type: type.LOGOUT_FAILED_NETWORK});
    } else {
      yield put({type: type.LOGOUT_FAILED});
    }
    // yield put(logoutFailed({code: error.code, message: error.message}));
  }
}

function* sagaVa(action) {
  try {
    const result = yield call(logoutApi, action.payload);
    yield AsyncStorage.removeItem('token');
    yield put({type: type.LOGOUT_SUCCESS});
    yield put(logoutSuccess(result));
  } catch (error) {
    console.log(error);
    if (error === 'Network Error') {
      yield put({type: type.LOGOUT_FAILED_NETWORK});
    } else {
      yield put({type: type.LOGOUT_FAILED});
    }
    // yield put(logoutFailed({code: error.code, message: error.message}));
  }
}

export default [
  takeLatest(type.LOGIN, sagaLogin),
  takeLatest(type.PIN, sagaLogin),
  takeLatest(type.LOGOUT, sagaLogout),
  takeLatest(type.LOGOUT, sagaVa),
];
