import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
// import {connect} from 'react-redux';
import RNLocation from 'react-native-location';
// import ImagePicker from 'react-native-image-picker';
import Styles from './style';
import TextInput from '../../component/TextInput';
import Button from '../../component/Button';
import Dropdown from '../../component/Dropdown';
import {
  AREA_PARKIR,
  KULKAS,
  ADA_NAMA_TOKO,
  LOKASI_TOKO,
  UKURAN_TOKO,
  NPS,
  PJP,
  JENIS_TOKO,
  STATUS_TOKO,
  ALASAN_BELUMINSTAL,
  AKTIVASI_KTP,
} from '../../utility/InputData_Utility';
import Modal from '../../component/Modal';
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
      errorMessage: null,
      isCompleteForm: false,
      sendData: {
        le_code: '',
        // nama_toko: '', //POST (To Bang Deny) AND GET (Bang Ferry)
        ket_akusisi: '',
        // ket2_akusisi: '',
        // ket_lain: '',
        // ket_aktivitas: '',
        // fintech: '',
        // plafond: '',
        // hp: '',
        // kota: '',
        // provinsi: '',
        // distributor: '',
        // pjp: '',
        // sales: '',
        // jenis_toko: '',
        // ukuran: '',
        // lokasi: '',
        // plang: '',
        // kulkas: '',
        // parkir: '',
        // note_akuisisi: '',
        // agent_akuisisi: '', //login
        // latitude: '', //login
        // longtitude: '', //login
        // accuracy: '', //login
        // foto_dalam: '',
        // foto_luar: '',
        // foto_ktp: '',
        // foto_selfie: '',
        // foto_lain: '',
      },
      error: false,
      isModalSucces: false,
      isModalFailed: false,
    };
  }
  changeState(payload) {
    const {name, val} = payload;
    const innerFormData = {...this.state.sendData};
    innerFormData[name] = val;
    console.log(innerFormData);
    this.setState({sendData: innerFormData});
    const isCompleteForm = Object.values(this.state.sendData).every(
      e => e !== '',
    );
    this.setState({isCompleteForm});
  }
  renderStatustoko = () => {
    const {sendData} = this.state;
    if (sendData.ket_akusisi === '1') {
      return (
        <View>
          <Text style={Styles.TextInput}>Alasan Belum Install</Text>
          <View style={Styles.dropdown}>
            <TouchableOpacity style={Styles.buttonDropdown}>
              <Dropdown
                style={Styles.dropdownStyle}
                defaultValue={'Alasan Belum Install'}
                dropdownStyle={Styles.dropStyle.dropdown3}
                animated={true}
                options={ALASAN_BELUMINSTAL}
                onSelect={ket2_akusisi =>
                  this.changeState({name: 'ket2_akusisi', val: ket2_akusisi})
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    } else if (sendData.ket_akusisi === '0') {
      return (
        <View>
          <Text style={Styles.TextInput}>Aktivasi KTP</Text>
          <View style={Styles.dropdown}>
            <TouchableOpacity style={Styles.buttonDropdown}>
              <Dropdown
                style={Styles.dropdownStyle}
                dropdownStyle={Styles.dropStyle.dropdown2}
                defaultValue={'Aktivasai KTP'}
                options={AKTIVASI_KTP}
                onSelect={ket_aktivitas =>
                  this.changeState({name: 'ket_aktivitas', val: ket_aktivitas})
                }
              />
            </TouchableOpacity>
          </View>
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
          <View style={Styles.dropdown}>
            <TouchableOpacity style={Styles.buttonDropdown}>
              <Dropdown
                style={Styles.dropdownStyle}
                dropdownStyle={Styles.dropStyle.dropdown2}
                defaultValue={'Distributor'}
                options={NPS}
                onSelect={distributor =>
                  this.changeState({name: 'distributor', val: distributor})
                }
              />
            </TouchableOpacity>
          </View>
          <Text style={Styles.TextInput}>PJP</Text>
          <View style={Styles.dropdown}>
            <TouchableOpacity style={Styles.buttonDropdown}>
              <Dropdown
                style={Styles.dropdownStyle}
                dropdownStyle={Styles.dropStyle.dropdown1}
                defaultValue={'PJP'}
                options={PJP}
                onSelect={pjp => this.changeState({name: 'pjp', val: pjp})}
              />
            </TouchableOpacity>
          </View>
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
          <View style={Styles.dropdown}>
            <TouchableOpacity style={Styles.buttonDropdown}>
              <Dropdown
                style={Styles.dropdownStyle}
                dropdownStyle={Styles.dropStyle.dropdown2}
                defaultValue={'Jenis Toko'}
                options={JENIS_TOKO}
                onSelect={jenis_toko =>
                  this.changeState({name: 'jenis_toko', val: jenis_toko})
                }
              />
            </TouchableOpacity>
          </View>
          <Text style={Styles.TextInput}>Ukuran Toko</Text>
          <View style={Styles.dropdown}>
            <TouchableOpacity style={Styles.buttonDropdown}>
              <Dropdown
                style={Styles.dropdownStyle}
                dropdownStyle={Styles.dropStyle.dropdown1}
                defaultValue={'Ukuran Toko'}
                options={UKURAN_TOKO}
                onSelect={ukuran =>
                  this.changeState({name: 'ukuran', val: ukuran})
                }
              />
            </TouchableOpacity>
          </View>
          <Text style={Styles.TextInput}>Lokasi Toko</Text>
          <View style={Styles.dropdown}>
            <TouchableOpacity style={Styles.buttonDropdown}>
              <Dropdown
                style={Styles.dropdownStyle}
                dropdownStyle={Styles.dropStyle.dropdown1}
                defaultValue={'Lokasi Toko'}
                options={LOKASI_TOKO}
                onSelect={lokasi =>
                  this.changeState({name: 'lokasi', val: lokasi})
                }
              />
            </TouchableOpacity>
          </View>
          <Text style={Styles.TextInput}>Ada Nama Toko(Plang)</Text>
          <View style={Styles.dropdown}>
            <TouchableOpacity style={Styles.buttonDropdown}>
              <Dropdown
                style={Styles.dropdownStyle}
                dropdownStyle={Styles.dropStyle.dropdown2}
                defaultValue={'Ada Nama Toko?'}
                options={ADA_NAMA_TOKO}
                onSelect={plang =>
                  this.changeState({name: 'plang', val: plang})
                }
              />
            </TouchableOpacity>
          </View>
          <Text style={Styles.TextInput}>Punya Kulkas</Text>
          <View style={Styles.dropdown}>
            <TouchableOpacity style={Styles.buttonDropdown}>
              <Dropdown
                style={Styles.dropdownStyle}
                dropdownStyle={Styles.dropStyle.dropdown2}
                defaultValue={'Punya Kulkas'}
                options={KULKAS}
                onSelect={kulkas =>
                  this.changeState({name: 'kulkas', val: kulkas})
                }
              />
            </TouchableOpacity>
          </View>
          <Text style={Styles.TextInput}>Area Parkir</Text>
          <View style={Styles.dropdown}>
            <TouchableOpacity style={Styles.buttonDropdown}>
              <Dropdown
                style={Styles.dropdownStyle}
                dropdownStyle={Styles.dropStyle.dropdown1}
                defaultValue={'Area Parkir'}
                options={AREA_PARKIR}
                onSelect={parkir =>
                  this.changeState({name: 'parkir', val: parkir})
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };
  renderAlasanlainya = () => {
    const {sendData} = this.state;
    if (sendData.ket2_akusisi === '9') {
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
    if (sendData.ket_akusisi === '0') {
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
        <TouchableOpacity onPress={() => console.warn}>
          <View style={Styles.viewFoto}>
            <Image
              source={require('../../asset/images/insert-photo.png')}
              resizeMode={'stretch'}
              style={Styles.fotoData}
            />
            <Text style={Styles.TextFoto}>Foto Dalam</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.warn('Berhasil')}>
          <View style={Styles.viewFoto}>
            <Image
              source={require('../../asset/images/insert-photo.png')}
              resizeMode={'stretch'}
              style={Styles.fotoData}
            />
            <Text style={Styles.TextFoto}>Foto Dalam</Text>
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
  inputProcess() {
    const {sendData} = this.state;
    if (sendData.nama_toko === '' || sendData.nama_toko == null) {
      this.setState({error: true, isModalFailed: true});
    } else {
      this.setState({
        error: false,
        isModalSucces: true,
      });
    }
    return true;
  }

  onSuccessUpload() {
    this.setState({isModalSucces: false});
    this.props.navigation.navigate('Home');
  }

  onFailedUpload() {
    this.setState({isModalFailed: false});
  }

  findCoords = () => {
    RNLocation.configure({
      distanceFilter: 5.0,
    });
    RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
      },
    }).then(granted => {
      if (granted) {
        this.locationSubscription = RNLocation.subscribeToLocationUpdates(
          position => {
            const lat = position[0].latitude;
            const long = position[0].longitude;
            const innerFormData = {...this.state.sendData};
            innerFormData.location = position;
            innerFormData.latitude = lat.toString();
            innerFormData.longitude = long.toString();
            this.setState({sendData: innerFormData});
          },
        );
      }
    });
  };
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
            <View style={Styles.dropdown}>
              <TouchableOpacity style={Styles.buttonDropdown}>
                <Dropdown
                  style={Styles.dropdownStyle}
                  defaultValue={'Status Toko'}
                  dropdownStyle={Styles.dropStyle.dropdown2}
                  options={STATUS_TOKO}
                  onSelect={ket_akusisi =>
                    this.changeState({name: 'ket_akusisi', val: ket_akusisi})
                  }
                />
              </TouchableOpacity>
            </View>
            {this.renderStatustoko()}
            {this.renderAlasanlainya()}
            <Text style={Styles.TextInput}>Catatan Kunjungan</Text>
            <TextInput
              keyboardType={'default'}
              placeholder={'Catatan Kunjungan'}
              value={sendData.note_akuisisi}
              onChangeText={note_akuisisi =>
                this.changeState({name: 'note_akuisisi', val: note_akuisisi})
              }
            />
            <View style={Styles.fotoSemua}>
              {this.renderFotoBelumInstall()}
              {this.renderFotoSudahInstall()}
            </View>
            <Button onPress={() => this.inputProcess()} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
