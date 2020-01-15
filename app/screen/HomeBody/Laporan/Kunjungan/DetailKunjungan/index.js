import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Styles from './style';

export default class DetailKunjungan extends Component {
  static navigationOptions = () => ({
    title: 'Detail Kunjungan',
    headerTransparent: false,
    headerTitleStyle: Styles.headerTitleStyle,
    headerStyle: Styles.headerStyle,
  });
  render() {
    return (
      <View>
        <Text> Detail Kunjungan</Text>
      </View>
    );
  }
}
