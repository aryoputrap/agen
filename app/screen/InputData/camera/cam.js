import React, {Component} from 'react';
import {Alert} from 'react-native';
import {CameraKitCameraScreen} from 'react-native-camera-kit';

export default class CameraScreen extends Component {
  onBottomButtonPressed(event) {
    const captureImages = JSON.stringify(event.captureImages);
    Alert.alert(
      `${event.type} button pressed`,
      `${captureImages}`,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  }

  render() {
    return (
      <CameraKitCameraScreen
        actions={{rightButtonText: 'Done', leftButtonText: 'Cancel'}}
        // onBottomButtonPressed={event => this.onBottomButtonPressed(event)}
        flashImages={{
          on: require('./../../../asset/images/pln.png'),
          off: require('./../../../asset/images/pln.png'),
          auto: require('./../../../asset/images/pln.png'),
        }}
        cameraFlipImage={require('./../../../asset/images/prabayar.png')}
        captureButtonImage={require('./../../../asset/images/prabayar.png')}
      />
    );
  }
}
