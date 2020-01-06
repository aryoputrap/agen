import React, {Component} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StatusBar,
  Alert,
} from 'react-native';
import RNLocation from 'react-native-location';
import Buttonabsen from '../../component/Button/ButtonAkun';
import Style from './style';
import Imagedef from './imagedef';
import {Day, MonthAbs} from '../../utility/Date';
import ImagePicker from 'react-native-image-picker';
// import {RNCamera} from 'react-native-camera';

const options = {
  title: 'Select Image',
  maxWidth: 720,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
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
      user: 15,
      keterangan: 'absen',
      status: '',
      sendlocation: {
        latitude: '',
        longitude: '',
        accuracy: 5.0,
      },
      foto: '',
      fotomasuk: '',
    };
  }

  handlefotoMasuk = () => {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        this.onRequestFotoClose();
      } else if (response.error) {
        this.onRequestFotoError('And error occured: ', response.error);
      } else {
        const source = {uri: response.uri};
        // const sourceencode = {uri: response.data};
        // console.log(sourceencode);
        // console.log(source);
        this.setState({
          foto: response.data,
          fotomasuk: source,
          status: 'IN',
        });
      }
    });
  };

  handlefotoKeluar = () => {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        this.onRequestFotoClose();
      } else if (response.error) {
        this.onRequestFotoError('And error occured: ', response.error);
      } else {
        const source = {uri: response.uri};
        // const sourceencode = {uri: response.data};
        // console.log(sourceencode);
        // console.log(source);
        this.setState({
          foto: response.data,
          fotomasuk: source,
          status: 'OUT',
        });
      }
    });
  };

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
    this.Location();
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
            const innerFormData = {...this.state.sendlocation};
            innerFormData.latitude = lat.toString();
            innerFormData.longitude = long.toString();
            // console.log(innerFormData);
            this.setState({sendlocation: innerFormData});
          },
        );
      }
    });
  };

  onRequestFotoClose = () => {
    Alert.alert('Pengambilan Foto Batal');
  };

  onRequestFotoError = () => {
    Alert.alert('Pengambilan Foto Error');
  };

  render() {
    return (
      <SafeAreaView>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFF'} />
        <View style={Style.bodyAbsen}>
          <TouchableOpacity
            style={Style.tombolCard}
            onPress={this.handlefotoMasuk}>
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
          {this.state.foto ? (
            <Image
              source={this.state.fotomasuk}
              resizeMode={'stretch'}
              style={Style.fotoData}
            />
          ) : (
            <Imagedef />
          )}
          <Text style={Style.absenTanggalMasukKeluar}>{this.state.time}</Text>
        </View>
        <View style={Style.LineFitur} />
        <View style={Style.Button}>
          <Buttonabsen textField={'Absen'} onPress={() => this.bottomAbsen()} />
        </View>
      </SafeAreaView>
    );
  }
}
