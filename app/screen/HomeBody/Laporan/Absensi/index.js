import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Styles from './style';

export default class Absensi extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.titleAbsensi}>
          <Text style={Styles.textabsensi}>Tanggal</Text>
          <Text style={Styles.textabsensi}>Masuk</Text>
          <Text style={Styles.textabsensi}>Pulang</Text>
        </View>
        <View style={Styles.linebody} />
        <View style={Styles.titleAbsensi}>
          <Text style={Styles.textabsensi2}> 18 Nov 2019</Text>
          <Text style={Styles.textabsensi2}> 08: 00 WIB</Text>
          <Text style={Styles.textabsensi2}> 17: 00 WIB</Text>
        </View>
        <View style={Styles.line} />
      </View>
    );
  }
}
