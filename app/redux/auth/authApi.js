import {apiapiauth} from '../_bootredux/bootApi';
export const loginApi = payload => apiapiauth.post('/login', payload);
export const logoutApi = payload => apiapiauth.post('/Api/logout', payload);
