import React, {Component} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StatusBar,
  // Alert,
} from 'react-native';
import axios from 'axios';
import RNLocation from 'react-native-location';
import ModalImage from '../../component/ModalImage';
import Style from './style';
import Imagedef from './imagedef';
import {bulanabsen} from '../../utility/Date';
import AsyncStorage from '@react-native-community/async-storage';
import decode from 'jwt-decode';
// import token from '../../config/Api/token';

export default class absen extends Component {
  static navigationOptions = () => ({
    title: 'Absensi',
    headerTransparent: false,
    headerTitleStyle: Style.headerTitleStyle,
    headerStyle: Style.headerStyle,
  });
  constructor(props) {
    super(props);
    this.state = {
      statusmasuk: '',
      statuspulang: '',
      openCamera: 'start',
      buttoncamera: true,
      btnHide: null,
      absenmasuk: '',
      Address: null,
      day: '',
      fotomasuk: '',
      datemasuk: '',
      date2masuk: '',
      timemasuk: '',
      fotopulang: '',
      datepulang: '',
      date2pulang: '',
      timepulang: '',
      foto: '',
      isModalMasuk: false,
      isModalPulang: false,
      token: '',
      id: null,
      actionfoto: false,
    };
  }

  timer = 10;

  reloadimg = async () => {
    const tokenx = await AsyncStorage.getItem('token');
    const iduser = await decode(tokenx);
    const id = iduser.body[0];
    const header = {
      Authorization: `Bearer ${tokenx}`,
      'x-api-key':
        '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
    };
    axios({
      method: 'GET',
      url: 'http://support.tokopandai.id:3003/Api/absen/' + id,
      headers: header,
    })
      .then(response => {
        this.response = response.data;
        // console.log(response);
        // console.log(response.data.data[0].status);
        const dateAbsentIN = response.data.data[0].tgl;
        const dateAbsentfixIN = dateAbsentIN.split('-')[2];
        const datesplitAbsentIN =
          bulanabsen[dateAbsentIN.split('-')[1] - 1] +
          ' ' +
          dateAbsentIN.split('-')[0];
        this.setState(
          {
            statusmasuk: response.data.data[0].status,
            fotomasuk: response.data.data[0].encode,
            timemasuk: response.data.data[0].timestamp + ' WIB',
            datemasuk: dateAbsentfixIN,
            date2masuk: datesplitAbsentIN,
          },
          // () => console.log(this.state),
        );
        console.log(response.data.data[1].status);
        const dateAbsentOUT = response.data.data[1].tgl;
        const dateAbsentfixOUT = dateAbsentOUT.split('-')[2];
        const datesplitAbsentOUT =
          bulanabsen[dateAbsentOUT.split('-')[1] - 1] +
          ' ' +
          dateAbsentOUT.split('-')[0];

        this.setState({
          actionfoto: true,
          statuspulang: response.data.data[1].status,
          fotopulang: response.data.data[1].encode,
          timepulang: response.data.data[1].timestamp + ' WIB',
          datepulang: dateAbsentfixOUT,
          date2pulang: datesplitAbsentOUT,
        });
      })
      .catch(error => {
        console.log(error.message);
      });
    return true;
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.reloadimg();
    }, 3000);
    // this.reloadimg();
    this.Location;
  }

  UNSAFE_componentWillUnmount() {
    clearInterval(this.timer);
  }

  Location = () => {
    RNLocation.configure({
      distanceFilter: 5.0,
      desiredAccuracy: {
        ios: 'best',
        android: 'balancedPowerAccuracy',
      },
      androidProvider: 'auto',
      interval: 5000,
      fastestInterval: 10000,
      maxWaitTime: 5000,
    });
    RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'fine',
      },
    }).then(granted => {
      if (granted) {
        this.locationSubscription = RNLocation.subscribeToLocationUpdates(
          locations => {
            const lat = locations[0].latitude;
            const long = locations[0].longitude;
            const innerFormData = {...this.state.sendData};
            innerFormData.latitude = lat.toString();
            innerFormData.longitude = long.toString();
            // console.log(innerFormData);
            this.setState({sendData: innerFormData});
          },
        );
      }
    });
  };

  onModalMasuk = () => {
    this.setState({isModalMasuk: true});
  };

  onModalPulang = () => {
    this.setState({isModalPulang: true});
  };

  onModalImage() {
    this.setState({isModalMasuk: false, isModalPulang: false});
  }

  renderAbsen = () => {
    if (this.state.actionfoto === false) {
      return (
        <View style={Style.belumabsen}>
          <Text style={Style.textbelumabsen}>
            Haloo agen, Anda belum absen pulang hari ini....!
          </Text>
        </View>
      );
    }
  };

  renderAbsenmasuk = () => {
    if (this.state.statusmasuk === 'IN') {
      return (
        <SafeAreaView>
          <View style={Style.bodyabsenTanggal}>
            <View style={Style.bodyDate2}>
              <Text style={Style.absentgl}>{this.state.datemasuk}</Text>
              <Text style={Style.absenTanggalMasukKeluar}>
                {this.state.date2masuk}
              </Text>
            </View>
            <TouchableOpacity onPress={this.onModalMasuk}>
              {this.state.fotomasuk ? (
                <Image
                  source={{
                    uri: `data:image/png;base64,${this.state.fotomasuk}`,
                  }}
                  style={Style.fotoData}
                  resizeMode={'stretch'}
                />
              ) : (
                <Imagedef />
              )}
            </TouchableOpacity>
            <Text style={Style.absenTanggalMasukKeluar}>
              {this.state.timemasuk}
            </Text>
          </View>
          <View style={Style.LineFitur} />
        </SafeAreaView>
      );
    }
  };

  renderAbsenpulang = () => {
    if (this.state.statuspulang === 'OUT') {
      return (
        <View>
          <View style={Style.bodyabsenTanggal}>
            <View style={Style.bodyDate2}>
              <Text style={Style.absentgl}>{this.state.datepulang}</Text>
              <Text style={Style.absenTanggalMasukKeluar}>
                {this.state.date2pulang}
              </Text>
            </View>
            <TouchableOpacity onPress={this.onModalPulang}>
              {this.state.fotopulang ? (
                <Image
                  source={{
                    uri: `data:image/png;base64,${this.state.fotopulang}`,
                  }}
                  style={Style.fotoData}
                  resizeMode={'stretch'}
                />
              ) : (
                <Imagedef />
              )}
            </TouchableOpacity>
            <Text style={Style.absenTanggalMasukKeluar}>
              {this.state.timepulang}
            </Text>
          </View>
          <View style={Style.LineFitur} />
        </View>
      );
    }
  };

  render() {
    return (
      <SafeAreaView>
        <StatusBar hidden={true} />
        <ModalImage
          key={'Masuk'}
          isVisible={this.state.isModalMasuk}
          source={{
            uri: `data:image/png;base64,${this.state.fotomasuk}`,
          }}
          Press={() => this.onModalImage()}
        />
        <ModalImage
          key={'Pulang'}
          isVisible={this.state.isModalPulang}
          source={{
            uri: `data:image/png;base64,${this.state.fotopulang}`,
          }}
        />
        <View style={Style.bodyAbsen}>
          <TouchableOpacity
            style={Style.tombolCard}
            onPress={() => this.props.navigation.navigate('Cameramasuk')}>
            <View style={Style.boxShadow}>
              <Image
                source={require('../../asset/images/enter.png')}
                resizeMode={'stretch'}
              />
            </View>
            <Text style={Style.textCard}>Masuk</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={([Style.tombolCard], {marginLeft: 15})}
            onPress={() => this.props.navigation.navigate('Camerapulang')}>
            {/* onPress={() => this.onCheckCameraAuthoPressed()}> */}
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
        {this.renderAbsenmasuk()}
        {this.renderAbsenpulang()}
        {/* {this.renderAbsen()} */}
      </SafeAreaView>
    );
  }
}
