import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

export const BASE_URL = 'http://support.tokopandai.id:3003/Api/';
export const CREDEN = 'dG9rb3BhbmRhaS5pZDp0MGtPcEBOZEAhMTIzNDU2Nzg=';
export const headerlogin = {
  Authorization: 'Basic ' + CREDEN,
  'Content-Type': 'application/json',
  'x-api-key': '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
};
export const apilogin = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    Authorization: 'Basic ' + CREDEN,
    'Content-Type': 'application/json',
    'x-api-key': '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
  },
});
export const RESPONSE_STATUS = {
  SUCCESS: 200,
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  FORBIDDEN: 403,
  INTERNAL_SERVER_ERROR: 500,
};
export const GEOCODE_API = 'AIzaSyAbMMtW8XHvw2JrSThcqxxFseCXA3RErtY';
export const TOKEN = async () => {
  await AsyncStorage.getItem('token');
  return Promise;
};
