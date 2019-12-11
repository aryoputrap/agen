import React from 'react';
import {View, Text} from 'react-native';
import Styles from './style';

const FieldAccount = props => {
  const {textField, titleField} = props;
  return (
    <View style={Styles.containerField}>
      <Text style={Styles.titleField}>{titleField}</Text>
      <View style={Styles.barrier}>
        <Text style={Styles.fieldData}>{textField}</Text>
      </View>
    </View>
  );
};

export default FieldAccount;
