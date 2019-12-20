import {combineReducers} from 'redux';
import {authReducers} from '../auth/authReducer';

const bootstrapReducers = combineReducers({
  auth: authReducers,
});

export default bootstrapReducers;
