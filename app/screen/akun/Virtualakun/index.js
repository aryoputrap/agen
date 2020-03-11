import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import axios from 'axios';
import decode from 'jwt-decode';
import AsyncStorage from '@react-native-community/async-storage';
import DropdownAlert from 'react-native-dropdownalert';
import TextInput from '../../../component/TextInput';
import HeaderComponent from '../../../component/Header';
import Button from '../../../component/Button/ButtonAkun';
import Styles from './style';
// import { error } from '../../../component/Chat/utils';
export default class Virtualakun extends Component {
  constructor() {
    super();
    this.state = {
      userUpdate: {
        usermail: '',
        novirtual: '',
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

  kirimUpdate = async () => {
    const tokenx = await AsyncStorage.getItem('token');
    const iduser = await decode(tokenx);
    const id = iduser.body[0];
    const {userUpdate} = this.state;
    const user = {
      id: id,
      email: userUpdate.usermail,
      va: userUpdate.novirtual,
    };
    console.log(user);
    const header = {
      Authorization: 'Bearer ' + tokenx,
      'Content-Type': 'application/json',
      'x-api-key':
        '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
    };
    axios({
      method: 'POST',
      url: 'http://support.tokopandai.id:3003/Api/isiSaldo/validasi',
      headers: header,
      data: user,
    })
      .then(response => {
        this.response = response.data;
        this.dropDownAlertRef.alertWithType(
          'warn',
          'Mohon diperiksa kembali !',
          response.data.message,
        );
        // console.log(response);
        this.onSuccessUpdate();
      })
      .catch(error => {
        // console.log(error.response.data.message);
        this.dropDownAlertRef.alertWithType(
          'warn',
          'Mohon diperiksa kembali !',
          error.response.data.message,
        );
      });
  };

  Keluar = async () => {
    this.setState({isLoading: true});
    const tokenx = await AsyncStorage.getItem('token');
    const iduser = await decode(tokenx);
    const id = iduser.body[0];
    const {userLogout} = this.state;
    const user = {
      id: id,
      latitude: userLogout.latitude,
      longitude: userLogout.longitude,
      accuracy: userLogout.accuracy,
    };
    console.log(user);
    this.props.logout(user);
    return true;
  };

  updateProcess() {
    const {userUpdate} = this.state;
    if (
      userUpdate.usermail === '' ||
      userUpdate.usermail == null ||
      userUpdate.novirtual === '' ||
      userUpdate.novirtual == null
    ) {
      this.setState({
        usernameError: true,
        passwordError: true,
        errorMessage:
          'Usermail atau no Virtual Account,\n silakan cek kembali dan Pastikan data Terisi.',
      });
    } else {
      this.kirimUpdate();
    }
  }

  onSuccessUpdate() {
    this.setState({isLoading: false});
    AsyncStorage.removeItem('token');
    this.props.navigation.navigate('Login');
  }

  handleChange(payload) {
    const {name, value} = payload;
    const Data = {...this.state.userUpdate};
    Data[name] = value;
    // console.log(Data);
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
        <HeaderComponent
          title={'Virtual Account'}
          onPress={() => this.props.navigation.navigate('StackPublic')}
        />
        <View>
          <DropdownAlert ref={ref => (this.dropDownAlertRef = ref)} />
        </View>
        <View style={Styles.container}>
          {this.state.errorMessage && (
            <Text style={Styles.errorMassage}>{this.state.errorMessage}</Text>
          )}
          <Text style={Styles.TextInput}>Email</Text>
          <TextInput
            keyboardType={'default'}
            placeholder={'Email Agent'}
            onChangeText={usermail =>
              this.handleChange({name: 'usermail', value: usermail})
            }
            value={userUpdate.usermail}
          />
          <Text style={Styles.TextInput}>No Virtual Account</Text>
          <TextInput
            keyboardType={'numeric'}
            placeholder={'Nomor Virtual Account'}
            value={userUpdate.novirtual}
            onChangeText={novirtual =>
              this.handleChange({name: 'novirtual', value: novirtual})
            }
          />
          <View style={Styles.Button}>
            <Button textField={'SUBMIT'} onPress={() => this.updateProcess()} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
