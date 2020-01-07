import React, {Component} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import Styles from './style';
export default class LupaKataSandi extends Component {
  static navigationOptions = () => ({
    title: 'Tentang Toko Pandai',
    headerTransparent: false,
    headerTitleStyle: Styles.headerTitleStyle,
    headerStyle: Styles.headerStyle,
  });
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text> Tentang Toko Pandai</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
