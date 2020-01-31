import * as AUTH from './inputConstant';
//Action Auth
export const flag1 = payload => ({type: AUTH.FLAG1, payload});
export const flag3 = payload => ({type: AUTH.FLAG3, payload});
export const flag5 = payload => ({type: AUTH.FLAG5, payload});
export const flag6 = payload => ({type: AUTH.FLAG6, payload});
export const sendSuccess = payload => ({type: AUTH.SEND_SUCCESS, payload});
export const sendFailed = payload => ({type: AUTH.SEND_FAILED, payload});
