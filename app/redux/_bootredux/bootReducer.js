import {combineReducers} from 'redux';
// import {mainReducers} from '../main/mainReducer';
import {authReducers} from '../auth/authReducer';
import {inputReducers} from '../input/inputReducer';
// import {authReducers, sessionReducers} from '../auth/authReducer';

const bootstrapReducers = combineReducers({
  // main: mainReducers,
  // session: sessionReducers,
  auth: authReducers,
  input: inputReducers,
});

export default bootstrapReducers;
