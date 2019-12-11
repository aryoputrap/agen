import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from './style';
import Icon from 'react-native-vector-icons/Entypo';

const FieldSupport = props => {
  const {TextField, onPress} = props;
  return (
    <View style={Styles.containerField}>
      <TouchableOpacity onPress={onPress}>
        <View style={Styles.lineField}>
          <View style={Styles.bantuan}>
            <Text style={Styles.textBantuan}>{TextField}</Text>
            <Icon name={'chevron-right'} size={18} style={Styles.iconStyle} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FieldSupport;
