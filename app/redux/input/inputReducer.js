import * as AUTH from './inputConstant';

// getDataTable = async () => {
//     const tmpTbl = await AsyncStorage.getItem('noTbl')
//     await this.setState({
//       noTbl: tmpTbl
//     })
//   }

const inputFlag = {
  fmcg: 1,
  nama_toko: '',
  no_aplikasi: '',
  ket_akusisi: '',
  ket2_akusisi: '',
  ket_lain: '',
  fintech: '',
  plafond: '',
  hp: 0,
  kota: '',
  provinsi: '',
  distributor: '',
  pjp: '',
  sales: '',
  jenis_toko: '',
  ukuran: '',
  lokasi: '',
  plang: '',
  kulkas: '',
  parkir: '',
  note_akusisi: null,
  agent_akusisi: null,
  is_register: 1,
  foto_luar: null,
  foto_lain: '',
  foto_lain2: '',
  //UPDATE
  id: null,
  le_code: '',
  ket_aktivasi: '',
  note_aktivasi: '',
  agent_aktivasi: '',
  latitude: '',
  longitude: '',
  accuracy: '',
  foto_ktp: '',
  foto_selfie: '',
  foto_dalam: '',
  action: '',
};

export const inputReducers = (state = inputFlag, action) => {
  switch (action.type) {
    case AUTH.FLAG1:
      return {
        ...state,
        action: action.type,
      };
    case AUTH.FLAG6:
      return {
        ...state,
        action: action.type,
      };
    case AUTH.FLAG3:
      return {
        ...state,
        action: action.type,
      };
    case AUTH.SEND_SUCCESS:
      return {
        ...state,
        action: action.type,
      };
    case AUTH.SEND_FAILED:
      return {
        ...state,
        action: action.type,
      };
    case AUTH.PHOTO_SUCCESS:
      return {
        ...state,
        action: action.type,
      };
    default:
      return state;
  }
};
