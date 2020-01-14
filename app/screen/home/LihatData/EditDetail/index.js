import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Styles from './style';

export default class editDetail extends Component {
  static navigationOptions = () => ({
    title: 'Edit Detail',
    headerTransparent: false,
    headerTitleStyle: Styles.headerTitleStyle,
    headerStyle: Styles.headerStyle,
  });
  render() {
    return (
      <View>
        <Text>Ini Adalah Edit editDetail</Text>
      </View>
    );
  }
}
