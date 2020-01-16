import {all} from 'redux-saga/effects';
import auth from '../auth/authSagas';
import main from '../main/mainSagas';
// import purchase from '../modules/purchase/purchaseSagas';

function* bootstrapSagas() {
  yield all([...auth, ...main]);
}

export default bootstrapSagas;
