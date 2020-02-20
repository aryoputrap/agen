import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
// import Icon from 'react-native-vector-icons/dist/AntDesign';
import Styles from '../style';

export default class info extends Component {
  static navigationOptions = () => ({
    title: 'Detail Transaksi',
    headerTransparent: false,
    headerTitleStyle: Styles.headerTitleStyle,
    headerStyle: Styles.headerStyle,
  });
  render() {
    return (
      <View>
        <View style={Styles.icondetail}>
          <Image
            style={Styles.imgdetail}
            source={require('../../../../asset/images/suksesretail.png')}
          />
          <Text style={Styles.textDetail1}>Transaksi Berhasil !</Text>
        </View>
        <View style={Styles.detailtitle}>
          <Text style={Styles.detailtitlegrey}>Tanggal Transaksi</Text>
          <Text style={Styles.textmedium}>02 Februari 2020</Text>
        </View>
        <View style={Styles.detailtitle}>
          <Text style={Styles.detailtitlegrey}>ID Transaksi</Text>
          <Text style={Styles.textbold}>#PU123123454678</Text>
        </View>
        <View style={Styles.detailtitle}>
          <Text style={Styles.detailtitlegrey}>Jenis Transaksi</Text>
          <Text style={Styles.textmedium}>Pickup Transfer</Text>
        </View>
        <View style={Styles.detailtitle}>
          <Text style={Styles.detailtitlegrey}>Jumlah Transaksi</Text>
          <Text style={Styles.textbold}>Rp. 2.309.000</Text>
        </View>
        <View style={Styles.detailtitle}>
          <Text style={Styles.detailtitlegrey}>Keterangan Transaksi</Text>
          <Text style={Styles.textmedium}>
            Pickup Transfer Rp. 2.309.000 dari mas Roni(2568278) ke Roisah
            Efendi (45654654)
          </Text>
        </View>
      </View>
    );
  }
}
