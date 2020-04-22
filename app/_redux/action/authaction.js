import axios from 'axios';
import Constanta from '../../_api';

export const setTransactionBiasa = data => {
  return {
    type: 'SET_TRANSACTIO_BIASA',
    payload: data,
  };
};
export const loginact = data => {
  return {
    type: 'ADD_TRANSACTION',
    payload: axios({
      url: `${Constanta}/login`,
      method: 'POST',
      data: data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }),
  };
};
