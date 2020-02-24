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
// import {SCLAlert, SCLAlertButton} from 'react-native-scl-alert';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
//import component
import Loading from '../../../../component/Loading';
//IMPORT DROPPPICKER REVISI FEBRUARI
import Dropnolimit from '../../../../component/Dropdown/droppicker/install/droptidakaktivasi';
//semua droppick
// import Droppicker from '../../../../component/Dropdown/droppicker';
// import Droppickeralasan from '../../../../component/Dropdown/droppicker/dropalasan';
import Dropfmcg from '../../../../component/Dropdown/droppicker/dropfmcg';
//drop_install
import Dropaktivasi from '../../../../component/Dropdown/droppicker/install/dropaktivasiktp';
// import Dropaktivasi_direct from '../../component/Dropdown/droppicker/install/dropaktivasiktp_direct';
import Dropdistributor from '../../../../component/Dropdown/droppicker/install/dropdistributor';
import Dropflag from '../../../../component/Dropdown/Dropflag';
import Dropinstall from '../../../../component/Dropdown/Dropinstall';
//droptambahan
import axios from 'axios';
// import {API_URL} from 'react-native-dotenv';
import Styles from './style';
import TextInput from '../../../../component/TextInput';
import HeaderComponent from '../../../../component/Header';
import TextinputHeader from '../../../../component/TextInput/TextinputHeader';
import Button from '../../../../component/Button';
// import Dropdown from '../../component/Dropdown';
import ImageDefault from './imagedefault';
import Modal from '../../../../component/Modal';
//Import Redux
import {connect} from 'react-redux';
//Import Action
import {flag1, flag3, flag5, flag6} from '../../../../redux/input/inputAction';
//import Constanta
import {SEND_FAILED, SEND_SUCCESS} from '../../../../redux/input/inputConstant';

class Inputdata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fmcg: '',
      le_code: '',
      status: '',
      hp: 0,
      errorMessage: null,
      openFlag3: false,
      openFlag4: false,
      openFlag5: false,
      openFlag6: false,
      fotoseflie: false,
      fotoother: false,
      agent_aktivasi: 0,
      agent_akusisi: 0,
      nama_toko: '',
      latitude: '',
      longitude: '',
      accuracy: '2.0',
      ket_akusisi: '',
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
        fintech: '',
        plafond: '',
        nama_toko: '',
        ket_akusisi: 'Install',
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
        bertemu_dengan: 'Aryo',
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

  idagent = async () => {
    const detail = this.props.navigation.state.params;
    const tokenx = await AsyncStorage.getItem('token');
    const iduser = await decode(tokenx);
    const lecode = detail.le_code;
    const open3 = detail.openFlag3;
    const open4 = detail.openFlag4;
    const namatoko = detail.namatoko;
    const hp = detail.handphone;
    const namapemilik = detail.namapemilik;
    const id = iduser.body[0];
    this.setState({
      agent_aktivasi: id,
      agent_akusisi: id,
      //ambil parameter
      nama_toko: namatoko,
      openFlag3: open3,
      openFlag4: open4,
      le_code: lecode,
      hp: hp,
      nama_pemilik: namapemilik,
    });
  };

  //------------------------------- FUNCTION VALIDATION BEFORE INPUT-------------------------------------------------

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
        // console.log(response);
        // console.log(response.status);
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
        // console.log(error);
        this.dropDownAlertRef.alertWithType('error', error);
        this.setState({
          isLoading: false,
        });
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
      nama_toko: this.state.nama_toko,
      hp: this.state.hp,
      ket_akusisi: sendDataupdate4.ket_akusisi,
      ket2_akusisi: sendDataupdate4.ket2_akusisi,
      ket_lain: sendDataupdate4.ket_lain,
      ket_aktivasi: sendDataupdate4.ket_aktivasi,
      fintech: sendDataupdate4.fintech,
      plafond: sendDataupdate4.plafond,
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
    // console.log(id);
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
        // console.log(response);
        // console.log(response.status);
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
        // console.log(error);
        this.dropDownAlertRef.alertWithType('error', error);
        this.setState({
          isLoading: false,
        });
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
        // console.log(error);
        this.dropDownAlertRef.alertWithType('error', error);
        this.setState({
          isLoading: false,
        });
      });
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
      const options = {quality: 0.2, base64: true};
      const data = await this.camera.takePictureAsync(options);
      // console.log(data.base64);
      this.setState({foto_dalam: data.base64, foto: false});
    }

    // if (this.camera) {
    //   const options = {quality: 0.2, base64: true};
    //   const data = await this.camera
    //     .takePictureAsync(options)
    //     .then(this.setState({foto_dalam: data.base64, foto: false}))
    //     .catch(error => {
    //       console.log(error);
    //     });
    //   // console.log(data.base64);
    // }
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
          <TouchableOpacity
            onPress={() =>
              this.setState({foto: false, fotoseflie: false, fotoother: false})
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
          key={132132}
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

  //----------------------------------------------------RENDER COMPONENT ACTION FLAG------------------------------------------------------

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
    const {sendDataupdate4} = this.state;
    if (sendDataupdate4.ket_aktivasi === 'Ya') {
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
    const {sendDataupdate4} = this.state;
    if (sendDataupdate4.ket_aktivasi === 'Ya') {
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
  //Flag 3 -> Put sendDataupdate
  renderFlag3 = () => {
    const {sendDataupdate3} = this.state;
    if (this.state.openFlag3 === true) {
      return (
        <View>
          <Text style={Styles.TextInput}>Nama Toko</Text>
          <View style={Styles.textInput}>
            <Text style={Styles.textFont}>{this.state.nama_toko}</Text>
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
            placeholder={'Nama Toko'}
            onChangeText={nama_toko => this.setState({nama_toko})}
            value={this.state.nama_toko}
          />
          <TextinputHeader
            tittle={'Nama Pemilik / Penanggung Jawab Toko'}
            value={sendDataupdate4.nama_pemilik}
            placeholder={'Nama Pemilik Toko'}
            onChangeText={nama_pemilik =>
              this.changeStateupdate4({name: 'nama_pemilik', val: nama_pemilik})
            }
          />
          <TextinputHeader
            tittle={'Nomor Handpone'}
            value={this.state.hp}
            keyboardType={'phone-pad'}
            placeholder={'No Handphone'}
            onChangeText={hp => this.setState({hp})}
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
            title={'Detail Data'}
            onPress={() => this.props.navigation.navigate('DetailData')}
          />
          <View>
            <DropdownAlert ref={ref => (this.dropDownAlertRef = ref)} />
          </View>
          <Loading flag={this.state.isLoading} />
          <ScrollView>
            <View style={Styles.containPading}>
              <View>
                <Modal
                  isVisible={this.state.isModalSucces}
                  TextModal={'Data berhasil di input'}
                  source={require('../../../../asset/images/icon/success-icon.png')}
                  Press={() => this.onSuccessUpload()}
                />
                <Modal
                  isVisible={this.state.isModalFailed}
                  TextModal={'Silahkan cek kembali \n data yang telah di input'}
                  source={require('../../../../asset/images/icon/gagal-icon.png')}
                  Press={() => this.onFailedUpload()}
                />
              </View>
              <Text style={Styles.TextInput}>FMCG</Text>
              <Dropfmcg
                styles={Styles.droppicker}
                data={this.state.fmcg}
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
              </View>
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
