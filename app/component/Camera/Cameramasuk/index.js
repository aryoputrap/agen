'use strict';
import React, {PureComponent} from 'react';
import {Text, TouchableOpacity, View, Alert} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Icon from 'react-native-vector-icons/EvilIcons';
import Geocoder from 'react-native-geocoding';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import {RNCamera} from 'react-native-camera';
import {captureScreen} from 'react-native-view-shot';
import RNLocation from 'react-native-location';
import {GEOCODE_API} from '../../../redux/Api/index';
import {Day, Monthcamera} from '../../../utility/Date';
import Style from './style';
import AsyncStorage from '@react-native-community/async-storage';
import decode from 'jwt-decode';

export default class Cameramasuk extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      kirimAbsen: false,
      statusAbsen: 'Masuk',
      openCamera: 'start',
      buttoncamera: true,
      btnHide: null,
      absenmasuk: '',
      Address: null,
      imageURI: null,
      imageContoh: null,
      fotoDone: '',
      id: null,
      token: '',
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
        user: 15,
        keterangan: 'absen',
        latitude: '',
        longitude: '',
        accuracy: 5.0,
      },
      foto: '',
      fotoMasuk: '',
      isModalImage: false,
    };
  }

  componentDidMount() {
    this.getDataTable();
    let that = this;
    const day = Day[new Date().getDay()];
    const date = new Date().getDate();
    const month = Monthcamera[new Date().getMonth()];
    const year = new Date().getFullYear();
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    that.setState({
      day: day,
      date: date,
      date2: month + ' ' + year + ' ',
      time: hour + ' : ' + minute + ' WIB ',
    });
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
    this.Location();
  }

  getDataTable = async () => {
    try {
      const tokenlogin = await AsyncStorage.getItem('token');
      const iduser = await decode(tokenlogin);
      const tokenx = iduser.body[0];
      // console.log(id);
      this.setState({
        token: tokenlogin,
        id: tokenx,
      });
    } catch (error) {
      Alert.alert('error');
    }
  };

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

  kirimAbsen = () => {
    const {sendData} = this.state;
    const user = {
      user: this.state.id,
      keterangan: sendData.keterangan,
      status: this.state.status,
      latitude: sendData.latitude,
      longitude: sendData.longitude,
      accuracy: sendData.accuracy,
      foto: this.state.fotoMasuk,
    };
    console.log(user);
    const token = this.state.token;
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
          this.props.navigation.navigate('Absensi');
          // this.props.navigation.navigate('StackPublic');
        } else if (response.status !== 201) {
          console.log('Gagal');
        } else if (response.status !== 401) {
          console.log('Autorization');
        }
        this.setState({
          isLoading: false,
        });
      })
      .catch(error => {
        console.log(error);
      });
    return true;
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
          uri => this.setState({fotoMasuk: uri}),
          error => console.error('Oops, Something Went Wrong', error),
        )
        .then(
          this.setState({status: 'IN', openCamera: 'start', kirimAbsen: true}),
        )
        .then(this.props.navigation.navigate('Absensi'))
        .then(this.kirimAbsen());
    }, 10);
  };

  hideButton = () => {
    this.setState({buttoncamera: false});
  };

  renderbuttonCamera = () => {
    if (this.state.buttoncamera === true) {
      return (
        <View style={Style.buttonCamera} key={this.state.buttoncamera}>
          <TouchableOpacity>
            <Icon
              name={'refresh'}
              size={85}
              color={'green'}
              style={Style.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.hideButton} style={Style.capture} />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Absensi')}>
            <Icon name={'close-o'} size={80} color={'red'} style={Style.icon} />
          </TouchableOpacity>
        </View>
      );
    } else if (this.state.buttoncamera === false) {
      null;
      this.takefrontPhoto();
    }
  };

  render() {
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
                    {this.state.day}
                    {','} {''}
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

  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
}
