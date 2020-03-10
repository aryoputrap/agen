import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import Styles from './style';

export default class info extends Component {
  render() {
    return (
      <View style={Styles.inputMoneyfalse}>
        <TextInput editable={false} placeholder={'Checkbox'} />
      </View>
    );
  }
}
