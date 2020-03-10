import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import axios from 'axios';
import TextInput from '../../../component/TextInput';
import Button from '../../../component/Button/ButtonAkun';
import Styles from './style';
// import { error } from '../../../component/Chat/utils';
export default class Virtualakun extends Component {
  static navigationOptions = () => ({
    title: 'Virtual Account',
    headerTransparent: false,
    headerTitleStyle: Styles.headerTitleStyle,
    headerStyle: Styles.headerStyle,
  });
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

  kirimUpdate = () => {
    const {userUpdate} = this.state;
    const user = {
      usermail: userUpdate.usermail,
      novirtual: userUpdate.novirtual,
    };
    console.log(user);

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
