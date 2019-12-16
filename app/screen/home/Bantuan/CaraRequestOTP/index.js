import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Styles from './style';
export default class LupaKataSandi extends Component {
  static navigationOptions = () => ({
    title: 'Cara Request OTP',
    headerTransparent: false,
    headerTitleStyle: Styles.headerTitleStyle,
  });
  render() {
    return (
      <SafeAreaView>
        <View style={Styles.container}>
          <Text style={Styles.TextInput}>Cara Request OTP</Text>
        </View>
      </SafeAreaView>
    );
  }
}
