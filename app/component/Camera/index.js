import React, {Component} from 'react';
import {Alert, View, Text} from 'react-native';
// import {CameraKitCameraScreen} from 'react-native-camera-kit';
// import {CameraKitCamera} from 'react-native-camera-kit';
import {CameraAbsen} from 'react-native-camera-kit';
import Styles from './style';

export default class CameraScreen extends Component {
  onBottomButtonPressed(event) {
    const captureImages = JSON.stringify(event.captureImages);
    Alert.alert(
      `${event.type} button pressed`,
      `${captureImages}`,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: true},
    );
  }

  render() {
    return (
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
      <View>
        <CameraAbsen
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
        />
        <View style={Styles.Button}>
          <Text> Hi Aku Aryoo</Text>
        </View>
      </View>
    );
  }
}
