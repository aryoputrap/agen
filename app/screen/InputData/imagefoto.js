import React from 'react';
import {View, Image} from 'react-native';
import Styles from './style';

const ImageApp = props => {
  const {source} = props;
  return (
    <View>
      <Image source={source} resizeMode={'stretch'} style={Styles.fotoData} />
    </View>
  );
};

export default ImageApp;
