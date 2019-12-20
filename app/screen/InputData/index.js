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
} from '../../utility/InpuData_Utility';
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
      sendData: {
        le_code: '',
        ket_akusisi: 'Status Toko',
        ket2_akusisi: '',
        ket_lain: '',
        ket_aktivitas: '',
        fintech: '',
        plafond: '',
        hp: '',
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
        note_akuisisi: '',
        agent_akuisisi: '', //login
        latitude: '', //login
        longtitude: '', //login
        accuracy: '', //login
        foto_dalam: '',
        foto_luar: '',
        foto_ktp: '',
        foto_selfie: '',
        foto_lain: '',
      },
      error: false,
      isModalSucces: false,
      isModalFailed: false,
    };
  }
  handleChange() {
    const {inputdata} = this.state;
    if (inputdata.ket_akusisi === 'Belum Install') {
      this.setState({
        errorMessage: 'Alasan Belum Install',
      });
    }
  }
  // componentDidUpdate(prevProps) {
  //   const {action} = this.props;
  //   if (prevProps.action !== action) {
  //     switch (action) {
  //       case LOGIN_SUCCESS:
  //         this.onSuccessLogin();
  //         break;
  //       case LOGIN_FAILED:
  //         this.onFailedLogin();
  //         break;
  //       default:
  //     }
  //   }
  // }
  onSuccessUpload() {
    this.setState({isLoading: false});
    this.props.navigation.navigate('Home');
  }

  onFailedUpload() {
    this.setState({isLoading: false});
    this.showAlertModal();
  }
  renderBeluminstall() {
    return (
      <View>
        <Text>Haloooo</Text>
      </View>
    );
  }
  succesModal() {
    return (
      <Modal
        isVisible={this.state.isModalSucces}
        TextModal="Silahkan cek kembali\ndata yang telah di input"
        source={require('../../asset/images/icon/success-icon.png')}
      />
    );
  }
  loginProcess() {
    const SendData = this.state.sendData[''];
    if (SendData === '' || SendData == null) {
      // this.setState({
      //   error: true,
      //   isModalFailed: true,
      // });
      setTimeout(
        function() {
          this.setState({error: true, isModalFailed: true});
        }.bind(this),
        100,
      );
      // isModalVisible: !this.state.isModalVisible
    } else {
      this.setState({
        error: false,
        isModalSucces: true,
      });
    }
    return true;
  }
  render() {
    return (
      <KeyboardAvoidingView style={Styles.container} enabled>
        <ScrollView>
          <View style={Styles.containPading}>
            <Modal
              isVisible={this.state.isModalSucces}
              TextModal={' Data berhasil di input'}
              source={require('../../asset/images/icon/success-icon.png')}
            />
            <Modal
              isVisible={this.state.isModalFailed}
              TextModal={'Silahkan cek kembali \n data yang telah di input'}
              source={require('../../asset/images/icon/gagal-icon.png')}
              Press={() => {
                this.setState({isModalFailed: false});
              }}
            />
            <Text style={Styles.TextInput}>LE CODE</Text>
            <TextInput
              keyboardType={'number-pad'}
              placeholder={'LE CODE'}
              onChangeText={le_code => this.setState({le_code})}
              value={this.state.le_code}
            />
            <Text style={Styles.TextInput} placeholder={'Nama Toko'}>
              Nama Toko
            </Text>
            <TextInput keyboardType={'default'} placeholder={'Nama Toko'} />
            <Text style={Styles.TextInput}>Status Toko</Text>
            <View style={Styles.dropdown}>
              <TouchableOpacity style={Styles.buttonDropdown}>
                <Dropdown
                  style={Styles.dropdownStyle}
                  defaultValue={this.state.sendData.ket_akusisi}
                  options={STATUS_TOKO}
                  onSelect={(id, value) => this.handleChange(id, value)}
                />
              </TouchableOpacity>
            </View>
            {this.renderBeluminstall}
            <Text style={Styles.TextInput}>Alasan Belum Install</Text>
            <View style={Styles.dropdown}>
              <TouchableOpacity style={Styles.buttonDropdown}>
                <Dropdown
                  style={Styles.dropdownStyle}
                  defaultValue={'Alasan Belum Install'}
                  animated={true}
                  options={ALASAN_BELUMINSTAL}
                  onSelect={(id, value) => this.ket_akusisi(id, value)}
                />
              </TouchableOpacity>
            </View>
            <Text style={Styles.TextInput}>Aktivasi KTP</Text>
            <View style={Styles.dropdown}>
              <TouchableOpacity style={Styles.buttonDropdown}>
                <Dropdown
                  style={Styles.dropdownStyle}
                  defaultValue={'Aktivasai KTP'}
                  options={AKTIVASI_KTP}
                />
              </TouchableOpacity>
            </View>
            <Text style={Styles.TextInput}>Nomor Handpone</Text>
            <TextInput
              keyboardType={'phone-pad'}
              placeholder={'No Handphone'}
              onChangeText={hp => this.setState({hp})}
              value={this.state.hp}
            />
            <Text style={Styles.TextInput}>Provinsi Tempat Usaha</Text>
            <TextInput
              keyboardType={'default'}
              placeholder={'Provinsi Tempat Usaha'}
              onChangeText={provinsi => this.setState({provinsi})}
              value={this.state.provinsi}
            />
            <Text style={Styles.TextInput}>Kota Tempat Usaha</Text>
            <TextInput
              keyboardType={'default'}
              placeholder={'Kota Tempat Usaha'}
              onChangeText={kota => this.setState({kota})}
              value={this.state.kota}
            />
            <Text style={Styles.TextInput}>Distributor</Text>
            <View style={Styles.dropdown}>
              <TouchableOpacity style={Styles.buttonDropdown}>
                <Dropdown
                  style={Styles.dropdownStyle}
                  defaultValue={'Distributor'}
                  options={NPS}
                  // onChangeText={distributor => this.setState({distributor})}
                  // value={this.state.distributor}
                />
              </TouchableOpacity>
            </View>
            <Text style={Styles.TextInput}>PJP</Text>
            <View style={Styles.dropdown}>
              <TouchableOpacity style={Styles.buttonDropdown}>
                <Dropdown
                  style={Styles.dropdownStyle}
                  defaultValue={'PJP'}
                  options={PJP}
                />
              </TouchableOpacity>
            </View>
            <Text style={Styles.TextInput}>Nama Sales Distributor</Text>
            <TextInput
              keyboardType={'default'}
              placeholder={'Nama Sales'}
              onChangeText={sales => this.setState({sales})}
              value={this.state.sales}
            />
            <Text style={Styles.TextInput}>Jenis Toko</Text>
            <View style={Styles.dropdown}>
              <TouchableOpacity style={Styles.buttonDropdown}>
                <Dropdown
                  style={Styles.dropdownStyle}
                  defaultValue={'Jenis Toko'}
                  options={JENIS_TOKO}
                />
              </TouchableOpacity>
            </View>
            <Text style={Styles.TextInput}>Ukuran Toko</Text>
            <View style={Styles.dropdown}>
              <TouchableOpacity style={Styles.buttonDropdown}>
                <Dropdown
                  style={Styles.dropdownStyle}
                  defaultValue={'Ukuran Toko'}
                  options={UKURAN_TOKO}
                />
              </TouchableOpacity>
            </View>
            <Text style={Styles.TextInput}>Lokasi Toko</Text>
            <View style={Styles.dropdown}>
              <TouchableOpacity style={Styles.buttonDropdown}>
                <Dropdown
                  style={Styles.dropdownStyle}
                  defaultValue={'Lokasi Toko'}
                  options={LOKASI_TOKO}
                />
              </TouchableOpacity>
            </View>
            <Text style={Styles.TextInput}>Ada Nama Toko(Plang)</Text>
            <View style={Styles.dropdown}>
              <TouchableOpacity style={Styles.buttonDropdown}>
                <Dropdown
                  style={Styles.dropdownStyle}
                  defaultValue={'Ada Nama Toko?'}
                  options={ADA_NAMA_TOKO}
                />
              </TouchableOpacity>
            </View>
            <Text style={Styles.TextInput}>Punya Kulkas</Text>
            <View style={Styles.dropdown}>
              <TouchableOpacity style={Styles.buttonDropdown}>
                <Dropdown
                  style={Styles.dropdownStyle}
                  defaultValue={'Punya Kulkas'}
                  options={KULKAS}
                />
              </TouchableOpacity>
            </View>
            <Text style={Styles.TextInput}>Area Parkir</Text>
            <View style={Styles.dropdown}>
              <TouchableOpacity style={Styles.buttonDropdown}>
                <Dropdown
                  style={Styles.dropdownStyle}
                  defaultValue={'Area Parkir'}
                  options={AREA_PARKIR}
                />
              </TouchableOpacity>
            </View>
            <Text style={Styles.TextInput}>Catatan Kunjungan</Text>
            <TextInput
              keyboardType={'default'}
              placeholder={'Catatan Kunjungan'}
              onChangeText={note_akuisisi => this.setState({note_akuisisi})}
              value={this.state.note_akuisisi}
            />
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
            <Button onPress={() => this.loginProcess()} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
