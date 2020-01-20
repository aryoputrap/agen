/* eslint-disable no-lone-blocks */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Alert, View, Text, Button, Image} from 'react-native';
import {captureScreen} from 'react-native-view-shot';
// import {CameraKitCameraScreen} from 'react-native-camera-kit';
// import {CameraKitCamera} from 'react-native-camera-kit';
// import {CameraAbsen} from 'react-native-camera-kit';
import {RNCamera} from 'react-native-camera';
import Styles from './style';

export default class CameraScreen extends Component {
  constructor() {
    super();
    this.state = {
      //initial image to the <Image>
      imageURI:
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png',
    };
  }
  takeScreenShot = () => {
    captureScreen({
      format: 'jpg',
      quality: 0.8,
    }).then(
      //callback function to get the result URL of the screnshot
      uri => this.setState({imageURI: uri}),
      error => console.error('Oops, Something Went Wrong', error),
    );
  };

  onBottomButtonPressed(event) {
    const captureImages = JSON.stringify(event.captureImages);
    Alert.alert(
      `${event.type} button pressed`,
      `${captureImages}`,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: true},
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  render() {
    return (
      <View>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View style={Styles.Button}>
          <Text> Hi Aku Aryoo</Text>
          <Image
            source={{uri: this.state.imageURI}}
            style={{
              width: 100,
              height: 200,
              resizeMode: 'contain',
              marginTop: 5,
            }}
          />
          <Button title="Take Screenshot" onPress={this.takeScreenShot} />
          <Button title="Take" onPress={this.takePicture.bind(this)} />
        </View>
      </View>
    );
  }
}

//   <CameraKitCameraScreen
//     actions={{rightButtonText: 'Kirim', leftButtonText: 'Batal'}}
//     onBottomButtonPressed={event => this.onBottomButtonPressed(event)}
//     flashImages={{
//       on: require('../../asset/images/icon/success-icon.png'),
//       off: require('../../asset/images/icon/inbox-blue-icon.png'),
//       auto: require('../../asset/images/icon/lainnya-circle-icon.png'),
//     }}
//     cameraFlipImage={require('../../asset/images/icon/success-icon.png')}
//     captureButtonImage={require('../../asset/images/icon/inbox-blue-icon.png')}
//     // style={{
//     //   backgroundColor: 'blue',
//     // }}
//     cameraOptions={{
//       flashMode: 'auto', // on/off/auto(default)
//       focusMode: 'on', // off/on(default)
//       zoomMode: 'on', // off/on(default)
//       ratioOverlay: '1:10', // optional, ratio overlay on the camera and crop the image seamlessly
//       ratioOverlayColor: 'red', // optional
//     }}
//   />

{
  /* <CameraAbsen
  frameColor={'red'}
  ref={cam => (this.camera = cam)}
  style={Styles.camera}
  cameraFlipImage={require('../../asset/images/icon/success-icon.png')}
  cameraOptions={{
    flashMode: 'on', // on/off/auto(default)
    focusMode: 'on', // off/on(default)
    zoomMode: 'on', // off/on(default)
    ratioOverlay: '1:1', // optional, ratio overlay on the camera and crop the image seamlessly
    ratioOverlayColor: '#00000077', // optional
  }}
/> */
}
