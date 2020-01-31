import {takeLatest, put, call} from 'redux-saga/effects';
import * as types from './inputConstant';
import {sendSuccess, sendFailed} from './inputAction';
import {Inputflag1, Inputflag6, Inputflag3} from './inputApi';
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

function* sagaFlag1(action) {
  try {
    const response = yield call(Inputflag1, action.payload);
    console.log(response);
    yield put({type: types.SEND_SUCCESS});
    yield put(sendSuccess(response.data));
  } catch (error) {
    console.log(error);
    console.log(error.message);
    yield put({type: types.SEND_FAILED});
    yield put(sendFailed(axiosErrorToPayload(error)));
  }
}
function* sagaFlag3(action) {
  try {
    const response = yield call(Inputflag3, action.payload);
    console.log(response);
    yield put({type: types.SEND_SUCCESS});
    yield put(sendSuccess(response.data));
  } catch (error) {
    console.log(error);
    console.log(error.message);
    yield put({type: types.SEND_FAILED});
    yield put(sendFailed(axiosErrorToPayload(error)));
  }
}

function* sagaFlag6(action) {
  try {
    const response = yield call(Inputflag6, action.payload);
    console.log(response);
    yield put({type: types.SEND_SUCCESS});
    yield put(sendSuccess(response.data));
  } catch (error) {
    console.log(error);
    console.log(error.message);
    yield put({type: types.SEND_FAILED});
    yield put(sendFailed(axiosErrorToPayload(error)));
  }
}

export default [
  takeLatest(types.FLAG1, sagaFlag1),
  takeLatest(types.FLAG3, sagaFlag3),
  takeLatest(types.FLAG6, sagaFlag6),
];
