import React, {Component} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
export default class LupaKataSandi extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Akun',
  });
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text> Lupa Kata Sandi</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
