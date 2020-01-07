import React, {Component} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import CodePin from './componentPIN';
import Styles from './style';
import ButtonSimpan from '../../../component/Button/ButtonAkun';
export default class LupaKataSandi extends Component {
  static navigationOptions = () => ({
    title: 'Ganti Pin Keamanan',
    headerTransparent: false,
    headerTitleStyle: Styles.headerTitleStyle,
    headerStyle: Styles.headerStyle,
  });
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={Styles.container}>
            <Text style={Styles.TextInput}> PIN LAMA</Text>
            <View style={Styles.fieldContain}>
              <CodePin
                id={1}
                number={6}
                secureTextEntry={true}
                // checkPinCode={(code, callback) => callback(code === '123455')}
                success={() => console.log('hurray!')}
                // error="Tidak Sesuai Dengan PIN Baru Anda"
                autoFocusFirst={false}
              />
            </View>
            <Text style={Styles.TextInput}> PIN Baru</Text>
            <View style={Styles.fieldContain}>
              <CodePin
                id={1}
                number={6}
                secureTextEntry
                checkPinCode={(code, callback) => callback(code === '123455')}
                success={() => console.log('hurray!')}
                error="Tidak Sesuai Dengan PIN Baru Anda"
                autoFocusFirst={false}
              />
            </View>
            <Text style={Styles.TextInput}> Ulangi PIN Baru</Text>
            <View style={Styles.fieldContain}>
              <CodePin
                id={1}
                number={6}
                secureTextEntry={true}
                checkPinCode={(code, callback) => callback(code === '123455')}
                success={() => console.log('hurray!')}
                error="Tidak Sesuai Dengan PIN Baru Anda"
                autoFocusFirst={false}
              />
            </View>
            <View style={Styles.Button}>
              <ButtonSimpan textField={'SIMPAN'} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
