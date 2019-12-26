import axios from 'axios';
import {BASE_URL} from './Constant';
export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    // 'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    'x-api-key': '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
  },
});
// 1.1 API Login http://support.tokopandai.id:3003/Api/login with POST
// 1.2 API Logout http://support.tokopandai.id:3003/Api/logoutwith POST
// 1.3 API Update Password http://support.tokopandai.id:3003/Api/login with PUT
// 1.4 API Input Akusisi http://support.tokopandai.id:3003/Api/akusisi with POST
// 1.5 API Input Absen http://support.tokopandai.id:3003/Api/absen with POST
// 1.6 API GET Absen http://support.tokopandai.id:3003/Api/absen with GET
