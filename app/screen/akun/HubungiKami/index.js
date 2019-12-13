import React, {Component} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import Styles from './style';
export default class LupaKataSandi extends Component {
  static navigationOptions = () => ({
    title: 'Hubungi Kami',
    headerTransparent: false,
    headerTitleStyle: Styles.headerTitleStyle,
    // headerStyle: Styles.headerStyle,
  });
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text> HUBUNGI KAMI</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
