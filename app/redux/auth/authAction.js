import * as AUTH from './authConstant';
//Action Auth
export const login = payload => ({type: AUTH.LOGIN, payload});
export const loginSuccess = payload => ({type: AUTH.LOGIN_SUCCESS, payload});
export const loginFailed = payload => ({type: AUTH.LOGIN_FAILED, payload});
export const logout = payload => ({type: AUTH.LOGOUT, payload});
export const logoutSuccess = payload => ({type: AUTH.LOGOUT_SUCCESS, payload});
export const logoutFailed = payload => ({type: AUTH.LOGOUT_FAILED, payload});
