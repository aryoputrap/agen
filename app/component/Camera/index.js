'use strict';
import React, {PureComponent} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Icon from 'react-native-vector-icons/EvilIcons';
import Geocoder from 'react-native-geocoding';
import Geolocation from '@react-native-community/geolocation';
import {RNCamera} from 'react-native-camera';
import {captureScreen} from 'react-native-view-shot';
import {GEOCODE_API} from '../../redux/Api/index';
import Style from './style';

export default class ExampleApp extends PureComponent {
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
  takeScreenShot = () => {
    captureScreen({
      format: 'jpg',
      quality: 0.8,
      width: 200,
      height: 200,
    }).then(
      //callback function to get the result URL of the screnshot
      uri => this.setState({imageURI: uri}),
      error => console.error('Oops, Something Went Wrong', error),
    );
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

  componentDidMount() {
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
