import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from './style';

export default class Absensi extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.linebody} />
        <View style={Styles.titleAbsensi}>
          <View style={Styles.dateVisit}>
            <Text style={Styles.date}> 18 </Text>
            <Text style={Styles.date}> Nov 2019</Text>
          </View>
          <View style={Styles.lineHorizontal} />
          <View style={Styles.bodyKunjungan}>
            <View style={Styles.textinstallStatus}>
              <Text style={Styles.textstatusInstall}> Total Transaksi</Text>
              <Text style={Styles.textTotal}> Total Nominal </Text>
            </View>
            <View style={Styles.textinstallStatus}>
              <Text> 6 </Text>
              <Text style={Styles.textTotal}> Rp. 20.000.000 </Text>
            </View>
          </View>
        </View>
        <View style={Styles.buttonView}>
          <TouchableOpacity style={Styles.btnDetail}>
            <Text style={Styles.textDetail}>Lihat Detail</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.line} />
      </View>
    );
  }
}
