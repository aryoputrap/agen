import React, {Component} from 'react';
import {View, Image} from 'react-native';
import Styles from './style';

export default class ImageApp extends Component {
  render() {
    return (
      <View>
        <Image
          source={require('../../../../asset/images/insert-photo.png')}
          resizeMode={'stretch'}
          style={Styles.fotoData}
        />
      </View>
    );
  }
}
