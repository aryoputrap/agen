import React, {Component} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import CodePin from './componentPIN';
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
            <Text> PIN LAMA</Text>
            <View style={Styles.fieldContain}>
              <CodePin
                id={1}
                number={6}
                checkPinCode={(code, callback) => callback(code === '123456')}
                success={() => console.log('hurray!')}
                error="Tidak Sesuai Dengan PIN Baru Anda"
                autoFocusFirst={false}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
