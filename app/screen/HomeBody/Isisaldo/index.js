import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
// import Modal, {ModalContent} from 'react-native-modals';
import {Checkbox} from 'react-native-paper';
import NumericInput from '@wwdrew/react-native-numeric-textinput';
import FieldAccount from '../../../component/Button/ButtonAkun';
import FieldDisable from '../../../component/Button/ButtonGrey';
import Inputdisable from './inputdisable';
import Styles from './style';

export default class info extends Component {
  static navigationOptions = () => ({
    title: 'Isi Saldo',
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
      userUpdate: {
        cekfmcg: null,
        cekbayarnanti: null,
        cekppob: null,
        ceklain: null,
        total: 10000000,
      },
    };
  }

  validasisaldo = () => {
    // const data = this.state;
    // const render = {...this.state.userUpdate};
    // if (data.cekfmcg === false) {
    //   render.cekfmcg === null;
    //   this.setState({name: null});
    //   console.log('fmcg false');
    // }
    this.isiSaldo();
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
    const saldo = this.state.userUpdate;
    const {navigate} = this.props.navigation;
    const data = this.state;
    // const userUpdate = this.state;
    const fmcg = saldo.cekfmcg;
    const bayarnanti = saldo.cekbayarnanti;
    const ppob = saldo.cekppob;
    const lain = saldo.ceklain;
    const jumlah = fmcg + bayarnanti + ppob + lain;
    // console.log(jumlah);
    return (
      <View style={Styles.container}>
        <StatusBar hidden={true} />
        <View style={Styles.icon}>
          <Image source={require('../../../asset/images/icon/topup.png')} />
        </View>
        <Modal
          visible={this.state.visible}
          animationType="slide"
          transparent={true}>
          <View style={Styles.modalview}>
            <View style={Styles.mondalin}>
              <View>
                <Image
                  style={Styles.imagemodal}
                  source={require('../../../asset/images/nominaltagihan.png')}
                />
                <Text style={Styles.textmodal}>
                  Pilihan dan Nominal Sudah Benar?
                </Text>
              </View>
              <View style={Styles.buttonmodal}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({visible: false});
                  }}>
                  <View style={Styles.buttonLaporanmain}>
                    <Text style={Styles.textButtonmain}>TIDAK</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigate('Transfer', {
                      fmcg,
                      bayarnanti,
                      lain,
                      ppob,
                      jumlah,
                    }) && this.setState({visible: false})
                  }>
                  <View style={Styles.buttonLaporanmain}>
                    <Text style={Styles.textButtonmain}>YA</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Text style={Styles.textbody}>Ingin isi saldo, untuk apa?</Text>
        <View style={Styles.parentCheck}>
          <View style={Styles.checkBox}>
            <Checkbox
              color="#008CC9"
              status={this.state.cekfmcg ? 'checked' : 'unchecked'}
              onPress={() => {
                this.setState({cekfmcg: !this.state.cekfmcg});
              }}
            />
            <Checkbox
              color="#008CC9"
              status={this.state.cekbayarnanti ? 'checked' : 'unchecked'}
              onPress={() => {
                this.setState({cekbayarnanti: !this.state.cekbayarnanti});
              }}
            />
            <Checkbox
              color="#008CC9"
              status={this.state.cekppob ? 'checked' : 'unchecked'}
              onPress={() => {
                this.setState({cekppob: !this.state.cekppob});
              }}
            />
            <Checkbox
              color="#008CC9"
              status={this.state.ceklain ? 'checked' : 'unchecked'}
              onPress={() => {
                this.setState({ceklain: !this.state.ceklain});
              }}
            />
          </View>
          <View style={Styles.checkBoxtext}>
            <Text style={Styles.textChecked}>Tagihan FMCG</Text>
            <Text style={Styles.textChecked}>Tagihan Bayar Nanti</Text>
            <Text style={Styles.textChecked}>PPOB</Text>
            <Text style={Styles.textChecked}>Lainnya</Text>
          </View>
          <View style={Styles.checkBoxtext}>
            <Text
              style={
                data.cekfmcg === true
                  ? Styles.textMoney
                  : Styles.textMoneydisable
              }>
              Rp.
            </Text>
            <Text
              style={
                data.cekbayarnanti === true
                  ? Styles.textMoney
                  : Styles.textMoneydisable
              }>
              Rp.
            </Text>
            <Text
              style={
                data.cekppob === true
                  ? Styles.textMoney
                  : Styles.textMoneydisable
              }>
              Rp.
            </Text>
            <Text
              style={
                data.ceklain === true
                  ? Styles.textMoney
                  : Styles.textMoneydisable
              }>
              Rp.
            </Text>
          </View>
          <View style={Styles.checkBoxtext}>
            {data.cekfmcg === true ? (
              <View style={Styles.inputMoney}>
                <NumericInput
                  type="decimal"
                  placeholder={'Klik Disini'}
                  autoFocus={true}
                  decimalPlaces={0}
                  value={saldo.cekfmcg}
                  onUpdate={cekfmcg =>
                    this.handleChange({name: 'cekfmcg', value: cekfmcg})
                  }
                />
              </View>
            ) : (
              <Inputdisable />
            )}
            {data.cekbayarnanti === true ? (
              <View style={Styles.inputMoney}>
                <NumericInput
                  type="decimal"
                  placeholder={'Klik Disini'}
                  autoFocus={true}
                  decimalPlaces={0}
                  value={saldo.cekbayarnanti}
                  onUpdate={cekbayarnanti =>
                    this.handleChange({
                      name: 'cekbayarnanti',
                      value: cekbayarnanti,
                    })
                  }
                />
              </View>
            ) : (
              <Inputdisable />
            )}
            {data.cekppob === true ? (
              <View style={Styles.inputMoney}>
                <NumericInput
                  type="decimal"
                  placeholder={'Klik Disini'}
                  autoFocus={true}
                  decimalPlaces={0}
                  value={saldo.cekppob}
                  onUpdate={cekppob =>
                    this.handleChange({
                      name: 'cekppob',
                      value: cekppob,
                    })
                  }
                />
              </View>
            ) : (
              <Inputdisable />
            )}
            {data.ceklain === true ? (
              <View style={Styles.inputMoney}>
                <NumericInput
                  type="decimal"
                  placeholder={'Klik Disini'}
                  autoFocus={true}
                  decimalPlaces={0}
                  value={saldo.ceklain}
                  onUpdate={ceklain =>
                    this.handleChange({
                      name: 'ceklain',
                      value: ceklain,
                    })
                  }
                />
              </View>
            ) : (
              <Inputdisable />
            )}
          </View>
        </View>
        <View style={Styles.parentTotal}>
          <View style={Styles.total}>
            <Text style={Styles.textCheckedtotal}>Jumlah</Text>
          </View>
          <View style={Styles.totalMoney}>
            <Text style={Styles.totaltextMoney}>
              Rp. {this.Nominal(jumlah)}
            </Text>
          </View>
        </View>
        <View style={Styles.btnIsi}>
          {data.ceklain === true ||
          data.cekbayarnanti === true ||
          data.cekfmcg === true ||
          data.cekppob === true ? (
            <FieldAccount
              textField={'Isi Saldo'}
              onPress={() => {
                this.setModalVisible(true);
              }}
            />
          ) : (
            <FieldDisable textField={'Isi Saldo'} />
          )}
        </View>
      </View>
    );
  }
}
