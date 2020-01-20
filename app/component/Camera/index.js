/* eslint-disable react-native/no-inline-styles */
'use strict';
import React, {PureComponent} from 'react';
import {Text, TouchableOpacity, View, Image, StatusBar} from 'react-native';
import Geocoder from 'react-native-geocoding';
import Geolocation from '@react-native-community/geolocation';
import {RNCamera} from 'react-native-camera';
import {captureScreen} from 'react-native-view-shot';
import {GEOCODE_API} from '../../redux/Api/index';
import Styles from './style';

export default class ExampleApp extends PureComponent {
  constructor() {
    super();
    this.state = {
      error: null,
      Address: null,
      imageURI: null,
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
  render() {
    return (
      <View style={Styles.container}>
        <StatusBar hidden />
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={Styles.preview}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View>
          <Text style={Styles.textAddress}>{this.state.Address}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            source={{uri: this.state.imageURI}}
            style={Styles.previewfoto}
          />
          <TouchableOpacity
            onPress={this.takeScreenShot}
            // onPress={this.takePicture.bind(this)}
            style={Styles.capture}>
            <Text style={Styles.textAbsen}> ABSEN </Text>
          </TouchableOpacity>
        </View>
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
