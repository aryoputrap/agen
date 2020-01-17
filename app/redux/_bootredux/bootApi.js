import axios from 'axios';
import {BASE_URL, credentials} from '../Api';
export const apiauth = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    Authorization: 'Basic ' + credentials,
    'Content-Type': 'application/json',
    'x-api-key': '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
  },
});

export const apicom = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
  },
});
