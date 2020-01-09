import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Styles from './style';

export default class info extends Component {
  static navigationOptions = () => ({
    title: 'Riwayat',
    headerTransparent: false,
    headerTitleStyle: Styles.headerTitleStyle,
    headerStyle: Styles.headerStyle,
  });
  render() {
    return (
      <View>
        <Text>Ini RIWAYAT</Text>
      </View>
    );
  }
}
