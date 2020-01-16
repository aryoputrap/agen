// import * as AUTH from './authConstant';
import {AsyncStorage} from 'react-native';
//ACTION_TOKEN_CRUD
export const getToken = token => ({type: 'GET_TOKEN', token});
export const saveToken = token => ({type: 'SAVE_TOKEN', token});
export const removeToken = () => ({type: 'REMOVE_TOKEN'});
export const loading = bool => ({type: 'LOADING', isLoading: bool});
export const errortoken = error => ({type: 'ERROR', error});
//ASYNCSTOREAGE_TOKEN
export const saveUserToken = () => dispatch =>
  AsyncStorage.setItem('userToken', 'abc')
    .then(data => {
      dispatch(loading(false));
      dispatch(saveToken('token saved'));
      dispatch(saveToken(data));
    })
    .catch(err => {
      dispatch(loading(false));
      dispatch(errortoken(err.message || 'ERROR'));
    });

export const removeUserToken = () => dispatch =>
  AsyncStorage.removeItem('userToken')
    .then(data => {
      dispatch(loading(false));
      dispatch(removeToken(data));
    })
    .catch(err => {
      dispatch(loading(false));
      dispatch(errortoken(err.message || 'ERROR'));
    });

// export const login = payload => ({type: AUTH.LOGIN, payload});
// export const loginSuccess = payload => ({type: AUTH.LOGIN_SUCCESS, payload});
// export const loginFailed = payload => ({type: AUTH.LOGIN_FAILED, payload});
// export const setAuth = payload => ({type: AUTH.SET_AUTH, payload});
// export const createIDSetToken = payload => ({
//   type: AUTH.CREATEID_SET_TOKEN,
//   payload,
// });
// export const logout = payload => ({type: AUTH.LOGOUT, payload});
// export const logoutSuccess = payload => ({type: AUTH.LOGOUT_SUCCESS, payload});
// export const logoutFailed = payload => ({type: AUTH.LOGOUT_FAILED, payload});
