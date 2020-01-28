import {apiauth} from '../_bootredux/bootApi';
export const loginApi = payload => apiauth.post('/login', payload);
export const logoutApi = payload => apiauth.post('/logout', payload);
