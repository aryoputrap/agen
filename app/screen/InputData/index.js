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
// import {StackActions, NavigationActions} from 'react-navigation';
// import {connect} from 'react-redux';
import RNLocation from 'react-native-location';
import ImagePicker from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';
import {SCLAlert, SCLAlertButton} from 'react-native-scl-alert';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import token from '../../config/Api/token';
//import component
import Loading from '../../component/Loading';
//semua droppick
import Droppicker from '../../component/Dropdown/droppicker';
import Droppickeralasan from '../../component/Dropdown/droppicker/dropalasan';
import Dropfmcg from '../../component/Dropdown/droppicker/dropfmcg';
//drop_install
import Dropaktivasi from '../../component/Dropdown/droppicker/install/dropaktivasiktp';
// import Dropaktivasi_direct from '../../component/Dropdown/droppicker/install/dropaktivasiktp_direct';
import Dropdistributor from '../../component/Dropdown/droppicker/install/dropdistributor';
import Droppjp from '../../component/Dropdown/droppicker/install/droppjp';
import Dropjenistoko from '../../component/Dropdown/droppicker/install/dropjenistoko';
import Dropukuran from '../../component/Dropdown/droppicker/install/dropukurantoko';
import Droplokasi from '../../component/Dropdown/droppicker/install/droplokasi';
import Dropplang from '../../component/Dropdown/droppicker/install/dropplang';
import Dropkulkas from '../../component/Dropdown/droppicker/install/dropkulkas';
import Dropparkir from '../../component/Dropdown/droppicker/install/dropparkir';
import axios from 'axios';
// import {API_URL} from 'react-native-dotenv';
import Styles from './style';
import TextInput from '../../component/TextInput';
import Button from '../../component/Button';
// import Dropdown from '../../component/Dropdown';
import ImageDefault from './imagedefault';
import Modal from '../../component/Modal';

export default class absen extends Component {
  static navigationOptions = () => ({
    title: 'Input Data',
    headerTransparent: false,
    headerTitleStyle: Styles.headerTitleStyle,
    headerStyle: Styles.headerStyle,
  });

  constructor(props) {
    super(props);
    this.state = {
      openFlag1: false,
      openFlag2: false,
      openFlag3: false,
      openFlag4: false,
      openFlag5: false,
      showalert: false,
      showalert2: false,
      showalert3: false,
      showalert4: false,
      showalert5: false,
      action: {
        belum_install: null,
        password: '',
      },
      status: '',
      errorMessage: null,
      isCompleteForm: false,
      le_code: '',
      nama_toko: '',
      hp: 0,
      fintech: '',
      plafond: '',
      ket_akusisi: '',
      ket_aktivasi: '',
      sendData: {
        id: null,
        flag: null,
        fmcg: 1,
        is_register: 1,
        agent_akusisi: 15,
        le_code: '',
        nama_toko: '',
        ket_akusisi: '',
        ket2_akusisi: '',
        ket_lain: '',
        ket_aktivasi: '',
        hp: 0,
        kota: '',
        provinsi: '',
        distributor: 1,
        pjp: '',
        sales: '',
        jenis_toko: '',
        ukuran: '',
        lokasi: '',
        plang: '',
        kulkas: '',
        parkir: '',
        note_akusisi: '',
        latitude: '-8.546',
        longitude: '105.823629',
        accuracy: '2.0',
        foto_dalam: null,
        foto_luar: null,
        foto_ktp: '',
        foto_selfie: '',
        foto_lain: '',
        foto_lain2: '',
      },
      sendDataupdate: {
        id: null,
        flag: null,
        fmcg: 1,
        is_register: 1,
        agent_akusisi: 15,
        le_code: '',
        nama_toko: '',
        ket_akusisi: '',
        ket2_akusisi: '',
        ket_lain: '',
        ket_aktivasi: '',
        hp: 0,
        kota: '',
        provinsi: '',
        distributor: 1,
        pjp: '',
        sales: '',
        jenis_toko: '',
        ukuran: '',
        lokasi: '',
        plang: '',
        kulkas: '',
        parkir: '',
        note_akusisi: '',
        latitude: '-8.546',
        longitude: '105.823629',
        accuracy: '2.0',
        foto_dalam: null,
        foto_luar: null,
        foto_ktp: '',
        foto_selfie: '',
        foto_lain: '',
        foto_lain2: '',
      },
      error: false,
      isLoading: false,
      isModalSucces: false,
      isModalFailed: false,
      foto_luar: null,
      fotoluar: null,
      foto_dalam: null,
      fotodalam: null,
      fotoktp: null,
      foto_ktp: null,
      modalVisible: false,
    };
  }

  componentDidMount() {
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
            const innerFormData = {...this.state.sendData} && {
              ...this.state.sendDataupdate,
            };
            innerFormData.latitude = lat.toString();
            innerFormData.longitude = long.toString();
            this.setState({
              sendData: innerFormData,
              senDataupdate: innerFormData,
            });
          },
        );
      }
    });
  }

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
    } else {
      this.setState({isLoading: true});
      this.cekLECODE();
    }
  };

  cekLECODE = () => {
    const user = {
      le_code: this.state.le_code,
    };
    const Token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5IjpbMTUsImFyeW9fMSIsM10sImlhdCI6MTU3OTgzODgwMCwiZXhwIjoxNTc5ODY3NjAwfQ.Jhw5nHiRoHyIa1chqYqnfCUzohHkoQoFuDwdZ0WI7vQ';

    console.log(user);
    const header = {
      Authorization: 'Bearer ' + Token,
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
        this.response = response.data;
        console.log(response.data.message);
        console.log(response.status);
        console.log(response.data.flag);
        // console.log(response.data.data.fintech);
        if (response.data.flag === 1) {
          this.setState({
            showalert: true,
          });
        } else if (response.data.flag === 2) {
          this.setState({
            isLoading: false,
            showalert5: true,
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
            ket_aktivasi: 'Ya',
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
            isLoading: false,
          });
        } else if (response.data.flag === 4) {
          this.setState({
            showalert3: true,
            openFlag1: false,
            openFlag2: false,
            openFlag5: false,
            ket_akusisi: 'Install',
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
            isLoading: false,
          });
        } else if (response.data.flag === 5) {
          this.setState({
            showalert4: true,
            openFlag1: false,
            openFlag2: false,
            openFlag4: false,
            ket_akusisi: 'Install',
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
            isLoading: false,
          });
        }
        // console.log(response.status);
      })
      .catch(error => {
        this.dropDownAlertRef.alertWithType(
          'error',
          'LE Code tidak terdaftar!',
          error.message,
        );
      });
  };

  kiriminputData = () => {
    const {sendData} = this.state;
    const user = {
      fmcg: sendData.fmcg,
      is_register: sendData.is_register,
      agent_akusisi: sendData.agent_akusisi,
      le_code: this.state.le_code,
      nama_toko: this.state.nama_toko,
      ket_akusisi: sendData.ket_akusisi,
      ket2_akusisi: sendData.ket2_akusisi,
      ket_lain: sendData.ket_lain,
      ket_aktivasi: sendData.ket_aktivasi,
      fintech: this.state.fintech,
      plafond: this.state.plafond,
      hp: this.state.hp,
      kota: sendData.kota,
      provinsi: sendData.provinsi,
      distributor: 1,
      pjp: sendData.pjp,
      sales: sendData.sales,
      jenis_toko: sendData.jenis_toko,
      ukuran: sendData.ukuran,
      lokasi: sendData.lokasi,
      plang: sendData.plang,
      kulkas: sendData.kulkas,
      parkir: sendData.parkir,
      note_akusisi: sendData.note_akusisi,
      latitude: sendData.latitude,
      longitude: sendData.longitude,
      accuracy: sendData.accuracy,
      foto_dalam: this.state.foto_dalam,
      foto_luar: this.state.foto_luar,
      foto_ktp: sendData.foto_ktp,
      foto_selfie: sendData.foto_selfie,
      foto_lain: sendData.foto_lain,
      foto_lain2: sendData.foto_lain2,
    };
    console.log(user);

    const header = {
      Authorization: 'Bearer ' + token,
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

  kiriminputDataupdate = () => {
    const {senDataupdate} = this.state;
    const user = {
      fmcg: senDataupdate.fmcg,
      is_register: senDataupdate.is_register,
      agent_akusisi: senDataupdate.agent_akusisi,
      le_code: this.state.le_code,
      nama_toko: this.state.nama_toko,
      ket_akusisi: this.state.ket_akusisi,
      ket2_akusisi: senDataupdate.ket2_akusisi,
      ket_lain: senDataupdate.ket_lain,
      ket_aktivasi: this.state.ket_aktivasi,
      fintech: this.state.fintech,
      plafond: this.state.plafond,
      hp: this.state.hp,
      kota: senDataupdate.kota,
      provinsi: senDataupdate.provinsi,
      distributor: 1,
      pjp: senDataupdate.pjp,
      sales: senDataupdate.sales,
      jenis_toko: senDataupdate.jenis_toko,
      ukuran: senDataupdate.ukuran,
      lokasi: senDataupdate.lokasi,
      plang: senDataupdate.plang,
      kulkas: senDataupdate.kulkas,
      parkir: senDataupdate.parkir,
      note_akusisi: senDataupdate.note_akusisi,
      latitude: senDataupdate.latitude,
      longitude: senDataupdate.longitude,
      accuracy: senDataupdate.accuracy,
      foto_dalam: this.state.foto_dalam,
      foto_luar: this.state.foto_luar,
      foto_ktp: senDataupdate.foto_ktp,
      foto_selfie: senDataupdate.foto_selfie,
      foto_lain: senDataupdate.foto_lain,
      foto_lain2: senDataupdate.foto_lain2,
    };
    console.log(user);

    const header = {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
      'x-api-key':
        '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
    };
    axios({
      method: 'PUT',
      url: 'http://support.tokopandai.id:3003/Api/akusisi/14',
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

  onSuccessUpload() {
    this.setState({isLoading: false});
    this.props.navigation.navigate('StackPublic');
  }

  onFailedUpload() {
    this.setState({isModalFailed: false});
  }

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

  changeStateupdate(payload) {
    const {name, val} = payload;
    const innerFormData = {...this.state.sendDataupdate};
    innerFormData[name] = val;
    // console.log(innerFormData);
    this.setState({sendDataupdate: innerFormData});
    const isCompleteForm = Object.values(this.state.sendDataupdate).every(
      e => e !== '',
    );
    this.setState({isCompleteForm});
  }

  changeKost = async (name, value) => {
    await this.setState(prevState => ({
      sendData: {
        ...prevState.sendData,
        [name]: value,
      },
    }));
    // console.log(this.state.sendData);
  };

  handleFotodalam = () => {
    const options = {
      title: 'Ambil Foto',
      maxWidth: 500,
      maxHeight: 500,
      quality: 0.5,
    };
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        this.onRequestFotoClose();
      } else if (response.error) {
        this.onRequestFotoError('And error occured: ', response.error);
      } else {
        const source = {uri: response.uri};
        // const sourceencode = {uri: response.data};
        // console.log(sourceencode);
        // console.log(source);
        this.setState({
          foto_dalam: response.data,
          fotodalam: source,
        });
      }
    });
  };

  handleFotoluar = () => {
    const options = {
      title: 'Select Image',
      maxWidth: 500,
      maxHeight: 500,
      quality: 0.5,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        this.onRequestFotoClose();
      } else if (response.error) {
        this.onRequestFotoError('And error occured: ', response.error);
      } else {
        const sourcefotoLuar = {uri: response.uri};
        console.log('sourcefotoLuar');
        this.setState({
          foto_luar: response.data,
          fotoluar: sourcefotoLuar,
        });
      }
    });
  };

  handleFotoktp = () => {
    ImageCropPicker.openCamera({
      width: 30,
      height: 40,
      useFrontCamera: true,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  onRequestFotoClose = () => {
    Alert.alert('Pengambilan Foto Batal');
  };

  onRequestFotoError = () => {
    Alert.alert('Pengambilan Foto Error');
  };

  renderStatustoko = () => {
    const {sendData} = this.state;
    if (sendData.ket_akusisi === 'No Install') {
      return (
        <View>
          <Text style={Styles.TextInput}>Alasan Belum Install</Text>
          <Droppickeralasan
            styles={Styles.droppicker}
            data={this.state.sendData.ket2_akusisi}
            onChange={this.changeKost}
          />
        </View>
      );
    } else if (sendData.ket_akusisi === 'Install') {
      return (
        <View>
          <Text style={Styles.TextInput}>Aktivasi KTP</Text>
          <Dropaktivasi
            styles={Styles.droppicker}
            data={this.state.sendData.ket_aktivasi}
            onChange={this.changeKost}
          />
          <Text style={Styles.TextInput}>Provinsi Tempat Usaha</Text>
          <TextInput
            keyboardType={'default'}
            placeholder={'Provinsi Tempat Usaha'}
            value={sendData.provinsi}
            onChangeText={provinsi =>
              this.changeState({name: 'provinsi', val: provinsi})
            }
          />
          <Text style={Styles.TextInput}>Kota Tempat Usaha</Text>
          <TextInput
            keyboardType={'default'}
            placeholder={'Kota Tempat Usaha'}
            value={sendData.kota}
            onChangeText={kota => this.changeState({name: 'kota', val: kota})}
          />
          <Text style={Styles.TextInput}>PJP</Text>
          <Droppjp
            styles={Styles.droppicker}
            data={this.state.sendData.pjp}
            onChange={this.changeKost}
          />
          <Text style={Styles.TextInput}>Nama Sales Distributor</Text>
          <TextInput
            keyboardType={'default'}
            placeholder={'Nama Sales'}
            value={sendData.sales}
            onChangeText={sales =>
              this.changeState({name: 'sales', val: sales})
            }
          />
          <Text style={Styles.TextInput}>Jenis Toko</Text>
          <Dropjenistoko
            styles={Styles.droppicker}
            data={this.state.sendData.jenis_toko}
            onChange={this.changeKost}
          />
          <Text style={Styles.TextInput}>Ukuran Toko</Text>
          <Dropukuran
            styles={Styles.droppicker}
            data={this.state.sendData.ukuran}
            onChange={this.changeKost}
          />
          <Text style={Styles.TextInput}>Lokasi Toko</Text>
          <Droplokasi
            styles={Styles.droppicker}
            data={this.state.sendData.lokasi}
            onChange={this.changeKost}
          />
          <Text style={Styles.TextInput}>Ada Nama Toko(Plang)</Text>
          <Dropplang
            styles={Styles.droppicker}
            data={this.state.sendData.plang}
            onChange={this.changeKost}
          />
          <Text style={Styles.TextInput}>Punya Kulkas</Text>
          <Dropkulkas
            styles={Styles.droppicker}
            data={this.state.sendData.kulkas}
            onChange={this.changeKost}
          />
          <Text style={Styles.TextInput}>Area Parkir</Text>
          <Dropparkir
            styles={Styles.droppicker}
            data={this.state.sendData.parkir}
            onChange={this.changeKost}
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

  rendersudahAktivasi = () => {
    const {sendData} = this.state;
    if (sendData.ket_aktivasi === 'Ya') {
      return (
        <View style={Styles.fotoSudahinstall}>
          <TouchableOpacity onPress={() => console.warn}>
            <View style={Styles.viewFoto}>
              <Image
                source={require('../../asset/images/insert-photo.png')}
                resizeMode={'stretch'}
                style={Styles.fotoData}
              />
              <Text style={Styles.TextFoto}>Foto KTP </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.warn('Berhasil')}>
            <View style={Styles.viewFoto}>
              <Image
                source={require('../../asset/images/insert-photo.png')}
                resizeMode={'stretch'}
                style={Styles.fotoData}
              />
              <Text style={Styles.TextFoto}>Foto Selfie KTP</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  };

  renderFotoBelumInstall = () => {
    return (
      <View style={Styles.fotoArea}>
        <TouchableOpacity onPress={this.handleFotodalam}>
          <View style={Styles.viewFoto}>
            {this.state.fotodalam ? (
              <Image
                source={this.state.fotodalam}
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
            {this.state.fotoluar ? (
              <Image
                source={this.state.fotoluar}
                resizeMode={'stretch'}
                style={Styles.fotoData}
              />
            ) : (
              <ImageDefault />
            )}
            <Text style={Styles.TextFoto}>Luar Toko</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.handleFotoktp()}>
          <View style={Styles.viewFoto}>
            {this.state.fotoktp ? (
              <Image
                source={this.state.fotoktp}
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
    if (sendData.ket_akusisi === 'Install') {
      return (
        <View style={Styles.fotoSudahinstall}>
          {this.rendersudahAktivasi()}
          <TouchableOpacity onPress={() => console.warn('masuk')}>
            <View style={Styles.viewFoto}>
              <Image
                source={require('../../asset/images/insert-photo.png')}
                resizeMode={'stretch'}
                style={Styles.fotoData}
              />
              <Text style={Styles.TextFoto}>Foto Lainnya</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  };

  renderInstall = () => {
    const {sendData} = this.state;
    return (
      <View>
        <Text style={Styles.TextInput}>Status Toko</Text>
        <View style={Styles.textInput}>
          <Text style={Styles.textFont}>{this.state.ket_akusisi}</Text>
        </View>
        <Text style={Styles.TextInput}>Aktivasi KTP</Text>
        <Dropaktivasi
          styles={Styles.droppicker}
          data={this.state.ket_aktivasi}
          onChange={this.changeKost}
        />
        <Text style={Styles.TextInput}>Provinsi Tempat Usaha</Text>
        <TextInput
          keyboardType={'default'}
          placeholder={'Provinsi Tempat Usaha'}
          value={sendData.provinsi}
          onChangeText={provinsi =>
            this.changeState({name: 'provinsi', val: provinsi})
          }
        />
        <Text style={Styles.TextInput}>Kota Tempat Usaha</Text>
        <TextInput
          keyboardType={'default'}
          placeholder={'Kota Tempat Usaha'}
          value={sendData.kota}
          onChangeText={kota => this.changeState({name: 'kota', val: kota})}
        />
        <Text style={Styles.TextInput}>PJP</Text>
        <Droppjp
          styles={Styles.droppicker}
          data={this.state.sendData.pjp}
          onChange={this.changeKost}
        />
        <Text style={Styles.TextInput}>Nama Sales Distributor</Text>
        <TextInput
          keyboardType={'default'}
          placeholder={'Nama Sales'}
          value={sendData.sales}
          onChangeText={sales => this.changeState({name: 'sales', val: sales})}
        />
        <Text style={Styles.TextInput}>Jenis Toko</Text>
        <Dropjenistoko
          styles={Styles.droppicker}
          data={this.state.sendData.jenis_toko}
          onChange={this.changeKost}
        />
        <Text style={Styles.TextInput}>Ukuran Toko</Text>
        <Dropukuran
          styles={Styles.droppicker}
          data={this.state.sendData.ukuran}
          onChange={this.changeKost}
        />
        <Text style={Styles.TextInput}>Lokasi Toko</Text>
        <Droplokasi
          styles={Styles.droppicker}
          data={this.state.sendData.lokasi}
          onChange={this.changeKost}
        />
        <Text style={Styles.TextInput}>Ada Nama Toko(Plang)</Text>
        <Dropplang
          styles={Styles.droppicker}
          data={this.state.sendData.plang}
          onChange={this.changeKost}
        />
        <Text style={Styles.TextInput}>Punya Kulkas</Text>
        <Dropkulkas
          styles={Styles.droppicker}
          data={this.state.sendData.kulkas}
          onChange={this.changeKost}
        />
        <Text style={Styles.TextInput}>Area Parkir</Text>
        <Dropparkir
          styles={Styles.droppicker}
          data={this.state.sendData.parkir}
          onChange={this.changeKost}
        />
      </View>
    );
  };
  //Flag 1 -> Post sendData
  renderFlag1 = () => {
    const {sendData} = this.state;
    if (this.state.openFlag1 === true) {
      return (
        <View>
          <Text style={Styles.TextInput} placeholder={'Nama Toko'}>
            Nama Toko
          </Text>
          <TextInput
            keyboardType={'default'}
            placeholder={'Nama Toko'}
            onChangeText={nama_toko =>
              this.changeState({name: 'nama_toko', val: nama_toko})
            }
            value={this.state.nama_toko}
          />
          <Text style={Styles.TextInput}>Nomor Handpone</Text>
          <TextInput
            keyboardType={'phone-pad'}
            placeholder={'No Handphone'}
            value={this.state.hp}
            onChangeText={hp => this.setState({hp})}
          />
          <Text style={Styles.TextInput}>Status Toko</Text>
          <Droppicker
            styles={Styles.droppicker}
            data={this.state.sendData.ket_akusisi}
            onChange={this.changeKost}
          />
          <Text style={Styles.TextInput}>Distributor</Text>
          <Dropdistributor
            styles={Styles.droppicker}
            data={this.state.sendData.distributor}
            onChange={this.changeKost}
          />
          {this.renderStatustoko()}
          {this.renderAlasanlainya()}
          <Text style={Styles.TextInput}>Catatan Kunjungan</Text>
          <TextInput
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
        </View>
      );
    }
  };
  //Flag 3 -> Put sendDataupdate
  renderFlag3 = () => {
    if (this.state.openFlag3 === true) {
      const {sendData} = this.state;
      return (
        <View>
          <Text style={Styles.TextInput}>Aktivasi KTP</Text>
          <View style={Styles.textInput}>
            <Text style={Styles.textFont}>{this.state.ket_aktivasi}</Text>
          </View>
          <Text style={Styles.TextInput}>Catatan Kunjungan</Text>
          <TextInput
            keyboardType={'default'}
            placeholder={'Catatan Kunjungan'}
            value={sendData.note_akusisi}
            onChangeText={note_akusisi =>
              this.changeState({name: 'note_akusisi', val: note_akusisi})
            }
          />
          <View style={Styles.fotoSudahinstall}>
            <View style={Styles.fotoSudahinstall}>
              <TouchableOpacity onPress={() => console.warn}>
                <View style={Styles.viewFoto}>
                  <Image
                    source={require('../../asset/images/insert-photo.png')}
                    resizeMode={'stretch'}
                    style={Styles.fotoData}
                  />
                  <Text style={Styles.TextFoto}>Foto KTP </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.warn('Berhasil')}>
                <View style={Styles.viewFoto}>
                  <Image
                    source={require('../../asset/images/insert-photo.png')}
                    resizeMode={'stretch'}
                    style={Styles.fotoData}
                  />
                  <Text style={Styles.TextFoto}>Foto Selfie KTP</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => console.warn('masuk')}>
              <View style={Styles.viewFoto}>
                <Image
                  source={require('../../asset/images/insert-photo.png')}
                  resizeMode={'stretch'}
                  style={Styles.fotoData}
                />
                <Text style={Styles.TextFoto}>Foto Lainnya</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Button onPress={() => this.kiriminputupdateData()} />
        </View>
      );
    }
  };
  //Flag 4 -> Put sendDataupdate
  renderFlag4 = () => {
    const {sendData} = this.state;
    if (this.state.openFlag4 === true) {
      return (
        <View>
          <Text style={Styles.TextInput} placeholder={'Nama Toko'}>
            Nama Toko
          </Text>
          <TextInput
            keyboardType={'default'}
            placeholder={'Nama Toko'}
            onChangeText={nama_toko =>
              this.changeState({name: 'nama_toko', val: nama_toko})
            }
            value={this.state.nama_toko}
          />
          <Text style={Styles.TextInput}>Nomor Handpone</Text>
          <TextInput
            keyboardType={'phone-pad'}
            placeholder={'No Handphone'}
            value={this.state.hp}
            onChangeText={hp => this.setState({hp})}
          />
          <Text style={Styles.TextInput}>Distributor</Text>
          <Dropdistributor
            styles={Styles.droppicker}
            data={this.state.sendData.distributor}
            onChange={this.changeKost}
          />
          {this.renderInstall()}
          <Text style={Styles.TextInput}>Catatan Kunjungan</Text>
          <TextInput
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
          <Button onPress={() => this.kiriminputupdateData()} />
        </View>
      );
    }
  };
  //Flag 5 -> Put sendDataupdate
  renderFlag5 = () => {
    const {sendData} = this.state;
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
              this.changeState({name: 'nama_toko', val: nama_toko})
            }
            value={this.state.nama_toko}
          />
          <Text style={Styles.TextInput}>Nomor Handpone</Text>
          <TextInput
            keyboardType={'phone-pad'}
            placeholder={'No Handphone'}
            value={this.state.hp}
            onChangeText={hp => this.setState({hp})}
          />
          <Text style={Styles.TextInput}>Status Toko</Text>
          <Droppicker
            styles={Styles.droppicker}
            data={this.state.sendData.ket_akusisi}
            onChange={this.changeKost}
          />
          <Text style={Styles.TextInput}>Distributor</Text>
          <Dropdistributor
            styles={Styles.droppicker}
            data={this.state.sendData.distributor}
            onChange={this.changeKost}
          />
          {this.renderStatustoko()}
          {this.renderAlasanlainya()}
          <Text style={Styles.TextInput}>Catatan Kunjungan</Text>
          <TextInput
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
        </View>
      );
    }
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

  handleClose = () => {
    this.setState({
      showalert: false,
      showalert2: false,
      showalert3: false,
      showAler4: false,
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={Styles.container} enabled>
        <StatusBar translucent backgroundColor="transparent" />
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
            headerIconComponent={<Icon name="edit" size={50} color="white" />}>
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
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
