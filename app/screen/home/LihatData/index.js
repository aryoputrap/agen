import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Dropdown from '../../../component/Dropdown';
import Button from '../../../component/Button/ButtonAkun';
import Styles from './style';
export default class LupaKataSandi extends Component {
  static navigationOptions = () => ({
    title: 'Lihat Data',
    headerTransparent: false,
    headerTitleStyle: Styles.headerTitleStyle,
    headerStyle: Styles.headerStyle,
  });
  render() {
    return (
      <SafeAreaView>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={Styles.container}>
          <Text style={Styles.TextInput}>Lihat Data</Text>
          <View style={Styles.dropdown}>
            <TouchableOpacity style={Styles.buttonDropdown}>
              <Dropdown
                style={Styles.dropdownStyle}
                defaultValue={'Pilih Jenis Data'}
                options={['Install', 'No Install', 'Reminder Bayar Nanti']}
              />
            </TouchableOpacity>
          </View>
          <View style={Styles.Button}>
            <Button textField={'Simpan'} onPress={console.log('Keluar')} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
