import {SET_LOADING, SET_URL_MODAL} from './bootConstants';

export const setLoading = payload => ({type: SET_LOADING, payload});
export const setUrlModal = payload => ({type: SET_URL_MODAL, payload});
