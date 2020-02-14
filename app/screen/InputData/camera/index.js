import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Styles from '../style';

const ImageApp = props => {
  const {onPress} = props;
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Icon
          name={'refresh'}
          size={50}
          color={'green'}
          style={Styles.iconfoto}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ImageApp;
