import {api} from '../../config/Api';
export const loginApi = payload => api.post('/Api/login', payload);
