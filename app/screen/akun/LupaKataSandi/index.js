import React, {Component} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import TextInput from '../../../component/TextInput';
import Button from '../../../component/Button/ButtonAkun';
import Styles from './style';
export default class LupaKataSandi extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Akun',
  });
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={Styles.container}>
            <Text style={Styles.TextInput}>Kata Sandi Baru</Text>
            <TextInput
              keyboardType={'number-pad'}
              placeholder={'Kata Sandi Baru'}
            />
            <Text style={Styles.TextInput}>Ulangi Kata Sandi</Text>
            <TextInput
              keyboardType={'number-pad'}
              placeholder={'Ulangi Kata Sandi'}
            />
            <Text style={Styles.TextInput}>Ulangi Kata Sandi</Text>
            <TextInput
              keyboardType={'number-pad'}
              placeholder={'Masukan kembali Kata Sandi Baru'}
            />
            <View style={Styles.Button}>
              <Button textField={'Simpan'} onPress={console.log('Keluar')} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
