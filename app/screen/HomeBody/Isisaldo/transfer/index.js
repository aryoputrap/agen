/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import decode from 'jwt-decode';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import FieldAccount from '../../../../component/Button/ButtonAkun';
// import FieldDisable from '../../../../component/Button/ButtonGrey';
import Styles from '../style';

export default class info extends Component {
  static navigationOptions = () => ({
    title: 'Transfer',
    headerTransparent: false,
    headerTitleStyle: Styles.headerTitleStyle,
    headerStyle: Styles.headerStyle,
  });

  constructor() {
    super();
    this.state = {
      visible: false,
      cekfmcg: false,
      cekbayarnanti: false,
      cekppob: false,
      ceklain: false,
      fmcg: null,
      name: null,
      total: 1000,
      va: null,
      jumlah: null,
      userUpdate: {
        vatoko: '',
        pin: '',
        cekfmcg: null,
        cekbayarnanti: null,
        cekppob: null,
        ceklain: null,
      },
    };
  }

  onSuccessUpdate() {
    this.setState({isLoading: false});
    this.props.navigation.navigate('StackPublic');
  }

  Transfer = async () => {
    const tokenx = await AsyncStorage.getItem('token');
    const iduser = await decode(tokenx);
    const id = iduser.body[0];
    const vaagent = '1010001169';
    const {userUpdate} = this.state;
    const user = {
      id: id,
      va_agent: vaagent,
      va_toko: userUpdate.vatoko, //dari inputan
      pin: userUpdate.pin,
      tagihan: [{fmcg:userUpdate.cekfmcg}, {bayar_nanti: userUpdate.cekbayarnanti}, {ppob: userUpdate.cekppob}, {lainnya: userUpdate.ceklain}],
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
      url: 'http://support.tokopandai.id:3003/Api/isiSaldo/tagihan',
      headers: header,
      data: user,
    })
      .then(response => {
        this.response = response.data;
        this.dropDownAlertRef.alertWithType(
          'success',
          'Data Berhasil Masuk !',
          response.data.message,
        );
        console.log(response);
        this.onSuccessUpdate();
      })
      .catch(error => {
        console.log(error.response.data.message);
        this.dropDownAlertRef.alertWithType(
          'error',
          'Mohon diperiksa kembali !',
          error.response.data.message,
        );
      });
  };

 componentDidMount() {
    this.idagent();
  }

  idagent = () => {
    const detail = this.props.navigation.state.params;
    // console.log('ini adalah' + detail);
    console.log(detail.fmcg);
    const fmcg = detail.fmcg;
    const ppob = detail.ppob;
    const nanti = detail.bayarnanti;
    const lain = detail.lain;
    const jumlah = detail.jumlah;
    this.setState({
      //ambil parameter
      total: jumlah,
      userUpdate:{
        cekfmcg: fmcg,
        cekppob: ppob,
        ceklain: lain,
        cekbayarnanti: nanti,
      },
    });
  };

  isiSaldo = () => {
    const saldo = this.state.userUpdate;
    const data = this.state;
    const user = {
      cekfmcg: saldo.cekfmcg,
      cekbayarnanti: saldo.cekbayarnanti,
      cekppob: saldo.cekppob,
      ceklain: saldo.ceklain,
      name: data.name,
    };
    console.log(user);
  };

  handleChange(payload) {
    // const nominal = this.nominal;
    const {name, value} = payload;
    const Data = {...this.state.userUpdate};
    Data[name] = value;
    // console.log(Data);
    // const x = this.Nominal(Data);
    // console.log(x);
    this.setState({userUpdate: Data});
    const isCompleteForm = Object.values(this.state.userUpdate).every(
      e => e !== '',
    );
    this.setState({isCompleteForm});
  }

  Nominal = nominal => {
    const reverse = nominal
      .toString()
      .split('')
      .reverse()
      .join('');
    const ribuan = reverse.match(/\d{1,3}/g);
    const hasil = ribuan
      .join('.')
      .split('')
      .reverse()
      .join('');
    return hasil;
  };

  setModalVisible(visible) {
    this.setState({visible: visible});
  }

  render() {
    // const data = this.state;
    // const userUpdate = this.state;
    // console.log(jumlah);
    return (
      <View style={Styles.container}>
        <StatusBar hidden={true} />
        <View style={Styles.icon}>
          <Image source={require('../../../../asset/images/transfer.png')} />
        </View>
        <View>
            <DropdownAlert ref={ref => (this.dropDownAlertRef = ref)} />
        </View>
        <View>
          <Modal
            visible={this.state.visible}
            animationType="slide"
            transparent={true}>
          <View style={Styles.modalview}>
            <View style={Styles.mondalin}>
              <View>
                <Image
                  style={Styles.imagemodal}
                  source={require('../../../../asset/images/nominaltagihan.png')}
                />
                <Text style={Styles.textmodal}>Apakah Jumlah nya Rp.{this.state.total}</Text>
                <Text style={Styles.textmodal}>Tranfer kepada Va:1010001169</Text>
              </View>
              <View style={Styles.buttonmodal}>
                <TouchableOpacity
                  style={Styles.buttonLaporanmain}
                  onPress={() => {
                    this.setState({visible: false});
                  }}>
                    <Text style={Styles.textButtonmain}>TIDAK</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.Transfer() && this.setState({visible: false})
                  }>
                  <View style={Styles.buttonLaporanmain}>
                    <Text style={Styles.textButtonmain}>YA</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        </View>
        <Text style={Styles.textbody}>Transfer ke AKun Virtual</Text>
        <View style={Styles.parentTotaltf}>
          <View style={Styles.totalTrans}>
            <Text style={Styles.textCheckedtotal}>Total Biaya Transfer</Text>
          </View>
          <View style={Styles.totalMoneytransfer}>
            <Text style={Styles.totaltextMoneytf}>
              Rp. {this.Nominal(this.state.total)}
            </Text>
          </View>
          <View style={Styles.totalTransinput}>
            <Text style={Styles.textCheckedtotal}>NO VIRTUAL ACCOUNT TOKO</Text>
          </View>
          <View style={Styles.inputview}>
            <TextInput
              style={Styles.inputtf}
              placeholder={'No Virtual Account Toko'}
              keyboardType={'numeric'}
              onChangeText={ vatoko =>
                this.handleChange({name: 'vatoko', value:  vatoko})
              }
            />
          </View>
          <View style={Styles.totalTransinput}>
            <Text style={Styles.textCheckedtotal}>KODE PIN</Text>
          </View>
          <View style={Styles.inputview}>
            <TextInput
              style={Styles.inputtf}
              placeholder={'KODE PIN KEMANAN'}
              keyboardType={'numeric'}
              onChangeText={ pin =>
                this.handleChange({name: 'pin', value:  pin})
              }
            />
          </View>
        </View>
        <View style={Styles.btnIsi}>
          {/* {data.va === !null ? (
            <FieldAccount
              textField={'TRANSFER'}
              onPress={() => {
                this.setModalVisible(true);
              }}
            />
          ) : (
            <FieldDisable textField={'TRANSFER'} />
          )} */}
          <FieldAccount
            textField={'TRANSFER'}
            onPress={() => {
              this.setModalVisible(true);
            }}
          />
        </View>
      </View>
    );
  }
}
