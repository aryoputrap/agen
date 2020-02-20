import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Styles from './style';

export default class Danapandai extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.titleAbsensi}>
          <View style={Styles.titleproduk}>
            <Text style={Styles.textabsensi}>Produk</Text>
          </View>
          <View style={Styles.titleUtil}>
            <Text style={Styles.textabsensiU}>Tanggal</Text>
            <Text style={Styles.textabsensiU}>Transaksi</Text>
            <Text style={Styles.textabsensiU}>Nominal</Text>
          </View>
        </View>
        <View style={Styles.linebody} />
        <View style={Styles.titleAbsensi}>
          <View style={Styles.produkBody}>
            <Image
              style={Styles.imageProduk}
              source={require('../../../../asset/images/prabayar.png')}
            />
            <Text style={Styles.textabsensi2}>Pulsa</Text>
          </View>
          <View style={Styles.titleUtilbod}>
            <View style={Styles.row}>
              <Text style={Styles.textBody}>18</Text>
              <Text style={Styles.textBody2}>Nov 2019</Text>
            </View>
            <Text style={Styles.textBody}>10</Text>
            <View style={Styles.row}>
              <Text style={Styles.textBody}>100</Text>
              <Text style={Styles.textBody2}>Ribu</Text>
            </View>
          </View>
        </View>
        <View style={Styles.line} />
        <View style={Styles.titleAbsensi}>
          <View style={Styles.produkBody}>
            <Image
              style={Styles.imageProduk}
              source={require('../../../../asset/images/data.png')}
            />
            <Text style={Styles.textabsensi2}>Data</Text>
          </View>
          <View style={Styles.titleUtilbod}>
            <View style={Styles.row}>
              <Text style={Styles.textBody}>18</Text>
              <Text style={Styles.textBody2}>Nov 2019</Text>
            </View>
            <Text style={Styles.textBody}>10</Text>
            <View style={Styles.row}>
              <Text style={Styles.textBody}>1</Text>
              <Text style={Styles.textBody2}>Ribu</Text>
            </View>
          </View>
        </View>
        <View style={Styles.line} />
        <View style={Styles.titleAbsensi}>
          <View style={Styles.produkBody}>
            <Image
              style={Styles.imageProduk}
              source={require('../../../../asset/images/pln.png')}
            />
            <Text style={Styles.textabsensi2}>PLN</Text>
          </View>
          <View style={Styles.titleUtilbod}>
            <View style={Styles.row}>
              <Text style={Styles.textBody}>18</Text>
              <Text style={Styles.textBody2}>Des 2019</Text>
            </View>
            <Text style={Styles.textBody}>10</Text>
            <View style={Styles.row}>
              <Text style={Styles.textBody}>100</Text>
              <Text style={Styles.textBody2}>Ribu</Text>
            </View>
          </View>
        </View>
        <View style={Styles.line} />
        <View style={Styles.titleAbsensi}>
          <View style={Styles.produkBody}>
            <Image
              style={Styles.imageProduk}
              source={require('../../../../asset/images/lainnyautil.png')}
            />
            <Text style={Styles.textabsensi2}>Lainnya</Text>
          </View>
          <View style={Styles.titleUtilbod}>
            <View style={Styles.row}>
              <Text style={Styles.textBody}>8</Text>
              <Text style={Styles.textBody2}>Mrt 2019</Text>
            </View>
            <Text style={Styles.textBody}>10</Text>
            <View style={Styles.row}>
              <Text style={Styles.textBody}>10</Text>
              <Text style={Styles.textBody2}>Ribu</Text>
            </View>
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
