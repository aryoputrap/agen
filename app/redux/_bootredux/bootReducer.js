import {combineReducers} from 'redux';
// import {mainReducers} from '../main/mainReducer';
import {authReducers} from '../auth/authReducer';
// import {authReducers, sessionReducers} from '../auth/authReducer';

const bootstrapReducers = combineReducers({
  // main: mainReducers,
  // session: sessionReducers,
  auth: authReducers,
});

export default bootstrapReducers;
