import {apiauth} from '../_bootredux/bootApi';
export const loginApi = payload => apiauth.post('Api/login', payload);
export const logoutApi = payload => apiauth.post('/Api/logout', payload);
