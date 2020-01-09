import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Styles from './style';

export default class info extends Component {
  static navigationOptions = () => ({
    title: 'Isi Saldo',
    headerTransparent: false,
    headerTitleStyle: Styles.headerTitleStyle,
    headerStyle: Styles.headerStyle,
  });
  render() {
    return (
      <View>
        <Text>Ini Isi Saldo</Text>
      </View>
    );
  }
}
