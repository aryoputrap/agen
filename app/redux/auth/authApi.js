import {api} from '../../config/Api';

export const loginApi = payload => api.post('/Api/login', payload);

// new
export const referalApi = payload =>
  api.post('/api/apotik/submit-referal/', payload);
export const otpApi = payload => api.post('/api/apotik/submit-otp/', payload);
export const otpResendApi = payload =>
  api.post('/api/apotik/resend-otp/', payload);
export const createIdApi = payload =>
  api.post('/api/apotik/submit-id/', payload);
export const registerApi = payload =>
  api.post('/api/apotik/register/', payload);
