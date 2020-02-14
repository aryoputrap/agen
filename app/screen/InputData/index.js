import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  StatusBar,
} from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import Icon2 from 'react-native-vector-icons/dist/EvilIcons';
import AsyncStorage from '@react-native-community/async-storage';
import decode from 'jwt-decode';
import RNLocation from 'react-native-location';
import {SCLAlert, SCLAlertButton} from 'react-native-scl-alert';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
//import component
import Loading from '../../component/Loading';
//IMPORT DROPPPICKER REVISI FEBRUARI
import Dropnolimit from '../../component/Dropdown/droppicker/install/droptidakaktivasi';
//semua droppick
import Droppicker from '../../component/Dropdown/droppicker';
import Droppickeralasan from '../../component/Dropdown/droppicker/dropalasan';
import Dropfmcg from '../../component/Dropdown/droppicker/dropfmcg';
//drop_install
import Dropaktivasi from '../../component/Dropdown/droppicker/install/dropaktivasiktp';
// import Dropaktivasi_direct from '../../component/Dropdown/droppicker/install/dropaktivasiktp_direct';
import Dropdistributor from '../../component/Dropdown/droppicker/install/dropdistributor';
import Dropflag from '../../component/Dropdown/Dropflag';
import Dropinstall from '../../component/Dropdown/Dropinstall';
//droptambahan
import axios from 'axios';
// import {API_URL} from 'react-native-dotenv';
import Styles from './style';
import TextInput from '../../component/TextInput';
import HeaderComponent from '../../component/Header';
import TextinputHeader from '../../component/TextInput/TextinputHeader';
import Button from '../../component/Button';
// import Dropdown from '../../component/Dropdown';
import ImageDefault from './imagedefault';
import Modal from '../../component/Modal';
//Import Redux
import {connect} from 'react-redux';
//Import Action
import {flag1, flag3, flag5, flag6} from '../../redux/input/inputAction';
//import Constanta
import {SEND_FAILED, SEND_SUCCESS} from '../../redux/input/inputConstant';

class Inputdata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      le_code: '',
      status: '',
      errorMessage: null,
      openFlag1: false,
      openFlag2: false,
      openFlag3: false,
      openFlag4: false,
      openFlag5: false,
      openFlag6: false,
      showalert: false,
      showalert2: false,
      showalert3: false,
      showalert4: false,
      showalert5: false,
      showalert6: false,
      fotoseflie: false,
      fotoother: false,
      agent_aktivasi: 0,
      agent_akusisi: 0,
      nama_toko: '',
      latitude: '',
      longitude: '',
      accuracy: '2.0',
      ket_akusisi: '',
      sendData: {
        //Pembagian Component State
        fmcg: 13,
        nama_toko: '',
        ket_akusisi: '',
        ket2_akusisi: '',
        ket_lain: '',
        ket_aktivasi: '',
        //UPDATE BARU
        ket2_aktivasi: '',
        fintech: '',
        plafond: '',
        hp: 0,
        //Drop Down Component API DENY
        kota: '',
        provinsi: '',
        distributor: null,
        pjp: '',
        sales: '',
        jenis_toko: '',
        ukuran: '',
        lokasi: '',
        plang: '',
        kulkas: '',
        parkir: '',
        note_akusisi: '',
        is_register: 1,
        //Tambahan Input State
        akses_toko: '',
        retail_toko: '',
        luas_toko: '',
        dekat_dengan: '',
        bertemu_dengan: '',
        nama_pemilik: '',
        status_kepemilikan: '',
        kode_pos: '',
        kulkas_esKrim: '',
        etalase_toko: '',
        rak_makanan: '',
        aktifitas_limit: '',
        potensi_revisit: '',
      },
      sendDataupdate3: {
        id: null,
        nama_toko: '',
        ket_aktivasi: 'Ya',
        note_aktivasi: '',
      },
      sendDataupdate4: {
        no_aplikasi: '',
        flag: null,
        fmcg: 1,
        is_register: 1,
        agent_akusisi: 15,
        le_code: '',
        fintech: '',
        plafond: '',
        nama_toko: '',
        ket_akusisi: '',
        ket2_akusisi: '',
        ket_lain: '',
        ket_aktivasi: '',
        hp: 0,
        kota: '',
        provinsi: '',
        distributor: 13,
        pjp: '',
        sales: '',
        jenis_toko: '',
        ukuran: '',
        lokasi: '',
        plang: '',
        kulkas: '',
        parkir: '',
        note_akusisi: '',
        //Tambahan Input State
        ket2_aktivasi: '',
        akses_toko: '',
        retail_toko: '',
        luas_toko: '',
        dekat_dengan: '',
        bertemu_dengan: '',
        nama_pemilik: '',
        status_kepemilikan: '',
        kode_pos: '',
        kulkas_esKrim: '',
        etalase_toko: '',
        rak_makanan: '',
        aktifitas_limit: '',
        potensi_revisit: '',
      },
      sendDataupdate5: {
        ket_akusisi: 'Install',
        ket_aktivasi: 'Ya',
      },
      sendDataupdate6: {
        id: null,
        nama_toko: '',
        ket_akusisi: 'Install',
        ket_aktivasi: 'Ya',
        note_aktivasi: '',
      },
      error: false,
      foto: false,
      isLoading: false,
      isModalSucces: false,
      isModalFailed: false,
      modalVisible: false,
      btnfoto_dalam: false,
      btnfoto_luar: false,
      btnfoto_lain: false,
      btnfoto_ktp: false,
      btnfoto_selfie: false,
      btnfoto_lain2: false,
      // foto_dalam: this.state.foto_dalam,
      foto_dalam: '',
      // foto_luar: this.state.foto_luar,
      foto_luar: '',
      // foto_ktp: this.state.foto_ktp,
      foto_ktp: '',
      // foto_selfie: this.state.foto_selfie,
      foto_selfie: '',
      // foto_dalam: '',
      // foto_luar: '',
      // foto_ktp: '',
      // foto_selfie: '',
      foto_lain: '',
      foto_lain2: '',
    };
  }

  componentDidMount() {
    this.idagent();
    RNLocation.configure({
      distanceFilter: 5.0,
      desiredAccuracy: {
        ios: 'best',
        android: 'balancedPowerAccuracy',
      },
      androidProvider: 'auto',
      interval: 5000,
      fastestInterval: 10000,
      maxWaitTime: 5000,
    });
    RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'fine',
      },
    }).then(granted => {
      if (granted) {
        this.locationSubscription = RNLocation.subscribeToLocationUpdates(
          locations => {
            const lat = locations[0].latitude;
            const long = locations[0].longitude;
            const longitudestatic = long.toString();
            const latitudstatic = lat.toString();
            longitudestatic.longitude = long;
            latitudstatic.latitude = lat;
            this.setState({
              longitude: longitudestatic,
              latitude: latitudstatic,
            });
          },
        );
      }
    });
  }

  //--------------------------------------------- RESPONSE CODE ------------------------------------------------

  componentDidUpdate(prevProps) {
    const {action} = this.props;
    if (prevProps.action !== action) {
      switch (action) {
        case SEND_SUCCESS:
          Alert.alert('Input Mantap Sukses');
          // this.onSuccessLoginRedux();
          break;
        case SEND_FAILED:
          // this.onFailedLoginRedux();
          Alert.alert('Input Gagal');
          break;
        default:
      }
    }
  }

  onSuccessUpload() {
    this.setState({isLoading: false});
    this.dropDownAlertRef.alertWithType('success', 'Data Berhasil Input !');
    setTimeout(() => {
      this.props.navigation.navigate('StackPublic');
    }, 5000);
    // this.onSuccessLogout();
  }

  onFailedUpload() {
    this.setState({isModalFailed: false});
  }

  //---------------------------------------- FUNCTION LE CODE ----------------------------------------------------

  validationcekLECODE = () => {
    if (this.state.le_code === '' || this.state.le_code == null) {
      this.dropDownAlertRef.alertWithType(
        'error',
        'Mohon Diperiksa Kembali',
        'Data Le Code Kosong !',
      );
    } else if (this.state.le_code.length < 18) {
      this.dropDownAlertRef.alertWithType(
        'error',
        'Mohon Diperiksa Kembali',
        'Le Code Kurang dari 18 Karakter !',
      );
    } else if (this.state.le_code.length > 18) {
      this.dropDownAlertRef.alertWithType(
        'error',
        'Mohon Diperiksa Kembali',
        'Le Code Lebih dari 18 Karakter !',
      );
    } else {
      this.setState({isLoading: true});
      this.cekLECODE();
    }
  };

  idagent = async () => {
    const tokenx = await AsyncStorage.getItem('token');
    const iduser = await decode(tokenx);
    const id = iduser.body[0];
    this.setState({agent_aktivasi: id, agent_akusisi: id});
  };

  cekLECODE = async () => {
    const tokenx = await AsyncStorage.getItem('token');
    const user = {
      le_code: this.state.le_code,
    };
    console.log(user);
    const header = {
      Authorization: 'Bearer ' + tokenx,
      'Content-Type': 'application/json',
      'x-api-key':
        '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
    };
    axios({
      method: 'POST',
      url: 'http://support.tokopandai.id:3003/Api/cek_lecode',
      headers: header,
      data: user,
    })
      .then(response => {
        console.log(response);
        this.response = response.data;
        console.log(response.status);
        if (response.data.flag === 1) {
          this.setState({
            showalert: true,
            openFlag2: false,
            openFlag3: false,
            openFlag4: false,
            openFlag5: false,
            openFlag6: false,
            isLoading: false,
          });
        } else if (response.data.flag === 2) {
          this.setState({
            isLoading: false,
            showalert5: true,
            openFlag1: false,
            openFlag3: false,
            openFlag4: false,
            openFlag5: false,
          });
          if (this.state.showalert5 === true) {
            this.dropDownAlertRef.alertWithType(
              'warn',
              'Mohon diperiksa kembali !',
              response.data.message,
            );
          }
        } else if (response.data.flag === 3) {
          this.setState({
            showalert2: true,
            openFlag1: false,
            openFlag2: false,
            openFlag4: false,
            openFlag5: false,
            isLoading: false,
            sendDataupdate3: {
              id: response.data.data.id,
              ket_aktivasi: 'Ya',
              nama_toko: response.data.data.nama_toko,
              note_aktivasi: '',
            },
          });
        } else if (response.data.flag === 4) {
          this.setState({
            showalert3: true,
            openFlag1: false,
            openFlag2: false,
            openFlag5: false,
            isLoading: false,
            sendDataupdate4: {
              no_aplikasi: response.data.data.no_aplikasi,
              nama_toko: response.data.data.nama_toko,
              fintech: response.data.data.fintech,
              plafond: response.data.data.plafond,
              hp: response.data.data.hp,
              kota: response.data.data.kota,
              jenis_toko: response.data.data.jenis_toko,
              pjp: response.data.data.pjp,
              sales: response.data.data.sales,
              ukuran: response.data.data.ukuran,
              lokasi: response.data.data.lokasi,
              plang: response.data.data.plang,
              kulkas: response.data.data.kulkas,
              parkir: response.data.data.parkir,
              id: response.data.data.id,
              fmcg: 1,
              ket_akusisi: 'Install',
              is_register: 1,
              ket2_akusisi: '',
              ket_lain: '',
              ket_aktivasi: '',
              provinsi: '',
              distributor: 13,
              note_akusisi: '',
              //baru
              ket2_aktivasi: '',
              akses_toko: '',
              retail_toko: '',
              luas_toko: '',
              dekat_dengan: '',
              bertemu_dengan: '',
              nama_pemilik: '',
              status_kepemilikan: '',
              kode_pos: '',
              kulkas_esKrim: '',
              etalase_toko: '',
              rak_makanan: '',
              aktifitas_limit: '',
              potensi_revisit: '',
            },
          });
        } else if (response.data.flag === 5) {
          this.setState({
            showalert4: true,
            openFlag1: false,
            openFlag2: false,
            openFlag3: false,
            openFlag4: false,
            isLoading: false,
            sendDataupdate4: {
              nama_toko: response.data.data.nama_toko,
              fintech: response.data.data.fintech,
              plafond: response.data.data.plafond,
              hp: response.data.data.hp,
              kota: response.data.data.kota,
              jenis_toko: response.data.data.jenis_toko,
              pjp: response.data.data.pjp,
              sales: response.data.data.sales,
              ukuran: response.data.data.ukuran,
              lokasi: response.data.data.lokasi,
              plang: response.data.data.plang,
              kulkas: response.data.data.kulkas,
              parkir: response.data.data.parkir,
              id: response.data.data.id,
              fmcg: 1,
              is_register: 1,
              ket2_akusisi: '',
              ket_lain: '',
              ket_akusisi: 'Install',
              ket_aktivasi: 'Ya',
              provinsi: '',
              distributor: 13,
              note_akusisi: '',
              //baru
              akses_toko: '',
              retail_toko: '',
              luas_toko: '',
              dekat_dengan: '',
              bertemu_dengan: '',
              nama_pemilik: '',
              status_kepemilikan: '',
              kode_pos: '',
              kulkas_esKrim: '',
              etalase_toko: '',
              rak_makanan: '',
              aktifitas_limit: '',
              potensi_revisit: '',
            },
          });
        } else if (response.data.flag === 6) {
          this.setState({
            showalert6: true,
            openFlag1: false,
            openFlag2: false,
            openFlag3: false,
            openFlag4: false,
            openFlag5: false,
            isLoading: false,
            sendDataupdate6: {
              id: response.data.data.id,
              ket_aktivasi: 'Ya',
              ket_akusisi: 'Install',
              nama_toko: response.data.data.nama_toko,
              note_aktivasi: '',
              longitude: '',
              latitude: '',
            },
          });
        }
        // console.log(response.status);
      })
      .catch(error => {
        console.log(error.message);
        if (error.message === 'Request failed with status code 401') {
          this.dropDownAlertRef.alertWithType(
            'error',
            'Mohon untuk melakukan logout !',
            'Kemudian login kembali !',
          );
          this.setState({
            isLoading: false,
            openFlag1: false,
            openFlag2: false,
            openFlag3: false,
            openFlag4: false,
            openFlag5: false,
            openFlag6: false,
          });
        } else if (error.message === 'Request failed with status code 400') {
          this.dropDownAlertRef.alertWithType(
            'error',
            'Mohon periksa kembali!',
            'LE Code Tidak Terdaftar',
          );
          this.setState({
            isLoading: false,
            openFlag1: false,
            openFlag2: false,
            openFlag3: false,
            openFlag4: false,
            openFlag5: false,
            openFlag6: false,
          });
        } else if (error.message === 'Network Error') {
          this.dropDownAlertRef.alertWithType(
            'error',
            'Mohon periksa kembali!',
            'Jaringan Anda Tidak Stabil',
          );
          this.setState({
            isLoading: false,
            openFlag1: false,
            openFlag2: false,
            openFlag3: false,
            openFlag4: false,
            openFlag5: false,
            openFlag6: false,
          });
        }
        this.setState({isLoading: false});
      });
  };

  //------------------------------- FUNCTION VALIDATION BEFORE INPUT-------------------------------------------------

  validationflag1 = () => {
    const {sendDataupdate3} = this.state;
    if (sendDataupdate3.foto_ktp === '' || sendDataupdate3.foto_ktp == null) {
      this.dropDownAlertRef.alertWithType(
        'error',
        'Mohon Diperiksa Kembali',
        'Foto KTP Masih Kosong!',
      );
    } else if (
      sendDataupdate3.foto_selfie === '' ||
      sendDataupdate3.foto_selfie == null
    ) {
      this.dropDownAlertRef.alertWithType(
        'error',
        'Mohon Diperiksa Kembali',
        'Swafoto KTP Masih Kosong !',
      );
    } else {
      this.setState({isLoading: true});
      this.kirimDataflag3();
    }
  };

  validationflag2 = () => {
    const {sendDataupdate3} = this.state;
    if (sendDataupdate3.foto_ktp === '' || sendDataupdate3.foto_ktp == null) {
      this.dropDownAlertRef.alertWithType(
        'error',
        'Mohon Diperiksa Kembali',
        'Foto KTP Masih Kosong!',
      );
    } else if (
      sendDataupdate3.foto_selfie === '' ||
      sendDataupdate3.foto_selfie == null
    ) {
      this.dropDownAlertRef.alertWithType(
        'error',
        'Mohon Diperiksa Kembali',
        'Swafoto KTP Masih Kosong !',
      );
    } else {
      this.setState({isLoading: true});
      this.kirimDataflag3();
    }
  };

  validationflag3 = () => {
    const {sendDataupdate3} = this.state;
    if (sendDataupdate3.foto_ktp === '' || sendDataupdate3.foto_ktp == null) {
      this.dropDownAlertRef.alertWithType(
        'error',
        'Mohon Diperiksa Kembali',
        'Foto KTP Masih Kosong!',
      );
    } else if (
      sendDataupdate3.foto_selfie === '' ||
      sendDataupdate3.foto_selfie == null
    ) {
      this.dropDownAlertRef.alertWithType(
        'error',
        'Mohon Diperiksa Kembali',
        'Swafoto KTP Masih Kosong !',
      );
    } else {
      this.setState({isLoading: true});
      this.kirimDataflag3();
    }
  };

  validationflag4 = () => {
    const {sendDataupdate3} = this.state;
    if (sendDataupdate3.foto_ktp === '' || sendDataupdate3.foto_ktp == null) {
      this.dropDownAlertRef.alertWithType(
        'error',
        'Mohon Diperiksa Kembali',
        'Foto KTP Masih Kosong!',
      );
    } else if (
      sendDataupdate3.foto_selfie === '' ||
      sendDataupdate3.foto_selfie == null
    ) {
      this.dropDownAlertRef.alertWithType(
        'error',
        'Mohon Diperiksa Kembali',
        'Swafoto KTP Masih Kosong !',
      );
    } else {
      this.setState({isLoading: true});
      this.kirimDataflag3();
    }
  };

  validationflag5 = () => {
    const {sendDataupdate4} = this.state;
    if (
      sendDataupdate4.note_akusisi === '' ||
      sendDataupdate4.note_akusisi == null
    ) {
      this.dropDownAlertRef.alertWithType(
        'error',
        'Mohon Diperiksa Kembali',
        'Tolong Catatan nya diisi!',
      );
    } else {
      this.setState({isLoading: true});
      this.kiriminputData5();
    }
  };

  validationflag6 = () => {
    const {sendDataupdate6} = this.state;
    if (sendDataupdate6.foto_ktp === '' || sendDataupdate6.foto_ktp == null) {
      this.dropDownAlertRef.alertWithType(
        'error',
        'Mohon Diperiksa Kembali',
        'Foto KTP Masih Kosong!',
      );
    } else if (
      sendDataupdate6.foto_selfie === '' ||
      sendDataupdate6.foto_selfie == null
    ) {
      this.dropDownAlertRef.alertWithType(
        'error',
        'Mohon Diperiksa Kembali',
        'Swafoto KTP Masih Kosong !',
      );
    } else if (
      sendDataupdate6.note_aktivasi === '' ||
      sendDataupdate6.note_aktivasi == null
    ) {
      this.dropDownAlertRef.alertWithType(
        'error',
        'Mohon Diperiksa Kembali',
        'Catatannya masih kosong !',
      );
    } else {
      this.setState({isLoading: true});
      this.kirimDataflag6();
    }
  };

  //---------------------------------------SEND INPUT AFTER VALIDATION-----------------------------------------------

  kiriminputData = async () => {
    this.setState({
      isLoading: true,
    });
    const {sendData} = this.state;
    const user = {
      fmcg: 13,
      is_register: sendData.is_register,
      agent_akusisi: this.state.agent_akusisi,
      le_code: this.state.le_code,
      nama_toko: sendData.nama_toko,
      ket_akusisi: sendData.ket_akusisi,
      ket2_akusisi: sendData.ket2_akusisi,
      ket_lain: sendData.ket_lain,
      ket_aktivasi: sendData.ket_aktivasi,
      fintech: sendData.fintech,
      plafond: sendData.plafond,
      hp: sendData.hp,
      kota: sendData.kota,
      provinsi: sendData.provinsi,
      distributor: 2,
      pjp: sendData.pjp,
      sales: sendData.sales,
      jenis_toko: sendData.jenis_toko,
      ukuran: sendData.ukuran,
      lokasi: sendData.lokasi,
      plang: sendData.plang,
      kulkas: sendData.kulkas,
      parkir: sendData.parkir,
      note_akusisi: sendData.note_akusisi,
      //UPDATE_TAMBAHAN
      dekat_dengan: sendData.dekat_dengan,
      kode_pos: 2,
      nama_pemilik: sendData.nama_pemilik,
      status_kepemilikan: sendData.status_kepemilikan,
      ket2_aktivasi: sendData.ket2_aktivasi,
      bertemu_dengan: sendData.bertemu_dengan,
      kulkas_esKrim: sendData.kulkas_esKrim,
      rak_makanan: sendData.rak_makanan,
      etalase_toko: sendData.etalase_toko,
      potensi_revisit: sendData.potensi_revisit,
      luas_toko: sendData.luas_toko,
      retail_toko: sendData.retail_toko,
      akses_toko: sendData.akses_toko,
      //UPDATE
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      accuracy: this.state.accuracy,
      foto_ktp: this.state.foto_ktp,
      foto_selfie: this.state.foto_selfie,
      foto_lain2: '/9j/4SEHRXhpZgAATU0AKgAAAAgACwEPAA',
      foto_dalam: this.state.foto_dalam,
      foto_luar: this.state.foto_luar,
      foto_lain: '/9j/4SEHRXhpZgAATU0AKgAAAAgACwEPAA',
    };
    console.log(user);
    const tokenx = await AsyncStorage.getItem('token');
    const header = {
      Authorization: 'Bearer ' + tokenx,
      'Content-Type': 'application/json',
      'x-api-key':
        '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
    };
    axios({
      method: 'POST',
      url: 'http://support.tokopandai.id:3003/Api/akusisi',
      headers: header,
      data: user,
    })
      .then(response => {
        this.response = response.status;
        console.log(response);
        console.log(response.status);
        if (response.status === 201) {
          this.onSuccessUpload();
        } else if (response.status !== 201) {
          this.onFailedUpload();
        }
        this.setState({
          isLoading: false,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  kiriminputData3 = async () => {
    this.setState({
      isLoading: true,
    });
    const {sendDataupdate3} = this.state;
    const user = {
      agent_aktivasi: this.state.agent_aktivasi,
      id: sendDataupdate3.id,
      ket_aktivasi: sendDataupdate3.ket_aktivasi,
      le_code: this.state.le_code,
      note_aktivasi: sendDataupdate3.note_aktivasi,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      accuracy: this.state.accuracy,
      foto_ktp: this.state.foto_ktp,
      foto_selfie: this.state.foto_selfie,
      foto_lain2: this.state.foto_lain2,
    };
    console.log(user);
    const tokenx = await AsyncStorage.getItem('token');
    const header = {
      Authorization: 'Bearer ' + tokenx,
      'Content-Type': 'application/json',
      'x-api-key':
        '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
    };
    axios({
      method: 'POST',
      url: 'http://support.tokopandai.id:3003/Api/aktivasi',
      headers: header,
      data: user,
    })
      .then(response => {
        this.response = response.status;
        console.log(response);
        console.log(response.status);
        if (response.status === 200) {
          this.onSuccessUpload();
        } else if (response.status !== 201) {
          this.onFailedUpload();
        }
        this.setState({
          isLoading: false,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  kiriminputData4 = async () => {
    this.setState({
      isLoading: true,
    });
    const {sendDataupdate4} = this.state;
    const user = {
      no_aplikasi: sendDataupdate4.no_aplikasi,
      fmcg: 13,
      is_register: sendDataupdate4.is_register,
      agent_akusisi: this.state.agent_akusisi,
      le_code: this.state.le_code,
      nama_toko: sendDataupdate4.nama_toko,
      ket_akusisi: sendDataupdate4.ket_akusisi,
      ket2_akusisi: sendDataupdate4.ket2_akusisi,
      ket_lain: sendDataupdate4.ket_lain,
      ket_aktivasi: sendDataupdate4.ket_aktivasi,
      fintech: sendDataupdate4.fintech,
      plafond: sendDataupdate4.plafond,
      hp: sendDataupdate4.hp,
      kota: sendDataupdate4.kota,
      provinsi: sendDataupdate4.provinsi,
      distributor: 2,
      pjp: sendDataupdate4.pjp,
      sales: sendDataupdate4.sales,
      jenis_toko: sendDataupdate4.jenis_toko,
      ukuran: sendDataupdate4.ukuran,
      lokasi: sendDataupdate4.lokasi,
      plang: sendDataupdate4.plang,
      kulkas: sendDataupdate4.kulkas,
      parkir: sendDataupdate4.parkir,
      note_akusisi: sendDataupdate4.note_akusisi,
      //UPDATE_TAMBAHAN
      dekat_dengan: sendDataupdate4.dekat_dengan,
      kode_pos: 2,
      nama_pemilik: sendDataupdate4.nama_pemilik,
      status_kepemilikan: sendDataupdate4.status_kepemilikan,
      ket2_aktivasi: sendDataupdate4.ket2_aktivasi,
      bertemu_dengan: sendDataupdate4.bertemu_dengan,
      kulkas_esKrim: sendDataupdate4.kulkas_esKrim,
      rak_makanan: sendDataupdate4.rak_makanan,
      etalase_toko: sendDataupdate4.etalase_toko,
      potensi_revisit: sendDataupdate4.potensi_revisit,
      luas_toko: sendDataupdate4.luas_toko,
      retail_toko: sendDataupdate4.retail_toko,
      akses_toko: sendDataupdate4.akses_toko,
      //GENERAL
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      accuracy: this.state.accuracy,
      foto_dalam: this.state.foto_dalam,
      foto_luar: this.state.foto_luar,
      foto_ktp: this.state.foto_ktp,
      foto_selfie: this.state.foto_selfie,
      foto_lain: this.state.foto_lain,
      foto_lain2: this.state.foto_lain2,
    };
    console.log(user);
    const tokenx = await AsyncStorage.getItem('token');
    const id = sendDataupdate4.id;
    console.log(id);
    const header = {
      Authorization: 'Bearer ' + tokenx,
      'Content-Type': 'application/json',
      'x-api-key':
        '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
    };
    axios({
      method: 'PUT',
      url: 'http://support.tokopandai.id:3003/Api/akusisi/' + id,
      headers: header,
      data: user,
    })
      .then(response => {
        this.response = response.status;
        console.log(response);
        console.log(response.status);
        if (response.status === 200) {
          this.onSuccessUpload();
        } else if (response.status !== 200) {
          this.onFailedUpload();
        }
        this.setState({
          isLoading: false,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  kiriminputData5 = async () => {
    this.setState({
      isLoading: true,
    });
    const {sendDataupdate5} = this.state;
    const {sendDataupdate4} = this.state;
    const user = {
      fmcg: 13,
      is_register: sendDataupdate4.is_register,
      agent_aktivasi: this.state.agent_aktivasi,
      le_code: this.state.le_code,
      nama_toko: sendDataupdate4.nama_toko,
      ket_akusisi: 'Install',
      ket2_akusisi: sendDataupdate4.ket2_akusisi,
      ket_lain: sendDataupdate4.ket_lain,
      ket_aktivasi: sendDataupdate5.ket_aktivasi,
      fintech: sendDataupdate4.fintech,
      plafond: sendDataupdate4.plafond,
      hp: sendDataupdate4.hp,
      kota: sendDataupdate4.kota,
      provinsi: sendDataupdate4.provinsi,
      distributor: 2,
      pjp: sendDataupdate4.pjp,
      sales: sendDataupdate4.sales,
      jenis_toko: sendDataupdate4.jenis_toko,
      ukuran: sendDataupdate4.ukuran,
      lokasi: sendDataupdate4.lokasi,
      plang: sendDataupdate4.plang,
      kulkas: sendDataupdate4.kulkas,
      parkir: sendDataupdate4.parkir,
      note_aktivasi: sendDataupdate4.note_aktivasi,
      //UPDATE_TAMBAHAN
      dekat_dengan: sendDataupdate4.dekat_dengan,
      kode_pos: sendDataupdate4.kode_pos,
      nama_pemilik: sendDataupdate4.nama_pemilik,
      status_kepemilikan: sendDataupdate4.status_kepemilikan,
      ket2_aktivasi: sendDataupdate4.ket2_aktivasi,
      bertemu_dengan: sendDataupdate4.bertemu_dengan,
      kulkas_esKrim: sendDataupdate4.kulkas_esKrim,
      rak_makanan: sendDataupdate4.rak_makanan,
      etalase_toko: sendDataupdate4.etalase_toko,
      potensi_revisit: sendDataupdate4.potensi_revisit,
      luas_toko: sendDataupdate4.luas_toko,
      retail_toko: sendDataupdate4.retail_toko,
      akses_toko: sendDataupdate4.akses_toko,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      accuracy: this.state.accuracy,
      // foto_dalam: this.state.foto_dalam,
      foto_dalam: '97/sdgsdghs',
      // foto_luar: this.state.foto_luar,
      foto_luar: '97/sdgsdghs',
      // foto_ktp: this.state.foto_ktp,
      foto_ktp: '97/sdgsdghs',
      // foto_selfie: this.state.foto_selfie,
      foto_selfie: '97/sdgsdghs',
      foto_lain: this.state.foto_lain,
      foto_lain2: this.state.foto_lain2,
    };
    console.log(user);
    const tokenx = await AsyncStorage.getItem('token');
    const id = sendDataupdate4.id;
    const header = {
      Authorization: 'Bearer ' + tokenx,
      'Content-Type': 'application/json',
      'x-api-key':
        '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
    };
    axios({
      method: 'PUT',
      url: 'http://support.tokopandai.id:3003/Api/akusisi/' + id,
      headers: header,
      data: user,
    })
      .then(response => {
        this.response = response.status;
        console.log(response);
        console.log(response.status);
        if (response.status === 200) {
          this.onSuccessUpload();
        } else if (response.status !== 200) {
          this.onFailedUpload();
        }
        this.setState({
          isLoading: false,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  kiriminputData6 = async () => {
    const {sendDataupdate6} = this.state;
    const user = {
      agent_aktivasi: this.state.agent_aktivasi,
      id: sendDataupdate6.id,
      ket_aktivasi: sendDataupdate6.ket_aktivasi,
      le_code: this.state.le_code,
      note_aktivasi: sendDataupdate6.note_aktivasi,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      accuracy: this.state.accuracy,
      foto_ktp: this.state.foto_ktp,
      foto_selfie: this.state.foto_selfie,
      foto_lain2: this.state.foto_lain2,
    };
    console.log(user);
    const tokenx = await AsyncStorage.getItem('token');
    const header = {
      Authorization: 'Bearer ' + tokenx,
      'Content-Type': 'application/json',
      'x-api-key':
        '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
    };
    axios({
      method: 'POST',
      url: 'http://support.tokopandai.id:3003/Api/aktivasi',
      headers: header,
      data: user,
    })
      .then(response => {
        this.response = response.status;
        console.log(response);
        console.log(response.status);
        if (response.status === 200) {
          this.onSuccessUpload();
        } else if (response.status !== 200) {
          this.onFailedUpload();
        }
        this.setState({
          isLoading: false,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  kirimDataflag1 = () => {
    const {sendData} = this.state;
    const user = {
      fmcg: sendData.fmcg,
      is_register: sendData.is_register,
      agent_akusisi: this.state.agent_akusisi,
      le_code: this.state.le_code,
      nama_toko: sendData.nama_toko,
      ket_akusisi: sendData.ket_akusisi,
      ket2_akusisi: sendData.ket2_akusisi,
      ket_lain: sendData.ket_lain,
      ket_aktivasi: sendData.ket_aktivasi,
      fintech: sendData.fintech,
      plafond: sendData.plafond,
      hp: sendData.hp,
      kota: sendData.kota,
      provinsi: sendData.provinsi,
      distributor: sendData.distributor,
      pjp: sendData.pjp,
      sales: sendData.sales,
      jenis_toko: sendData.jenis_toko,
      ukuran: sendData.ukuran,
      lokasi: sendData.lokasi,
      plang: sendData.plang,
      kulkas: sendData.kulkas,
      parkir: sendData.parkir,
      note_akusisi: sendData.note_akusisi,
      foto_dalam: this.state.foto_dalam,
      foto_luar: this.state.foto_luar,
      foto_lain: this.state.foto_lain,
      //UPDATE
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      accuracy: this.state.accuracy,
      foto_ktp: this.state.foto_ktp,
      foto_selfie: this.state.foto_selfie,
      foto_lain2: this.state.foto_lain2,
    };
    console.log(user);
    this.props.flag1(user);
    // console.log(login);
    return true;
  };

  kirimDataflag3 = () => {
    const {sendDataupdate3} = this.state;
    const user = {
      agent_aktivasi: this.state.agent_aktivasi,
      id: sendDataupdate3.id,
      ket_aktivasi: sendDataupdate3.ket_aktivasi,
      le_code: this.state.le_code,
      note_aktivasi: sendDataupdate3.note_aktivasi,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      accuracy: this.state.accuracy,
      foto_ktp: this.state.foto_ktp,
      foto_selfie: this.state.foto_selfie,
      foto_lain2: this.state.foto_lain2,
    };
    console.log(user);
    this.props.flag3(user);
    // console.log(login);
    return true;
  };

  kirimDataflag6 = () => {
    const {sendDataupdate6} = this.state;
    const user = {
      agent_aktivasi: this.state.agent_aktivasi,
      id: sendDataupdate6.id,
      ket_aktivasi: sendDataupdate6.ket_aktivasi,
      le_code: this.state.le_code,
      note_aktivasi: sendDataupdate6.note_aktivasi,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      accuracy: this.state.accuracy,
      foto_ktp: this.state.foto_ktp,
      foto_selfie: this.state.foto_selfie,
      foto_lain2: this.state.foto_lain2,
    };
    console.log(user);
    this.props.flag6(user);
    // console.log(login);
    return true;
  };

  //-------------------------------------------- UPDATE / CHANGE LOCAL STATE ---------------------------------------------
  //----TEXTINPUT
  changeState(payload) {
    const {name, val} = payload;
    const innerFormData = {...this.state.sendData};
    innerFormData[name] = val;
    // console.log(innerFormData);
    this.setState({sendData: innerFormData});
    const isCompleteForm = Object.values(this.state.sendData).every(
      e => e !== '',
    );
    this.setState({isCompleteForm});
  }

  changeStateupdate3(dataload) {
    const {name, val} = dataload;
    const innerFormDataupdate = {...this.state.sendDataupdate3};
    innerFormDataupdate[name] = val;
    console.log(innerFormDataupdate);
    this.setState({sendDataupdate3: innerFormDataupdate});
    const isCompleteFormupdate = Object.values(
      this.state.sendDataupdate3,
    ).every(e => e !== '');
    this.setState({isCompleteFormupdate});
  }

  changeStateupdate(dataload) {
    const {name, val} = dataload;
    const innerFormDataupdate = {...this.state.sendDataupdate};
    innerFormDataupdate[name] = val;
    console.log(innerFormDataupdate);
    this.setState({sendDataupdate: innerFormDataupdate});
    const isCompleteFormupdate = Object.values(this.state.sendDataupdate).every(
      e => e !== '',
    );
    this.setState({isCompleteFormupdate});
  }

  changeStateupdate4(payload) {
    const {name, val} = payload;
    const innerFormDataupdate = {...this.state.sendDataupdate4};
    innerFormDataupdate[name] = val;
    // console.log(innerFormDataupdate);
    this.setState({sendDataupdate4: innerFormDataupdate});
    const isCompleteFormupdate = Object.values(
      this.state.sendDataupdate4,
    ).every(e => e !== '');
    this.setState({isCompleteFormupdate});
  }

  changeStateupdate6(dataload) {
    const {name, val} = dataload;
    const innerFormDataupdate = {...this.state.sendDataupdate6};
    innerFormDataupdate[name] = val;
    console.log(innerFormDataupdate);
    this.setState({sendDataupdate6: innerFormDataupdate});
    const isCompleteFormupdate = Object.values(
      this.state.sendDataupdate6,
    ).every(e => e !== '');
    this.setState({isCompleteFormupdate});
  }
  //-------DROPDOWN
  changeKost = async (name, value) => {
    await this.setState(prevState => ({
      sendData: {
        ...prevState.sendData,
        [name]: value,
      },
    }));
    // console.log(this.state.sendData);
  };

  changelokasi = async (name, value) => {
    await this.setState(prevState => ({
      lokasi: {
        ...prevState.lokasi,
        [name]: value,
      },
    }));
    // console.log(this.state.sendData);
  };

  changesendDataupdate4 = async (name, value) => {
    await this.setState(prevState => ({
      sendDataupdate4: {
        ...prevState.sendDataupdate4,
        [name]: value,
      },
    }));
    // console.log(this.state.sendData);
  };

  //----------------------------------------------- FUNCTION ACTION INPUT DATA CAMERA ---------------------------------------

  takePicturedalam = async () => {
    if (this.camera) {
      const options = {quality: 0.3, base64: true};
      const data = await this.camera.takePictureAsync(options);
      // console.log(data.base64);
      this.setState({foto_dalam: data.base64, foto: false}, () =>
        console.log(this.state.foto_dalam),
      );
    }
  };

  takePictureluar = async () => {
    if (this.camera) {
      const options = {quality: 0.3, base64: true};
      const data = await this.camera.takePictureAsync(options);
      // console.log(data.base64);
      this.setState({foto_luar: data.base64, foto: false}, () =>
        console.log(this.state.foto_luar),
      );
    }
  };

  takePicturelain = async () => {
    if (this.camera) {
      const options = {quality: 0.2, base64: true};
      const data = await this.camera.takePictureAsync(options);
      // console.log(data.base64);
      this.setState(
        {foto_lain: data.base64, fotoother: false, fotoseflie: false},
        () => console.log(this.state.foto_lain),
      );
    }
  };

  takePicturektp = async () => {
    if (this.camera) {
      const options = {quality: 0.3, base64: true};
      const data = await this.camera.takePictureAsync(options);
      this.setState({foto_ktp: data.base64, foto: false});
    }
  };

  takePictureselfie = async () => {
    if (this.camera) {
      const options = {quality: 0.2, base64: true};
      const data = await this.camera.takePictureAsync(options);
      this.setState({foto_selfie: data.base64, fotoseflie: false, foto: false});
    }
  };

  takePicturelain2 = async () => {
    if (this.camera) {
      const options = {quality: 0.2, base64: true};
      const data = await this.camera.takePictureAsync(options);
      this.setState({
        foto_lain2: data.base64,
        fotoother: false,
        foto: false,
        fotoseflie: false,
      });
    }
  };

  handleCapture = () => {
    if (this.state.btnfoto_dalam === true) {
      return (
        <TouchableOpacity
          onPress={this.takePicturedalam.bind(this)}
          style={Styles.capture}
        />
      );
    } else if (this.state.btnfoto_luar === true) {
      return (
        <TouchableOpacity
          onPress={this.takePictureluar.bind(this)}
          style={Styles.capture}
        />
      );
    } else if (this.state.btnfoto_lain === true) {
      return (
        <TouchableOpacity
          onPress={this.takePicturelain.bind(this)}
          style={Styles.capture}
        />
      );
    } else if (this.state.btnfoto_ktp === true) {
      return (
        <TouchableOpacity
          onPress={this.takePicturektp.bind(this)}
          style={Styles.capture}
        />
      );
    } else if (this.state.btnfoto_lain2 === true) {
      return (
        <TouchableOpacity
          onPress={this.takePicturelain2.bind(this)}
          style={Styles.capture}
        />
      );
    }
  };

  handleCaptureother = () => {
    if (this.state.btnfoto_lain === true) {
      return (
        <TouchableOpacity
          onPress={this.takePicturelain.bind(this)}
          style={Styles.capture}
        />
      );
    } else if (this.state.btnfoto_lain2 === true) {
      return (
        <TouchableOpacity
          onPress={this.takePicturelain2.bind(this)}
          style={Styles.capture}
        />
      );
    }
  };

  handleCapturefront = () => {
    return (
      <TouchableOpacity
        onPress={this.takePictureselfie.bind(this)}
        style={Styles.capture}
      />
    );
  };

  handleFoto() {
    return (
      <View style={Styles.cameraFoto}>
        <StatusBar hidden={true} />
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={Styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View style={Styles.buttonCamera} key={this.state.buttoncamera}>
          <TouchableOpacity>
            <Icon
              name={'refresh'}
              size={50}
              color={'green'}
              style={Styles.iconfoto}
            />
          </TouchableOpacity>
          {this.handleCapture()}
          <TouchableOpacity onPress={() => this.setState({foto: false})}>
            <Icon2
              name={'close-o'}
              size={60}
              color={'red'}
              style={Styles.iconfoto}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  handleFotoother() {
    return (
      <View style={Styles.cameraFoto}>
        <StatusBar hidden={true} />
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={Styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View style={Styles.buttonCamera} key={this.state.buttoncamera}>
          <TouchableOpacity>
            <Icon
              name={'refresh'}
              size={40}
              color={'green'}
              style={Styles.iconfoto}
            />
          </TouchableOpacity>
          {this.handleCaptureother()}
          <TouchableOpacity
            onPress={() =>
              this.setState({fotoother: false, foto: false, fotoseflie: false})
            }>
            <Icon2
              name={'close-o'}
              size={60}
              color={'red'}
              style={Styles.iconfoto}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  handleFotofront() {
    return (
      <View style={Styles.cameraFoto}>
        <StatusBar hidden={true} />
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={Styles.preview}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View style={Styles.buttonCamera} key={this.state.buttoncamera}>
          <TouchableOpacity>
            <Icon
              name={'refresh'}
              size={50}
              color={'green'}
              style={Styles.iconfoto}
            />
          </TouchableOpacity>
          {this.handleCapturefront()}
          <TouchableOpacity onPress={() => this.setState({fotoseflie: false})}>
            <Icon2
              name={'close-o'}
              size={65}
              color={'red'}
              style={Styles.iconfoto}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  //----------------------------------------------------- LOGIC HANDLE FOTO --------------------------------------------------

  handleFotodalam = () => {
    this.setState({
      foto: true,
      fotoseflie: false,
      btnfoto_dalam: true,
      btnfoto_luar: false,
      btnfoto_lain: false,
      btnfoto_ktp: false,
      btnfoto_selfie: false,
      btnfoto_lain2: false,
    });
  };

  handleFotoluar = () => {
    this.setState({
      foto: true,
      fotoseflie: false,
      btnfoto_dalam: false,
      btnfoto_luar: true,
      btnfoto_lain: false,
      btnfoto_ktp: false,
      btnfoto_selfie: false,
      btnfoto_lain2: false,
    });
  };

  handleFotolain = () => {
    this.setState({
      foto: false,
      fotoother: true,
      fotoseflie: false,
      btnfoto_dalam: false,
      btnfoto_luar: false,
      btnfoto_lain: true,
      btnfoto_ktp: false,
      btnfoto_selfie: false,
      btnfoto_lain2: false,
    });
  };

  handleFotoktp = () => {
    this.setState({
      foto: true,
      fotoseflie: false,
      btnfoto_dalam: false,
      btnfoto_luar: false,
      btnfoto_lain: false,
      btnfoto_ktp: true,
      btnfoto_selfie: false,
      btnfoto_lain2: false,
    });
  };

  handleFotoselfie = () => {
    this.setState({
      foto: false,
      fotoseflie: true,
      btnfoto_dalam: false,
      btnfoto_luar: false,
      btnfoto_lain: false,
      btnfoto_ktp: false,
      btnfoto_selfie: true,
      btnfoto_lain2: false,
    });
  };

  handleFotolain2 = () => {
    this.setState({
      foto: false,
      fotoother: true,
      fotoseflie: false,
      btnfoto_dalam: false,
      btnfoto_luar: false,
      btnfoto_lain: false,
      btnfoto_ktp: false,
      btnfoto_selfie: false,
      btnfoto_lain2: true,
    });
  };

  //-------------------------------------------------RENDER COMPONENT ACTION FLAG---------------------------------------------

  renderStatustoko = () => {
    const {sendData} = this.state;
    if (sendData.ket_akusisi === 'No Install') {
      return (
        <View>
          <Text style={Styles.TextInput}>Alasan Belum Install</Text>
          <Droppickeralasan
            styles={Styles.droppicker}
            data={sendData.ket2_akusisi}
            onChange={this.changeKost}
          />
        </View>
      );
    } else if (sendData.ket_akusisi === 'Install') {
      return (
        <View>
          <Text style={Styles.TextInput}>Aktivasi Limit Pandai</Text>
          <Dropaktivasi
            styles={Styles.droppicker}
            data={sendData.ket_aktivasi}
            onChange={this.changeKost}
          />
          {this.rendertidakaktivasi()}
          <Dropinstall
            // DATA
            valuesales={sendData.sales}
            dataprovinsi={sendData.provinsi}
            valuekota={sendData.kota}
            datapjp={sendData.pjp}
            datajenistoko={sendData.jenis_toko}
            datajenisretail={sendData.retail_toko}
            dataukuran={sendData.ukuran}
            dataluas={sendData.luas_toko}
            datalokasi={sendData.lokasi}
            dataakses={sendData.akses_toko}
            databerdekatan={sendData.dekat_dengan}
            dataparkir={sendData.parkir}
            dataplang={sendData.plang}
            dataetalase={sendData.etalase_toko}
            datarak={sendData.rak_makanan}
            datakulkasminum={sendData.kulkas}
            dataeskrim={sendData.kulkas_esKrim}
            // ONCHANGE
            onChangesales={sales =>
              this.changeState({name: 'sales', val: sales})
            }
            onChangeprovinsi={this.changeKost}
            onChangekota={kota => this.changeState({name: 'kota', val: kota})}
            onChangepjp={this.changeKost}
            onChangejenistoko={this.changeKost}
            onChangejenisretail={this.changeKost}
            onChangeukuran={this.changeKost}
            onChangeluas={this.changeKost}
            onChangelokasi={this.changeKost}
            onChangeaksestoko={this.changeKost}
            onChangeberdekatan={this.changeKost}
            onChangeparkir={this.changeKost}
            onChangeplang={this.changeKost}
            onChangeetalase={this.changeKost}
            onChangerak={this.changeKost}
            onChangekulkas={this.changeKost}
            onChangeeskrim={this.changeKost}
          />
        </View>
      );
    }
  };

  renderAlasanlainya = () => {
    const {sendData} = this.state;
    if (sendData.ket2_akusisi === 'Alasan Lainnya') {
      return (
        <View>
          <Text style={Styles.TextInput}>Alasan Lainnya :</Text>
          <TextInput
            keyboardType={'default'}
            placeholder={'Alasan Lainnya'}
            onChangeText={ket_lain =>
              this.changeState({name: 'ket_lain', val: ket_lain})
            }
            value={sendData.ket_lain}
          />
        </View>
      );
    }
  };

  rendertidakaktivasi = () => {
    const {sendData} = this.state;
    const {sendDataupdate4} = this.state;
    if (sendData.ket_aktivasi === 'Tidak') {
      return (
        <View>
          <Dropnolimit
            title={'Alasan Tidak Aktivasi'}
            label={'Alasan'}
            data={sendData.ket2_aktivasi}
            onValueChange={itemValue => {
              this.changeKost('ket2_aktivasi', itemValue);
            }}
          />
        </View>
      );
    } else if (sendDataupdate4.ket_aktivasi === 'Tidak') {
      return (
        <View>
          <Dropnolimit
            title={'Alasan Tidak Aktivasi'}
            label={'Alasan'}
            data={sendDataupdate4.ket2_aktivasi}
            onValueChange={itemValue => {
              this.changesendDataupdate4('ket2_aktivasi', itemValue);
            }}
          />
        </View>
      );
    }
  };

  renderFotoBelumInstall = () => {
    return (
      <View style={Styles.fotoArea}>
        <TouchableOpacity onPress={this.handleFotodalam}>
          <View style={Styles.viewFoto}>
            {this.state.foto_dalam ? (
              <Image
                source={{
                  uri: `data:image/png;base64,${this.state.foto_dalam}`,
                }}
                resizeMode={'stretch'}
                style={Styles.fotoData}
              />
            ) : (
              <ImageDefault />
            )}
            <Text style={Styles.TextFoto}>Dalam Toko</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleFotoluar}>
          <View style={Styles.viewFoto}>
            {this.state.foto_luar ? (
              <Image
                source={{
                  uri: `data:image/png;base64,${this.state.foto_luar}`,
                }}
                resizeMode={'stretch'}
                style={Styles.fotoData}
              />
            ) : (
              <ImageDefault />
            )}
            <Text style={Styles.TextFoto}>Luar Toko</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleFotolain}>
          <View style={Styles.viewFoto}>
            {this.state.foto_lain ? (
              <Image
                source={{
                  uri: `data:image/png;base64,${this.state.foto_lain}`,
                }}
                resizeMode={'stretch'}
                style={Styles.fotoData}
              />
            ) : (
              <ImageDefault />
            )}
            <Text style={Styles.TextFoto}>Foto Lainnya</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  renderFotoSudahInstall = () => {
    const {sendData} = this.state;
    const {sendDataupdate4} = this.state;
    if (
      sendData.ket_akusisi === 'Install' ||
      sendDataupdate4.ket_akusisi === 'Install'
    ) {
      return (
        <View style={Styles.fotoSudahinstall}>
          {this.rendersudahAktivasi()}
          <TouchableOpacity onPress={this.handleFotolain2}>
            <View style={Styles.viewFoto}>
              {this.state.foto_lain2 ? (
                <Image
                  source={{
                    uri: `data:image/png;base64,${this.state.foto_lain2}`,
                  }}
                  resizeMode={'stretch'}
                  style={Styles.fotoData}
                />
              ) : (
                <ImageDefault />
              )}
              <Text style={Styles.TextFoto}>Foto Lainnya</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  };

  rendersudahAktivasi = () => {
    const {sendData} = this.state;
    const {sendDataupdate4} = this.state;
    if (
      sendData.ket_aktivasi === 'Ya' ||
      sendDataupdate4.ket_aktivasi === 'Ya'
    ) {
      return (
        <View style={Styles.fotoSudahinstall}>
          <TouchableOpacity onPress={this.handleFotoktp}>
            <View style={Styles.viewFoto}>
              {this.state.foto_ktp ? (
                <Image
                  source={{
                    uri: `data:image/png;base64,${this.state.foto_ktp}`,
                  }}
                  resizeMode={'stretch'}
                  style={Styles.fotoData}
                />
              ) : (
                <ImageDefault />
              )}
              <Text style={Styles.TextFoto}>Foto KTP</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleFotoselfie}>
            <View style={Styles.viewFoto}>
              {this.state.foto_selfie ? (
                <Image
                  source={{
                    uri: `data:image/png;base64,${this.state.foto_selfie}`,
                  }}
                  resizeMode={'stretch'}
                  style={Styles.fotoData}
                />
              ) : (
                <ImageDefault />
              )}
              <Text style={Styles.TextFoto}>Foto Selfie KTP</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  };

  renderInstall4 = () => {
    const {sendDataupdate4} = this.state;
    return (
      <View>
        <Text style={Styles.TextInput}>Status Toko</Text>
        <View style={Styles.textInput}>
          <Text style={Styles.textFont}>{sendDataupdate4.ket_akusisi}</Text>
        </View>
        <Text style={Styles.TextInput}>Aktivasi Limit Pandai</Text>
        <Dropaktivasi
          styles={Styles.droppicker}
          data={sendDataupdate4.ket_aktivasi}
          onChange={this.changesendDataupdate4}
        />
        {/* {this.rendertidakaktivasi()} */}
        <Dropinstall
          // DATA
          valuesales={sendDataupdate4.sales}
          dataprovinsi={sendDataupdate4.provinsi}
          valuekota={sendDataupdate4.kota}
          datapjp={sendDataupdate4.pjp}
          datajenistoko={sendDataupdate4.jenis_toko}
          datajenisretail={sendDataupdate4.retail_toko}
          dataukuran={sendDataupdate4.ukuran}
          dataluas={sendDataupdate4.luas_toko}
          datalokasi={sendDataupdate4.lokasi}
          dataakses={sendDataupdate4.akses_toko}
          databerdekatan={sendDataupdate4.dekat_dengan}
          dataparkir={sendDataupdate4.parkir}
          dataplang={sendDataupdate4.plang}
          dataetalase={sendDataupdate4.etalase_toko}
          datarak={sendDataupdate4.rak_makanan}
          datakulkasminum={sendDataupdate4.kulkas}
          dataeskrim={sendDataupdate4.kulkas_esKrim}
          // ONCHANGE
          onChangesales={sales =>
            this.changeStateupdate4({name: 'sales', val: sales})
          }
          onChangeprovinsi={this.changesendDataupdate4}
          onChangekota={kota =>
            this.changeStateupdate4({name: 'kota', val: kota})
          }
          onChangepjp={this.changesendDataupdate4}
          onChangejenistoko={this.changesendDataupdate4}
          onChangejenisretail={this.changesendDataupdate4}
          onChangeukuran={this.changesendDataupdate4}
          onChangeluas={this.changesendDataupdate4}
          onChangelokasi={this.changesendDataupdate4}
          onChangeaksestoko={this.changesendDataupdate4}
          onChangeberdekatan={this.changesendDataupdate4}
          onChangeparkir={this.changesendDataupdate4}
          onChangeplang={this.changesendDataupdate4}
          onChangeetalase={this.changesendDataupdate4}
          onChangerak={this.changesendDataupdate4}
          onChangekulkas={this.changesendDataupdate4}
          onChangeeskrim={this.changesendDataupdate4}
        />
      </View>
    );
  };

  renderInstall5 = () => {
    const {sendDataupdate4} = this.state;
    return (
      <View>
        <Text style={Styles.TextInput}>Aktivasi KTP</Text>
        <View style={Styles.textInput}>
          <Text style={Styles.textFont}>{sendDataupdate4.ket_aktivasi}</Text>
        </View>
        <Text style={Styles.TextInput}>Provinsi Tempat Usaha</Text>
        <TextInput
          keyboardType={'default'}
          placeholder={'Provinsi Tempat Usaha'}
          value={sendDataupdate4.provinsi}
          onChangeText={provinsi =>
            this.changeStateupdate4({name: 'provinsi', val: provinsi})
          }
        />
        <Text style={Styles.TextInput}>Kota Tempat Usaha</Text>
        <TextInput
          keyboardType={'default'}
          placeholder={'Kota Tempat Usaha'}
          value={sendDataupdate4.kota}
          onChangeText={kota =>
            this.changeStateupdate4({name: 'kota', val: kota})
          }
        />
        <Dropinstall
          // DATA
          datapjp={sendDataupdate4.pjp}
          datajenistoko={sendDataupdate4.jenis_toko}
          datajenisretail={sendDataupdate4.retail_toko}
          dataukuran={sendDataupdate4.ukuran}
          dataluas={sendDataupdate4.luas_toko}
          datalokasi={sendDataupdate4.lokasi}
          dataakses={sendDataupdate4.akses_toko}
          databerdekatan={sendDataupdate4.dekat_dengan}
          dataparkir={sendDataupdate4.parkir}
          dataplang={sendDataupdate4.plang}
          dataetalase={sendDataupdate4.etalase_toko}
          datarak={sendDataupdate4.rak_makanan}
          datakulkasminum={sendDataupdate4.kulkas}
          dataeskrim={sendDataupdate4.kulkas_esKrim}
          datarevisit={sendDataupdate4.potensi_revisit}
          // ONCHANGE
          onChangepjp={this.changeStateupdate4}
          onChangejenistoko={this.changeStateupdate4}
          onChangejenisretail={this.changeStateupdate4}
          onChangeukuran={this.changeStateupdate4}
          onChangeluas={this.changeStateupdate4}
          onChangelokasi={this.changeStateupdate4}
          onChangeaksestoko={this.changeStateupdate4}
          onChangeberdekatan={this.changeStateupdate4}
          onChangeparkir={this.changeStateupdate4}
          onChangeplang={this.changeStateupdate4}
          onChangeetalase={this.changeStateupdate4}
          onChangerak={this.changeStateupdate4}
          onChangekulkas={this.changeStateupdate4}
          onChangeeskrim={this.changeStateupdate4}
          onChangerevisit={this.changeStateupdate4}
        />
      </View>
    );
  };
  //--------------------------------------------RENDER FLAG------------------------------------------
  //Flag 1 -> Post sendData
  renderFlag1 = () => {
    const {sendData} = this.state;
    if (this.state.openFlag1 === true) {
      return (
        <View>
          <TextinputHeader
            tittle={'Nama Toko'}
            value={sendData.nama_toko}
            keyboardType={'default'}
            placeholder={'Nama Toko'}
            onChangeText={nama_toko =>
              this.changeState({name: 'nama_toko', val: nama_toko})
            }
          />
          <TextinputHeader
            tittle={'Nama Pemilik / Penanggung Jawab Toko'}
            value={sendData.nama_pemilik}
            keyboardType={'default'}
            placeholder={'Nama Pemilik Toko'}
            onChangeText={nama_pemilik =>
              this.changeState({name: 'nama_pemilik', val: nama_pemilik})
            }
          />
          <TextinputHeader
            tittle={'Nomor Handpone'}
            value={sendData.hp}
            keyboardType={'phone-pad'}
            placeholder={'No Handphone'}
            onChangeText={hp => this.changeState({name: 'hp', val: hp})}
          />
          <Dropflag
            databertemu={sendData.bertemu_dengan}
            datapemilik={sendData.status_kepemilikan}
            dataditributor={sendData.distributor}
            datakodepos={sendData.kode_pos}
            datarevisit={sendData.potensi_revisit}
            // ONCHANGE
            onChangebertemu={this.changeKost}
            onChangepemilik={this.changeKost}
            onChangedistributor={this.changeKost}
            onChangekodepos={this.changeKost}
            onChangerevisit={this.changeKost}
          />
          {/* <Text style={Styles.TextInput}>Distributor</Text>
          <Dropdistributor
            styles={Styles.droppicker}
            data={sendData.distributor}
            onChange={this.changeKost}
          /> */}
          <Text style={Styles.TextInput}>Status Toko</Text>
          <Droppicker
            styles={Styles.droppicker}
            data={sendData.ket_akusisi}
            onChange={this.changeKost}
          />
          {this.renderStatustoko()}
          {this.renderAlasanlainya()}
          <TextinputHeader
            tittle={'Catatan Kunjungan Toko'}
            keyboardType={'default'}
            placeholder={'Catatan Kunjungan'}
            value={sendData.note_akusisi}
            onChangeText={note_akusisi =>
              this.changeState({name: 'note_akusisi', val: note_akusisi})
            }
          />
          <View style={Styles.fotoSemua}>
            {this.renderFotoBelumInstall()}
            {this.renderFotoSudahInstall()}
          </View>
          <Button onPress={() => this.kiriminputData()} />
          {/* <Button onPress={() => this.kirimDataflag1()} /> */}
        </View>
      );
    }
  };
  //Flag 3 -> Put sendDataupdate
  renderFlag3 = () => {
    const {sendDataupdate3} = this.state;
    if (this.state.openFlag3 === true) {
      return (
        <View>
          <Text style={Styles.TextInput}>Nama Toko</Text>
          <View style={Styles.textInput}>
            <Text style={Styles.textFont}>{sendDataupdate3.nama_toko}</Text>
          </View>
          <Text style={Styles.TextInput}>Aktivasi KTP</Text>
          <View style={Styles.textInput}>
            <Text style={Styles.textFont}>{sendDataupdate3.ket_aktivasi}</Text>
          </View>
          <Text style={Styles.TextInput}>Catatan Kunjungan</Text>
          <TextInput
            keyboardType={'default'}
            placeholder={'Catatan Kunjungan'}
            value={sendDataupdate3.note_aktivasi}
            onChangeText={note_aktivasi =>
              this.changeStateupdate3({
                name: 'note_aktivasi',
                val: note_aktivasi,
              })
            }
          />
          <View style={Styles.fotoSudahinstall}>
            <View style={Styles.fotoSudahinstall}>
              <TouchableOpacity onPress={this.handleFotoktp}>
                <View style={Styles.viewFoto}>
                  {this.state.foto_ktp ? (
                    <Image
                      source={{
                        uri: `data:image/png;base64,${this.state.foto_ktp}`,
                      }}
                      resizeMode={'stretch'}
                      style={Styles.fotoData}
                    />
                  ) : (
                    <ImageDefault />
                  )}
                  <Text style={Styles.TextFoto}>Foto KTP</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handleFotoselfie}>
                <View style={Styles.viewFoto}>
                  {this.state.foto_selfie ? (
                    <Image
                      source={{
                        uri: `data:image/png;base64,${this.state.foto_selfie}`,
                      }}
                      resizeMode={'stretch'}
                      style={Styles.fotoData}
                    />
                  ) : (
                    <ImageDefault />
                  )}
                  <Text style={Styles.TextFoto}>Foto Selfie KTP</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={this.handleFotolain2}>
              <View style={Styles.viewFoto}>
                {this.state.foto_lain2 ? (
                  <Image
                    source={{
                      uri: `data:image/png;base64,${this.state.foto_lain2}`,
                    }}
                    resizeMode={'stretch'}
                    style={Styles.fotoData}
                  />
                ) : (
                  <ImageDefault />
                )}
                <Text style={Styles.TextFoto}>Foto Lainnya</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* <Button onPress={() => this.validationflag3()} /> */}
          {/* <Button onPress={() => this.kirimDataflag3()} /> */}
          <Button onPress={() => this.kiriminputData3()} />
        </View>
      );
    }
  };
  //Flag 4 -> Put sendDataupdate
  renderFlag4 = () => {
    if (this.state.openFlag4 === true) {
      const {sendDataupdate4} = this.state;
      return (
        <View>
          <TextinputHeader
            tittle={'Nama Toko'}
            value={sendDataupdate4.nama_toko}
            keyboardType={'default'}
            placeholder={'Nama Toko'}
            onChangeText={nama_toko =>
              this.changeStateupdate4({name: 'nama_toko', val: nama_toko})
            }
          />
          <TextinputHeader
            tittle={'Nama Pemilik / Penanggung Jawab Toko'}
            value={sendDataupdate4.nama_pemilik}
            keyboardType={'default'}
            placeholder={'Nama Pemilik Toko'}
            onChangeText={nama_pemilik =>
              this.changeStateupdate4({name: 'nama_pemilik', val: nama_pemilik})
            }
          />
          <TextinputHeader
            tittle={'Nomor Handpone'}
            value={sendDataupdate4.hp}
            keyboardType={'phone-pad'}
            placeholder={'No Handphone'}
            onChangeText={hp => this.changeStateupdate4({name: 'hp', val: hp})}
          />
          <Dropflag
            databertemu={sendDataupdate4.bertemu_dengan}
            datapemilik={sendDataupdate4.status_kepemilikan}
            dataditributor={sendDataupdate4.distributor}
            datakodepos={sendDataupdate4.kode_pos}
            datarevisit={sendDataupdate4.potensi_revisit}
            // ONCHANGE
            onChangebertemu={this.changesendDataupdate4}
            onChangepemilik={this.changesendDataupdate4}
            onChangedistributor={this.changesendDataupdate4}
            onChangekodepos={this.changesendDataupdate4}
            onChangerevisit={this.changesendDataupdate4}
          />
          {this.renderInstall4()}
          <Text style={Styles.TextInput}>Catatan Kunjungan</Text>
          <TextInput
            keyboardType={'default'}
            placeholder={'Catatan Kunjungan'}
            value={sendDataupdate4.note_akusisi}
            onChangeText={note_akusisi =>
              this.changeStateupdate4({
                name: 'note_akusisi',
                val: note_akusisi,
              })
            }
          />
          <View style={Styles.fotoSemua}>
            {this.renderFotoBelumInstall()}
            {this.renderFotoSudahInstall()}
          </View>
          <Button onPress={() => this.kiriminputData4()} />
        </View>
      );
    }
  };
  //Flag 5 -> Put sendDataupdate
  renderFlag5 = () => {
    const {sendDataupdate4} = this.state;
    if (this.state.openFlag5 === true) {
      return (
        <View>
          <Text style={Styles.TextInput} placeholder={'Nama Toko'}>
            Nama Toko
          </Text>
          <TextInput
            keyboardType={'default'}
            placeholder={'Nama Toko'}
            onChangeText={nama_toko =>
              this.changeStateupdate4({name: 'nama_toko', val: nama_toko})
            }
            value={sendDataupdate4.nama_toko}
          />
          <Text style={Styles.TextInput}>Nomor Handpone</Text>
          <TextInput
            keyboardType={'phone-pad'}
            placeholder={'No Handphone'}
            value={sendDataupdate4.hp}
            onChangeText={hp => this.changeStateupdate4({name: 'hp', val: hp})}
          />
          <Text style={Styles.TextInput}>Status Toko</Text>
          <View style={Styles.textInput}>
            <Text style={Styles.textFont}>{sendDataupdate4.ket_akusisi}</Text>
          </View>
          <Text style={Styles.TextInput}>Distributor</Text>
          <Dropdistributor
            styles={Styles.droppicker}
            data={sendDataupdate4.distributor}
            onChange={this.changesendDataupdate4}
          />
          {this.renderInstall5()}
          <Text style={Styles.TextInput}>Catatan Kunjungan</Text>
          <TextInput
            keyboardType={'default'}
            placeholder={'Catatan Kunjungan'}
            value={sendDataupdate4.note_aktivasi}
            onChangeText={note_aktivasi =>
              this.changeStateupdate4({
                name: 'note_aktivasi',
                val: note_aktivasi,
              })
            }
          />
          <View style={Styles.fotoSemua}>{this.renderFotoBelumInstall()}</View>
          {/* <Button onPress={() => this.kiriminputData5()} /> */}
          <Button onPress={() => this.validationflag5()} />
        </View>
      );
    }
  };
  //Flag 6 -> Put sendDataupdate3 karena Sama
  renderFlag6 = () => {
    const {sendDataupdate6} = this.state;
    if (this.state.openFlag6 === true) {
      return (
        <View>
          <Text style={Styles.TextInput}>Nama Toko</Text>
          <View style={Styles.textInput}>
            <Text style={Styles.textFont}>{sendDataupdate6.nama_toko}</Text>
          </View>
          <Text style={Styles.TextInput}>Status Toko</Text>
          <View style={Styles.textInput}>
            <Text style={Styles.textFont}>{sendDataupdate6.ket_akusisi}</Text>
          </View>
          <Text style={Styles.TextInput}>Aktivasi KTP</Text>
          <View style={Styles.textInput}>
            <Text style={Styles.textFont}>{sendDataupdate6.ket_aktivasi}</Text>
          </View>
          <Text style={Styles.TextInput}>Catatan Kunjungan</Text>
          <TextInput
            keyboardType={'default'}
            placeholder={'Catatan Kunjungan'}
            value={sendDataupdate6.note_aktivasi}
            onChangeText={note_aktivasi =>
              this.changeStateupdate6({
                name: 'note_aktivasi',
                val: note_aktivasi,
              })
            }
          />
          <View style={Styles.fotoSudahinstall}>
            <View style={Styles.fotoSudahinstall}>
              <TouchableOpacity onPress={this.handleFotoktp}>
                <View style={Styles.viewFoto}>
                  {this.state.foto_ktp ? (
                    <Image
                      source={{
                        uri: `data:image/png;base64,${this.state.foto_ktp}`,
                      }}
                      resizeMode={'stretch'}
                      style={Styles.fotoData}
                    />
                  ) : (
                    <ImageDefault />
                  )}
                  <Text style={Styles.TextFoto}>Foto KTP</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handleFotoselfie}>
                <View style={Styles.viewFoto}>
                  {this.state.foto_selfie ? (
                    <Image
                      source={{
                        uri: `data:image/png;base64,${this.state.foto_selfie}`,
                      }}
                      resizeMode={'stretch'}
                      style={Styles.fotoData}
                    />
                  ) : (
                    <ImageDefault />
                  )}
                  <Text style={Styles.TextFoto}>Foto Selfie KTP</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={this.handleFotolain2}>
              <View style={Styles.viewFoto}>
                {this.state.foto_lain2 ? (
                  <Image
                    source={{
                      uri: `data:image/png;base64,${this.state.foto_lain2}`,
                    }}
                    resizeMode={'stretch'}
                    style={Styles.fotoData}
                  />
                ) : (
                  <ImageDefault />
                )}
                <Text style={Styles.TextFoto}>Foto Lainnya</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* <Button onPress={() => this.validationflag6()} /> */}
          {/* <Button onPress={() => this.kirimDataflag6()} /> */}
          <Button onPress={() => this.kiriminputData6()} />
        </View>
      );
    }
  };

  handleopenCamera = () => {
    this.setState({foto: true});
  };
  handleOpenflag1 = () => {
    this.setState({showalert: false, openFlag1: true});
  };
  handleOpenflag3 = () => {
    this.setState({showalert2: false, openFlag3: true});
  };
  handleOpenflag4 = () => {
    this.setState({showalert3: false, openFlag4: true});
  };

  handleOpenflag5 = () => {
    this.setState({showalert4: false, openFlag5: true});
  };

  handleOpenflag6 = () => {
    this.setState({showalert6: false, openFlag6: true});
  };

  handleClose = () => {
    this.setState({
      showalert: false,
      showalert2: false,
      showalert3: false,
      showAler4: false,
    });
  };

  render() {
    if (this.state.foto === true) {
      return this.handleFoto();
    } else if (this.state.fotoseflie === true) {
      return this.handleFotofront();
    } else if (this.state.fotoother === true) {
      return this.handleFotoother();
    } else {
      return (
        <KeyboardAvoidingView style={Styles.container} enabled>
          <StatusBar hidden={true} />
          <HeaderComponent
            title={'Input Data'}
            onPress={() => this.props.navigation.navigate('StackPublic')}
          />
          <View>
            <DropdownAlert ref={ref => (this.dropDownAlertRef = ref)} />
          </View>
          <View>
            <SCLAlert
              show={this.state.showalert}
              onRequestClose={this.handleClose}
              theme="info"
              title="Informasi"
              subtitle="LE Code belum Install dan Aktivasi."
              subtitle2="Install dan aktivasi sekarang ?"
              headerIconComponent={
                <Icon name="edit" size={50} color="white" />
              }>
              <SCLAlertButton theme="info" onPress={this.handleOpenflag1}>
                OKE
              </SCLAlertButton>
              <SCLAlertButton theme="default" onPress={this.handleClose}>
                BATAL
              </SCLAlertButton>
            </SCLAlert>
          </View>
          <View>
            <SCLAlert
              show={this.state.showalert2}
              onRequestClose={this.handleClose}
              theme="success"
              title="Informasi"
              subtitle="Le Code sudah install dan Belum Aktivasi"
              subtitle2="Silahkan aktivasi sekarang !"
              headerIconComponent={
                <Icon name="address-card" size={50} color="white" />
              }>
              <SCLAlertButton theme="success" onPress={this.handleOpenflag3}>
                OKE
              </SCLAlertButton>
              <SCLAlertButton theme="default" onPress={this.handleClose}>
                BATAL
              </SCLAlertButton>
            </SCLAlert>
          </View>
          <View>
            <SCLAlert
              show={this.state.showalert3}
              onRequestClose={this.handleClose}
              theme="warning"
              title="Informasi"
              subtitle="LE Code sebelumnya tidak Install !"
              subtitle2="Install dan aktivasi sekarang ?"
              headerIconComponent={
                <Icon name="address-card" size={50} color="white" />
              }>
              <SCLAlertButton theme="warning" onPress={this.handleOpenflag4}>
                OKE
              </SCLAlertButton>
              <SCLAlertButton theme="default" onPress={this.handleClose}>
                BATAL
              </SCLAlertButton>
            </SCLAlert>
          </View>
          <View>
            <SCLAlert
              show={this.state.showalert4}
              onRequestClose={this.handleClose}
              theme="warning"
              title="Informasi"
              subtitle="LE Code sudah aktivasi, tapi belum melengkapi data Install !"
              subtitle2="Lengkapi data Install sekarang ?"
              headerIconComponent={
                <Icon name="address-card" size={50} color="white" />
              }>
              <SCLAlertButton theme="warning" onPress={this.handleOpenflag5}>
                OKE
              </SCLAlertButton>
              <SCLAlertButton theme="default" onPress={this.handleClose}>
                BATAL
              </SCLAlertButton>
            </SCLAlert>
          </View>
          <View>
            <SCLAlert
              show={this.state.showalert6}
              onRequestClose={this.handleClose}
              theme="warning"
              title="Informasi"
              subtitle="LE Code harus segera di lakukan kunjungan ulang!"
              subtitle2="untuk melengkapi kekurangan data, aktivasi sekarang ?"
              headerIconComponent={
                <Icon name="address-card" size={50} color="white" />
              }>
              <SCLAlertButton theme="warning" onPress={this.handleOpenflag6}>
                OKE
              </SCLAlertButton>
              <SCLAlertButton theme="default" onPress={this.handleClose}>
                BATAL
              </SCLAlertButton>
            </SCLAlert>
          </View>
          <Loading flag={this.state.isLoading} />
          <ScrollView>
            <View style={Styles.containPading}>
              <View>
                <Modal
                  isVisible={this.state.isModalSucces}
                  TextModal={'Data berhasil di input'}
                  source={require('../../asset/images/icon/success-icon.png')}
                  Press={() => this.onSuccessUpload()}
                />
                <Modal
                  isVisible={this.state.isModalFailed}
                  TextModal={'Silahkan cek kembali \n data yang telah di input'}
                  source={require('../../asset/images/icon/gagal-icon.png')}
                  Press={() => this.onFailedUpload()}
                />
              </View>
              <Text style={Styles.TextInput}>FMCG</Text>
              <Dropfmcg
                styles={Styles.droppicker}
                data={this.state.sendData.fmcg}
                onChange={fmcg => this.changeState({name: 'fmcg', val: fmcg})}
              />
              <Text style={Styles.TextInput}>LE CODE</Text>
              <View style={Styles.lecode}>
                <View style={Styles.inputlecode}>
                  <TextInput
                    keyboardType={'number-pad'}
                    placeholder={'LE CODE'}
                    onChangeText={le_code => this.setState({le_code})}
                    value={this.state.le_code}
                  />
                </View>
                <TouchableOpacity
                  style={Styles.buttonlecode}
                  onPress={() => this.validationcekLECODE()}>
                  <Icon
                    name={'search'}
                    size={25}
                    color={'white'}
                    style={Styles.icon}
                  />
                </TouchableOpacity>
              </View>
              {this.renderFlag1()}
              {this.renderFlag3()}
              {this.renderFlag4()}
              {this.renderFlag5()}
              {this.renderFlag6()}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      );
    }
  }
}
const mapStateToProps = state => {
  // console.log(state);
  return {
    action: state.input.action,
    // loginError: state.auth.loginError,
  };
};

const mapDispatchToProps = {
  flag1: payload => flag1(payload),
  flag3: payload => flag3(payload),
  flag5: payload => flag5(payload),
  flag6: payload => flag6(payload),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Inputdata);
