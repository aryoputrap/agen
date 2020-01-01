import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import axios from 'axios';
import TextInput from '../../../component/TextInput';
import Button from '../../../component/Button/ButtonAkun';
import Styles from './style';
// import { error } from '../../../component/Chat/utils';
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
        konfirm: '',
      },
      errorMessage: null,
      usernameError: false,
      passwordError: false,
      passwordErrorMessage: null,
      isLoading: false,
      isModalSucces: false,
      isModalFailed: false,
    };
  }

  kirimUpdate = () => {
    const {userUpdate} = this.state;
    const user = {
      username: userUpdate.username,
      password_baru: userUpdate.password_baru,
      konfirm: userUpdate.konfirm,
    };

    const header = {
      'Content-Type': 'application/json',
      'x-api-key':
        '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
    };
    axios({
      method: 'PUT',
      url: 'http://support.tokopandai.id:3003/Api/login',
      headers: header,
      data: user,
      auth: {
        username: 'tokopandai.id',
        password: 't0kOp@Nd@!12345678',
      },
    })
      .then(response => {
        this.response = response.data;
        console.log(response);
        console.log(response.data.first_login);
        this.onSuccessUpdate();
      })
      .catch(error => {
        console.error(error);
      });
  };

  updateProcess() {
    const {userUpdate} = this.state;
    if (
      userUpdate.username === '' ||
      userUpdate.username == null ||
      userUpdate.password_baru === '' ||
      userUpdate.password_baru == null ||
      userUpdate.konfirm === '' ||
      userUpdate.konfirm == null
    ) {
      this.setState({
        usernameError: true,
        passwordError: true,
        errorMessage:
          'Username atau password salah,\n silakan cek kembali dan Pastikan data Terisi.',
      });
    } else if (
      this.state.userUpdate.password_baru !== this.state.userUpdate.konfirm
    ) {
      this.setState({
        passwordError: true,
        errorMessage: 'Kata Sandi Baru Harus Sama Dengan Ulangi Kata Sandi!',
      });
    } else if (this.state.userUpdate.password_baru.length < 8) {
      this.setState({
        passwordError: true,
        errorMessage: 'Password minimal 8 karakter.',
      });
    } else {
      this.kirimUpdate();
    }
  }

  onSuccessUpdate() {
    this.setState({isLoading: false});
    this.props.navigation.navigate('Login');
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
        {/* <StatusBar translucent backgroundColor="transparent" /> */}
        <View style={Styles.container}>
          {this.state.errorMessage && (
            <Text style={Styles.errorMassage}>{this.state.errorMessage}</Text>
          )}
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
            value={userUpdate.konfirm}
            onChangeText={konfirm =>
              this.handleChange({name: 'konfirm', value: konfirm})
            }
          />
          <View style={Styles.Button}>
            <Button textField={'Simpan'} onPress={() => this.updateProcess()} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
