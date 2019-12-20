import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Styles from './style';

const FieldAccount = props => {
  const {textField, onPress} = props;
  return (
    <TouchableOpacity style={Styles.btnField} onPress={onPress}>
      <Text style={Styles.textData}>{textField}</Text>
    </TouchableOpacity>
  );
};

export default FieldAccount;
