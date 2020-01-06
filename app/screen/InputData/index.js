import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
// import {connect} from 'react-redux';
import RNLocation from 'react-native-location';
import ImagePicker from 'react-native-image-picker';
//semua droppick
import Droppicker from '../../component/Dropdown/droppicker';
import Droppickeralasan from '../../component/Dropdown/droppicker/dropalasan';
//drop_install
import Dropaktivasi from '../../component/Dropdown/droppicker/install/dropaktivasiktp';
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

const options = {
  title: 'Select Image',
  maxWidth: 720,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default class absen extends Component {
  static navigationOptions = () => ({
    title: 'Input Data',
    headerTransparent: false,
    headerTitleStyle: Styles.headerTitleStyle,
  });
  constructor(props) {
    super(props);
    this.state = {
      action: {
        belum_install: null,
        password: '',
      },
      status: '',
      errorMessage: null,
      isCompleteForm: false,
      sendData: {
        agent_akusisi: 15,
        le_code: '',
        nama_toko: '', //POST (To Bang Deny) AND GET (Bang Ferry)
        ket_akusisi: '',
        ket2_akusisi: '',
        ket_lain: '',
        ket_aktivasi: '',
        fintech: '',
        plafond: '',
        hp: '',
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
      isModalSucces: false,
      isModalFailed: false,
      foto_luar: null,
      fotoluar: null,
      foto_dalam: null,
      fotodalam: null,
      modalVisible: false,
    };
  }

  kiriminputData = () => {
    const {sendData} = this.state;
    const user = {
      agent_akusisi: sendData.agent_akusisi,
      le_code: sendData.le_code,
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
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5IjpbMTQsImFrdXNpc2kiLDNdLCJpYXQiOjE1NzgyOTkzNDMsImV4cCI6MTU3ODMwNjU0M30.HEIoAGvjxtZD1xu_znIzs0JkHw5J3yKabSajFcJoPbc';

    const header = {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
      'x-api-key':
        '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
    };
    // const config = {Authorization: 'Bearer' + token};
    // const config = {
    //   headers: {
    //     Authorization: 'bearer ' + token,
    //     'Content-Type': 'application/json',
    //     'x-api-key':
    //       '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
    //   },
    // };

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
        this.setState({
          isLoading: false,
        });
      })
      .then(response => {
        this.response = response.status;
        if (this.response.status === 201) {
          this.onSuccessUpload();
        } else if (this.response.status !== 201) {
          this.onFailedUpload();
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  onSuccessUpload() {
    this.setState({isModalSucces: true});
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

  onRequestFotoClose = () => {
    Alert.alert('Pengambilan Foto Batal');
  };

  onRequestFotoError = () => {
    Alert.alert('Pengambilan Foto Error');
  };

  renderStatustoko = () => {
    const {sendData} = this.state;
    if (sendData.ket_akusisi === 'Belum Install') {
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
          <Text style={Styles.TextInput}>Nomor Handpone</Text>
          <TextInput
            keyboardType={'phone-pad'}
            placeholder={'No Handphone'}
            value={sendData.hp}
            onChangeText={hp => this.changeState({name: 'hp', val: hp})}
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
          <Text style={Styles.TextInput}>Distributor</Text>
          <Dropdistributor
            styles={Styles.droppicker}
            data={this.state.sendData.distributor}
            onChange={this.changeKost}
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

  renderFotoSudahInstall = () => {
    const {sendData} = this.state;
    if (sendData.ket_akusisi === 'Install') {
      return (
        <View style={Styles.fotoSudahinstall}>
          <TouchableOpacity onPress={() => console.warn}>
            <View style={Styles.viewFoto}>
              <Image
                source={require('../../asset/images/insert-photo.png')}
                resizeMode={'stretch'}
                style={Styles.fotoData}
              />
              <Text style={Styles.TextFoto}>Foto Lainnya </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.warn('Berhasil')}>
            <View style={Styles.viewFoto}>
              <Image
                source={require('../../asset/images/insert-photo.png')}
                resizeMode={'stretch'}
                style={Styles.fotoData}
              />
              <Text style={Styles.TextFoto}>Foto Lainnya </Text>
            </View>
          </TouchableOpacity>
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
            <Text style={Styles.TextFoto}>Foto Dalam</Text>
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
            <Text style={Styles.TextFoto}>Foto Luar</Text>
          </View>
        </TouchableOpacity>
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
  };

  // inputProcess() {
  //   const {sendData} = this.state;
  //   if (sendData.nama_toko === '' || sendData.nama_toko == null) {
  //     this.setState({error: true, isModalFailed: true});
  //   } else {
  //     this.setState({
  //       error: false,
  //       isModalSucces: true,
  //     });
  //   }
  //   return true;
  // }

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
            const innerFormData = {...this.state.sendData};
            innerFormData.latitude = lat.toString();
            innerFormData.longitude = long.toString();
            this.setState({sendData: innerFormData});
          },
        );
      }
    });
  }

  render() {
    const {sendData} = this.state;
    return (
      <KeyboardAvoidingView style={Styles.container} enabled>
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
            <Text style={Styles.TextInput}>LE CODE</Text>
            <TextInput
              keyboardType={'number-pad'}
              placeholder={'LE CODE'}
              onChangeText={le_code =>
                this.changeState({name: 'le_code', val: le_code})
              }
              value={sendData.le_code}
            />
            <Text style={Styles.TextInput} placeholder={'Nama Toko'}>
              Nama Toko
            </Text>
            <TextInput
              keyboardType={'default'}
              placeholder={'Nama Toko'}
              onChangeText={nama_toko =>
                this.changeState({name: 'nama_toko', val: nama_toko})
              }
              value={sendData.nama_toko}
            />
            <Text style={Styles.TextInput}>Status Toko</Text>
            <Droppicker
              styles={Styles.droppicker}
              data={this.state.sendData.ket_akusisi}
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
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
