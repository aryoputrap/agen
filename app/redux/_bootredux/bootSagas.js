import {all} from 'redux-saga/effects';
import auth from '../auth/authSagas';
import input from '../input/inputSagas';
// import main from '../main/mainSagas';
// import purchase from '../modules/purchase/purchaseSagas';

function* bootstrapSagas() {
  yield all([...auth, ...input]);
}

export default bootstrapSagas;
