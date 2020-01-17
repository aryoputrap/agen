import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Styles from './style';

export default class PPOB extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.titleAbsensi}>
          <Text style={Styles.textabsensi}>Tanggal</Text>
          <Text style={Styles.textabsensi}>Data</Text>
          <Text style={Styles.textabsensi}>Nominal</Text>
          <Text style={Styles.textabsensi}>Status</Text>
        </View>
        <View style={Styles.linebody} />
        <View style={Styles.titleAbsensi}>
          <View style={Styles.column}>
            <Text style={Styles.textabsensi2}>18</Text>
            <Text style={Styles.textabsensi2}>Nov 2019</Text>
          </View>
          <View style={Styles.columnnominal}>
            <Text style={Styles.textabsensi2}>20</Text>
          </View>
          <View style={Styles.columnnominal}>
            <Text style={Styles.textabsensi2}>20</Text>
            <Text style={Styles.textabsensi2}>Juta</Text>
          </View>
          <View style={Styles.columnstatus}>
            <Image
              resizeMode={'stretch'}
              source={require('../../../../asset/images/icon/success-icon.png')}
              style={Styles.imagestatus}
            />
            <Text style={Styles.textabsensi2}> Approve</Text>
          </View>
        </View>
        <View style={Styles.line} />
      </View>
    );
  }
}
