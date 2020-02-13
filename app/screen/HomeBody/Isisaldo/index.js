import React, {Component} from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import {Checkbox} from 'react-native-paper';
import FieldAccount from '../../../component/Button/ButtonAkun';

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
    (this.state = {
      cekfmcg: false,
      cekbayarnanti: false,
      cekppob: false,
      ceklain: false,
      // eslint-disable-next-line no-sequences
    }),
      () => console.log(this.state);
  }

  render() {
    return (
      <View style={Styles.container}>
        <StatusBar hidden={true} />
        <View style={Styles.icon}>
          <Image source={require('../../../asset/images/icon/topup.png')} />
        </View>
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
            <Text style={Styles.textMoney}>Rp. 0,-</Text>
            <Text style={Styles.textMoney}>Rp. 0,-</Text>
            <Text style={Styles.textMoney}>Rp. 0,-</Text>
            <Text style={Styles.textMoney}>Rp. 0,-</Text>
          </View>
        </View>
        <View style={Styles.btnIsi}>
          <FieldAccount
            textField={'Isi Saldo'}
            onPress={() => console.warn('Isi Saldo')}
          />
        </View>
      </View>
    );
  }
}
