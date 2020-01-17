import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Styles from './style';

export default class Danapandai extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.titleAbsensi}>
          <Text style={Styles.textabsensi}>Produk</Text>
          <Text style={Styles.textabsensi}>Tanggal</Text>
          <Text style={Styles.textabsensi}>Transaksi</Text>
          <Text style={Styles.textabsensi}>Nominal</Text>
        </View>
        <View style={Styles.linebody} />
        <View style={Styles.titleStatus}>
          <View style={Styles.produk}>
            <Image
              style={Styles.imageProduk}
              source={require('../../../../asset/images/icon/pulsa-icon.png')}
            />
            <View style={Styles.marginProduk}>
              <Text style={Styles.textabsensi2}>Pulsa</Text>
              <Text style={Styles.textabsensi2}>PRA</Text>
            </View>
          </View>
          <View>
            <Text style={Styles.textabsensi2}>18</Text>
            <Text style={Styles.textabsensi2}>Nov 2019</Text>
          </View>
          <Text style={Styles.textabsensi2}>10</Text>
          <View>
            <Text style={Styles.textabsensi2}>100</Text>
            <Text style={Styles.textabsensi2}>Ribu</Text>
          </View>
        </View>
        <View style={Styles.line} />
        <View style={Styles.total}>
          <View style={Styles.totaltext}>
            <Text style={Styles.totalText}>Total</Text>
            <View style={Styles.totalNumber}>
              <Text style={Styles.totalTrasaction}>7</Text>
              <Text style={Styles.totalNominal}>300 Ribu</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
