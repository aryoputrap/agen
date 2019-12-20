import axios from 'axios';
import {BASE_URL} from './Constant';
export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});
// 1.1 API Login http://support.tokopandai.id:3003/Api/login with POST
// 1.2 API Logout http://support.tokopandai.id:3003/Api/logoutwith POST
// 1.3 API Update Password http://support.tokopandai.id:3003/Api/login with PUT
// 1.4 API Input Akusisi http://support.tokopandai.id:3003/Api/akusisi with POST
// 1.5 API Input Absen http://support.tokopandai.id:3003/Api/absen with POST
// 1.6 API GET Absen http://support.tokopandai.id:3003/Api/absen with GET

// body INPUT Data
// {  "nama_toko":"",
// "le_code":"",
// "ket_akusisi":"", -> Status Toko
// "ket2_akusisi":"", -> Alasan Blm
// "ket_lain":"", -> Jika Alasan Belum -> Memilih Alasan Lainnya
// "ket_aktivasi":"",
// "fintech":"",  -> Recheck After LE CODE Push
// "plafond": "", -> Recheck After LE CODE Push
// "hp":"",
// "kota":"",
// "provinsi":"",
// "distributor":,
// "pjp":"",
// "sales":"",
// "jenis_toko":"",
// "ukuran":"",
// "lokasi":"",
// "plang":"",
// "kulkas":"",
// "parkir":"",
// "note_akusisi":"",
// "agent_akusisi":,
// "latitude":"", -> Recheck
// "longitude":"", -> Recheck
// "accuracy":"", -> Recheck
// "foto_dalam":"",
// "foto_luar":"",
// "foto_lain":"",
// "foto_ktp":"",
// "foto_selfie":"",
// "foto_lain2":"" }
