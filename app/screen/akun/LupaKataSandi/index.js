import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import TextInput from '../../../component/TextInput';
import Button from '../../../component/Button/ButtonAkun';
import Styles from './style';
export default class LupaKataSandi extends Component {
  static navigationOptions = () => ({
    title: 'Lupa Kata Sandi',
    headerTransparent: false,
    headerTitleStyle: Styles.headerTitleStyle,
    // headerStyle: Styles.headerStyle,
  });
  render() {
    return (
      <SafeAreaView>
        <View style={Styles.container}>
          <Text style={Styles.TextInput}>Username</Text>
          <TextInput keyboardType={'number-pad'} placeholder={'Username'} />
          <View style={Styles.Button}>
            <Button textField={'Kirim'} onPress={console.log('Keluar')} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
