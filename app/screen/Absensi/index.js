/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Style from './style';

export default class absen extends Component {
  static navigationOptions = () => ({
    title: 'Absensi',
    headerTransparent: false,
    headerTitleStyle: Style.headerTitleStyle,
    // headerStyle: Styles.headerStyle,
  });
  render() {
    return (
      <SafeAreaView>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFF'} />
        <View style={Style.bodyAbsen}>
          <TouchableOpacity style={Style.tombolCard}>
            <View style={Style.boxShadow}>
              <Image
                source={require('../../asset/images/enter.png')}
                resizeMode={'stretch'}
              />
            </View>
            <Text style={Style.textCard}>Masuk</Text>
          </TouchableOpacity>
          <TouchableOpacity style={([Style.tombolCard], {marginLeft: 15})}>
            <View style={Style.boxShadow}>
              <Image
                source={require('../../asset/images/logout.png')}
                resizeMode={'stretch'}
              />
            </View>
            <Text style={Style.textCard}>Pulang</Text>
          </TouchableOpacity>
        </View>
        <Text style={Style.textabsenHarini}>Absensi Hari Ini</Text>
        <View style={Style.LineFiturFull} />
        <View style={Style.bodyabsenTanggal}>
          <Text style={Style.absenTanggal}>Tanggal</Text>
          <Text style={Style.absenTanggal}>Masuk</Text>
          <Text style={Style.absenTanggal}>Pulang</Text>
        </View>
        <View style={Style.LineFitur} />
        <View style={Style.bodyabsenTanggal}>
          <Text style={Style.absenTanggalMasukKeluar}>18 Nov 2019</Text>
          <Text style={Style.absenTanggalMasukKeluar}>08:00 WIB</Text>
          <Text style={Style.absenTanggalMasukKeluar}>17:00 WIB</Text>
        </View>
        <View style={Style.LineFitur} />
      </SafeAreaView>
    );
  }
}
