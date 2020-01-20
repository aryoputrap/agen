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
import axios from 'axios';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Icon from 'react-native-vector-icons/EvilIcons';
import RNLocation from 'react-native-location';
import {RNCamera} from 'react-native-camera';
import ModalImage from '../../component/ModalImage';
import Buttonabsen from '../../component/Button/ButtonAkun';
import Style from './style';
import Imagedef from './imagedef';
import {Day, MonthAbs} from '../../utility/Date';
// import CameraScreen from '../../component/Camera';
import ImagePicker from 'react-native-image-picker';
import {CameraKitCamera} from 'react-native-camera-kit';
import {captureScreen} from 'react-native-view-shot';
import Geocoder from 'react-native-geocoding';
import Geolocation from '@react-native-community/geolocation';
import {GEOCODE_API} from '../../redux/Api';
// import token from '../../config/Api/token';
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
    headerStyle: Style.headerStyle,
  });
  constructor(props) {
    super(props);
    this.state = {
      statusAbsen: 'Masuk',
      openCamera: 'start',
      buttoncamera: true,
      btnHide: null,
      absenmasuk: '',
      Address: null,
      imageURI: null,
      imageContoh: null,
      fotoDone: '',
      day: '',
      date: '',
      time: '',
      keterangan: 'absen',
      status: '',
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      sendData: {
        user: 101,
        keterangan: 'absen',
        latitude: '',
        longitude: '',
        accuracy: 5.0,
      },
      foto: '',
      fotomasuk: '',
      isModalImage: false,
    };
  }

  kirimAbsen = () => {
    const {sendData} = this.state;
    const user = {
      user: sendData.user,
      keterangan: sendData.keterangan,
      status: this.state.status,
      latitude: sendData.latitude,
      longitude: sendData.longitude,
      accuracy: sendData.accuracy,
      foto: this.state.imageURI,
    };
    console.log(user);
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5IjpbMTQsImFrdXNpc2kiLDNdLCJpYXQiOjE1Nzk0OTIyOTgsImV4cCI6MTU3OTUyMTA5OH0.QWK52XTmjDrKeBoLQvTZagz1Oe0letUWOi7UmiuMEUQ';

    const header = {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
      'x-api-key':
        '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
    };
    axios({
      method: 'POST',
      url: 'http://support.tokopandai.id:3003/Api/absen',
      headers: header,
      data: user,
    })
      .then(response => {
        this.response = response.status;
        console.log(response);
        console.log(response.status);
        if (response.status === 201) {
          console.log('Berhasil');
        } else if (response.status !== 201) {
          console.log('Gagal');
        } else if (response.status !== 401) {
          console.log('Autoriz');
        }
        this.setState({
          isLoading: false,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  async onCheckCameraAuthoPressed() {
    const success = await CameraKitCamera.checkDeviceCameraAuthorizationStatus();
    if (success) {
      Alert.alert('You have permission 🤗');
    } else {
      Alert.alert('No permission 😳');
    }
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

  takefrontPhoto = () => {
    setTimeout(() => {
      captureScreen({
        format: 'jpg',
        quality: 0.3,
        result: 'base64',
      })
        .then(
          //callback function to get the result URL of the screnshot
          uri => this.setState({imageURI: uri}),
          error => console.error('Oops, Something Went Wrong', error),
        )
        .then(this.setState({status: 'IN', openCamera: 'start'}));
    }, 50);
  };

  UNSAFE_componentWillMount() {
    Geocoder.init(GEOCODE_API);
    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        Geocoder.from(position.coords.latitude, position.coords.longitude)
          .then(json => {
            // console.log(json);
            var addressComponent = json.results[0].formatted_address;
            this.setState({
              Address: addressComponent,
            });
            // console.log(addressComponent);
          })
          .catch(error => console.warn(error));
      },
      error => {
        this.setState({error: error.message}, console.log(this.state));
      },
      {enableHighAccuracy: false, timeout: 10000, maximumAge: 100000},
    );
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
    this.Location;
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

  onRequestFotoClose = () => {
    Alert.alert('Pengambilan Foto Batal');
  };

  onRequestFotoError = () => {
    Alert.alert('Pengambilan Foto Error');
  };

  onModal = () => {
    this.setState({isModalImage: true});
  };

  onModalImage() {
    this.setState({isModalImage: false});
  }

  hideButton = () => {
    this.setState({buttoncamera: false});
  };

  renderbuttonCamera = () => {
    if (this.state.buttoncamera === true) {
      return (
        <View style={Style.buttonCamera}>
          <TouchableOpacity onPress={this.hideButton} style={Style.capture} />
        </View>
      );
    } else if (this.state.buttoncamera === false) {
      null;
      this.takefrontPhoto();
    }
  };

  onRegionChange(region) {
    this.setState({region});
  }
  render() {
    if (this.state.openCamera === 'ON') {
      // return <CameraScreen />;
      return (
        <View style={Style.cameraview}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={Style.preview}
            type={RNCamera.Constants.Type.front}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
          />
          <View style={Style.bodyAddress}>
            <View style={Style.bodymapAddress}>
              <MapView
                provider={PROVIDER_GOOGLE}
                style={Style.map}
                region={this.state.region}
              />
              <View style={Style.bodyAbsenfoto}>
                <Text style={Style.textAddress}>{this.state.Address}</Text>
                <View style={Style.bodydateCamera}>
                  <View style={Style.iconBody}>
                    <Icon
                      name={'calendar'}
                      size={15}
                      color={'green'}
                      style={Style.icon}
                    />
                    <Text style={Style.textAddress}>
                      {this.state.date} {this.state.date2}
                    </Text>
                  </View>
                </View>
                <View style={Style.iconBody}>
                  <Icon
                    name={'clock'}
                    size={15}
                    color={'green'}
                    style={Style.icon}
                  />
                  <Text style={Style.textAddress}>{this.state.time}</Text>
                </View>
                <Text style={Style.textAddress}>{this.state.statusAbsen}</Text>
              </View>
            </View>
          </View>
          {this.renderbuttonCamera()}
        </View>
      );
    }
    return (
      <SafeAreaView>
        <StatusBar translucent backgroundColor="transparent" />
        <ModalImage
          key={this.state.imageURI}
          isVisible={this.state.isModalImage}
          source={{
            uri: `data:image/png;base64,${this.state.imageURI}`,
          }}
          // source={{uri: this.state.imageURI}}
          Press={() => this.onModalImage()}
        />
        <View style={Style.bodyAbsen}>
          <TouchableOpacity
            style={Style.tombolCard}
            onPress={() =>
              this.setState({openCamera: 'ON', buttoncamera: true})
            }>
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
            onPress={() => this.onCheckCameraAuthoPressed()}>
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
          <TouchableOpacity onPress={this.onModal}>
            {this.state.imageURI ? (
              <Image
                source={{
                  uri: `data:image/png;base64,${this.state.imageURI}`,
                }}
                style={Style.fotoData}
                resizeMode={'stretch'}
              />
            ) : (
              <Imagedef />
            )}
          </TouchableOpacity>
          <Text style={Style.absenTanggalMasukKeluar}>{this.state.time}</Text>
        </View>
        <View style={Style.LineFitur} />
        <View style={Style.bodyabsenTanggal}>
          <View style={Style.bodyDate2}>
            <Text style={Style.absentgl}>{this.state.date}</Text>
            <Text style={Style.absenTanggalMasukKeluar}>
              {this.state.date2}
            </Text>
          </View>
          <TouchableOpacity onPress={this.onModal}>
            {this.state.imageURI ? (
              <Image
                source={{
                  uri: `data:image/png;base64,${this.state.imageURI}`,
                }}
                style={Style.fotoData}
                resizeMode={'stretch'}
              />
            ) : (
              <Imagedef />
            )}
          </TouchableOpacity>
          <Text style={Style.absenTanggalMasukKeluar}>{this.state.time}</Text>
        </View>
        <View style={Style.LineFitur} />
        <View style={Style.Button}>
          <Buttonabsen textField={'Absen'} onPress={() => this.kirimAbsen()} />
        </View>
      </SafeAreaView>
    );
  }
}
