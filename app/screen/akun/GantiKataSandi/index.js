import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import TextInput from '../../../component/TextInput';
import Button from '../../../component/Button/ButtonAkun';
import Styles from './style';
export default class LupaKataSandi extends Component {
  static navigationOptions = () => ({
    title: 'Ganti Kata Sandi',
    headerTransparent: false,
    headerTitleStyle: Styles.headerTitleStyle,
    // headerStyle: Styles.headerStyle,
  });
  constructor() {
    super();
    this.state = {
      userUpdate: {
        username: '',
        password_baru: '',
        konfrim: '',
      },
    };
  }
  handleChange(payload) {
    const {name, value} = payload;
    const Data = {...this.state.userUpdate};
    Data[name] = value;
    console.log(Data);
    this.setState({userUpdate: Data});
    const isCompleteForm = Object.values(this.state.userUpdate).every(
      e => e !== '',
    );
    this.setState({isCompleteForm});
  }
  render() {
    const {userUpdate} = this.state;
    return (
      <SafeAreaView>
        {/* <StatusBar /> */}
        <View style={Styles.container}>
          <Text style={Styles.TextInput}>Username</Text>
          <TextInput
            keyboardType={'default'}
            placeholder={'Kata Sandi Baru'}
            onChangeText={username =>
              this.handleChange({name: 'username', value: username})
            }
            value={userUpdate.username}
          />
          <Text style={Styles.TextInput}>Kata Sandi Baru</Text>
          <TextInput
            keyboardType={'default'}
            placeholder={'Masukan Kata Sandi'}
            value={userUpdate.password_baru}
            onChangeText={password_baru =>
              this.handleChange({name: 'password_baru', value: password_baru})
            }
          />
          <Text style={Styles.TextInput}>Ulangi Kata Sandi</Text>
          <TextInput
            keyboardType={'default'}
            placeholder={'Masukan kembali Kata Sandi Baru'}
            value={userUpdate.konfrim}
            onChangeText={konfrim =>
              this.handleChange({name: 'konfrim', value: konfrim})
            }
          />
          <View style={Styles.Button}>
            <Button textField={'Simpan'} onPress={console.log('Keluar')} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
