import axios from 'axios';
import {BASE_URL, CREDEN} from '../Api';
export const apiauth = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    Authorization: 'Basic ' + CREDEN,
    'Content-Type': 'application/json',
    'x-api-key': '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
  },
});

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5IjpbMTQsImFrdXNpc2kiLDNdLCJpYXQiOjE1ODA0NDA0MzEsImV4cCI6MTU4MDQ2OTIzMX0.g8_Zp2DaAvyZywVMqe2uncH5oqN28WJ-JxFCEdiXUH0';
export const apicom = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    Authorization: 'Bearer ' + token,
    'Content-Type': 'application/json',
    'x-api-key': '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
  },
});
