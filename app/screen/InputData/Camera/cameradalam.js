'use strict';
import React, {PureComponent} from 'react';
import {TouchableOpacity, View, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import {RNCamera} from 'react-native-camera';
import Style from './style';

class Cameramasuk extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fotodalam: '',
    };
  }

  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      // console.log(data.base64);
      this.setState({fotodalam: data.base64}, () => console.log(this.state));
      this.props.navigation.navigate('InputData', {fotodalam: data.base64});
    }
  };

  renderbuttonCamera = () => {
    return (
      <View style={Style.buttonCamera} key={this.state.buttoncamera}>
        <TouchableOpacity>
          <Icon name={'refresh'} size={85} color={'green'} style={Style.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.takePicture} style={Style.capture} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('InputData')}>
          <Icon name={'close-o'} size={80} color={'red'} style={Style.icon} />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={Style.cameraview}>
        <StatusBar translucent backgroundColor="transparent" />
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={Style.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        {this.renderbuttonCamera()}
      </View>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    action: state.input.foto_dalam,
    // loginError: state.auth.loginError,
  };
};

export default connect(mapStateToProps)(Cameramasuk);
