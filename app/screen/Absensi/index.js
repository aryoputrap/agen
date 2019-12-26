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
import Imagedef from './imagedef';
import {Day, MonthAbs} from '../../utility/Date';

export default class absen extends Component {
  static navigationOptions = () => ({
    title: 'Absensi',
    headerTransparent: false,
    headerTitleStyle: Style.headerTitleStyle,
    // headerStyle: Styles.headerStyle,
  });
  constructor(props) {
    super(props);
    this.state = {
      day: '',
      date: '',
      time: '',
    };
  }
  componentDidMount() {
    let that = this;
    const day = Day[new Date().getDay()];
    const date = new Date().getDate();
    const month = MonthAbs[new Date().getMonth()];
    const year = new Date().getFullYear();
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    that.setState({
      day: day,
      date: date,
      date2: month + ' ' + year + ' ',
      time: hour + ' : ' + minute + ' WIB ',
    });
  }
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
          <Text style={Style.absenTanggal}>Foto</Text>
          <Text style={Style.absenTanggal}>Waktu</Text>
        </View>
        <View style={Style.LineFitur} />
        <View style={Style.bodyabsenTanggal}>
          <View style={Style.bodyDate2}>
            <Text style={Style.absentgl}>{this.state.date}</Text>
            <Text style={Style.absenTanggalMasukKeluar}>
              {this.state.date2}
            </Text>
          </View>
          <Imagedef />
          <Text style={Style.absenTanggalMasukKeluar}>{this.state.time}</Text>
        </View>
        <View style={Style.LineFitur} />
      </SafeAreaView>
    );
  }
}
