import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
// import {StackActions, NavigationActions} from 'react-navigation';
// import btoa from 'btoa';
import RNLocation from 'react-native-location';
import {login} from '../../redux/auth/authAction';
import Modal from '../../component/Modal';
// import {LOGIN_SUCCESS, LOGIN_FAILED} from '../../redux/auth/authConstant';
import axios from 'axios';
import LoadingScreen from '../../component/Loading';
import Button from '../../component/Button/ButtonAkun';
import Styles from './style';
import Color from '../../config/color';

class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      dataLogin: {
        username: '',
        password: '',
        versi: '1.0.0',
        latitude: '-8.546',
        longitude: '105.823629',
        accuracy: '2.0',
      },
      showPassword: false,
      validation: {
        email: false,
        password: false,
      },
      errorMessage: null,
      usernameError: false,
      showpassword: true,
      press: false,
      passwordError: false,
      passwordErrorMessage: null,
      isLoading: false,
      isModalSucces: false,
      isModalFailed: false,
    };
  }

  // componentDidUpdate(kirimLogin) {
  //   switch (kirimLogin) {
  //     case 200:
  //       this.onSuccessLogin();
  //       break;
  //     case 400:
  //       this.onFailedLogin();
  //       break;
  //     case 401:
  //       this.onFailedLogin();
  //       break;
  //     case 403:
  //       this.onFailedLogin();
  //       break;
  //     default:
  //   }
  // }

  alertLogin() {
    this.setState({isLoading: true});
  }

  handleChange(payload) {
    const {name, val} = payload;
    const Data = {...this.state.dataLogin};
    Data[name] = val;
    // console.log(Data);
    this.setState({dataLogin: Data});
    const isCompleteForm = Object.values(this.state.dataLogin).every(
      e => e !== '',
    );
    this.setState({isCompleteForm});
  }

  loginProcess() {
    const {dataLogin} = this.state;
    if (
      dataLogin.username === '' ||
      dataLogin.username == null ||
      dataLogin.password === '' ||
      dataLogin.password == null
    ) {
      this.setState({
        usernameError: true,
        passwordError: true,
        errorMessage:
          'Username atau password salah,\n silakan cek kembali data anda.',
      });
    } else if (this.state.dataLogin.password.length < 8) {
      this.setState({
        passwordError: true,
        passwordErrorMessage: 'Password minimal 8 karakter.',
      });
    } else if (
      dataLogin.username === 'error' &&
      dataLogin.password === 'error'
    ) {
      this.setState({
        errorMessage:
          'Maaf, jumlah akun yang data sudah mencapai \n batas maksimal(5 perangkat).\n Harap hubungi admin apotek',
      });
    } else {
      this.setState({isLoading: true});
      this.kirimLogin();
    }
  }

  kirimLogin = () => {
    const {dataLogin} = this.state;
    const user = {
      username: dataLogin.username,
      password: dataLogin.password,
      versi: dataLogin.versi,
      latitude: dataLogin.latitude,
      longitude: dataLogin.longitude,
      accuracy: dataLogin.accuracy,
    };
    console.log(user);
    const credentials = 'dG9rb3BhbmRhaS5pZDp0MGtPcEBOZEAhMTIzNDU2Nzg=';
    const header = {
      Authorization: 'Basic ' + credentials,
      'Content-Type': 'application/json',
      'x-api-key':
        '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
    };
    axios({
      method: 'POST',
      url: 'http://support.tokopandai.id:3003/Api/login',
      headers: header,
      data: user,
      // auth: {
      //   username: 'tokopandai.id',
      //   password: 't0kOp@Nd@!12345678',
      // },
    })
      .then(response => {
        this.response = response.data;
        console.log(response.data);
        console.log(this.response.data.token);
        console.log(this.response.data.option);
        // console.log(response.config);
        console.log(response.first_login);
        if (this.response.data.first_login === 0) {
          this.onupdateLogin();
        } else if (this.response.data.first_login !== 0) {
          this.onSuccessLogin();
        }
        this.setState({
          isLoading: false,
        });
      })
      .catch(error => {
        console.log(error);
        this.onFailedLogin();
      });
  };

  onupdateLogin() {
    this.setState({isModalSucces: false});
    this.props.navigation.navigate('GantiKataSandi');
  }

  onSuccessLogin() {
    this.setState({isModalSucces: false});
    this.props.navigation.navigate('StackPublic');
  }

  onFailedLogin() {
    this.setState({isModalFailed: true});
    Alert.alert('Log In Gagal');
  }

  callAlert(message) {
    Alert.alert('Pesan', message, [{text: 'OK'}], {cancelable: false});
  }

  showPassword = () => {
    if (this.state.press === false) {
      this.setState({showpassword: false, press: true});
    } else {
      this.setState({showpassword: true, press: false});
    }
  };

  componentDidMount() {
    RNLocation.configure({
      distanceFilter: 5.0,
      desiredAccuracy: {
        ios: 'best',
        android: 'balancedPowerAccuracy',
      },
      androidProvider: 'auto',
      interval: 5000,
      fastestInterval: 10000,
      maxWaitTime: 5000,
    });
    RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'fine',
      },
    }).then(granted => {
      if (granted) {
        this.locationSubscription = RNLocation.subscribeToLocationUpdates(
          locations => {
            const lat = locations[0].latitude;
            const long = locations[0].longitude;
            const innerFormData = {...this.state.dataLogin};
            innerFormData.latitude = lat.toString();
            innerFormData.longitude = long.toString();
            this.setState({dataLogin: innerFormData});
          },
        );
      }
    });
  }
  render() {
    const {dataLogin} = this.state;
    const {validation} = this.state;
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView>
        <StatusBar translucent backgroundColor="transparent" />
        <View>
          <Modal
            isVisible={this.state.isModalSucces}
            TextModal={'Silahkan Update Username dan Password'}
            source={require('../../asset/images/icon/success-icon.png')}
            Press={() =>
              this.props.navigation.navigate('GantiKataSandi') &&
              this.setState({isModalSucces: false})
            }
          />
          <Modal
            isVisible={this.state.isModalSucces}
            TextModal={'Berhasil Login \n Selamat Datang dan Semangat Bekerja'}
            source={require('../../asset/images/icon/success-icon.png')}
            Press={() =>
              this.props.navigation.navigate('GantiKataSandi') &&
              this.setState({isModalSucces: false})
            }
          />
          <Modal
            isVisible={this.state.isModalSucces}
            TextModal={'Anda Tidak Dapat Login'}
            source={require('../../asset/images/icon/gagal-icon.png')}
            Press={() =>
              this.props.navigation.navigate('Login') &&
              this.setState({isModalFailed: false})
            }
          />
        </View>
        <Text style={Styles.headerTitleStyle}>MASUK</Text>
        <View style={Styles.marginLogin}>
          {this.state.errorMessage && (
            <Text style={Styles.errorMassage}>{this.state.errorMessage}</Text>
          )}
          <Text style={Styles.textLogin}>Email / No.Handphone</Text>
          <TextInput
            style={Styles.Textinput}
            placeholder={'Email/No Handphone'}
            returnKeyType={'next'}
            keyboardType={'default'}
            onChangeText={username =>
              this.handleChange({name: 'username', val: username})
            }
            value={dataLogin.username}
          />
          {validation.email ? (
            <Text style={Styles.error}>Please enter valid email</Text>
          ) : null}
          <Text style={([Styles.textLogin], {marginTop: 20})}>Kata Sandi</Text>
          <View style={Styles.viewpassword}>
            <TextInput
              style={Styles.Textinputpassword}
              placeholder={'Kata Sandi'}
              secureTextEntry={this.state.showpassword}
              onChangeText={password =>
                this.handleChange({name: 'password', val: password})
              }
              value={dataLogin.password}
              onKeyPress={() => this.loginProcess()}
            />
            <TouchableOpacity
              onPress={this.showPassword.bind(this)}
              style={Styles.BtnEye}>
              <Icon
                name={this.state.press === false ? 'eye' : 'eye-slash'}
                size={30}
                color={
                  this.state.press === false
                    ? Color.main.greyLine
                    : Color.main.blueAkun
                }
              />
            </TouchableOpacity>
          </View>

          {validation.password ? (
            <Text style={Styles.error}>Please enter valid password</Text>
          ) : null}
        </View>
        <TouchableOpacity
          style={Styles.LupaKataSandi}
          onPress={() => navigate('LupaKataSandi')}>
          <Text style={Styles.textLupaKataSandi}>Lupa Kata Sandi?</Text>
        </TouchableOpacity>
        <View style={Styles.button}>
          <Button textField={'MASUK'} onPress={() => this.loginProcess()} />
          {/* <Button textField={'MASUK'} onPress={() => this.kirimLogin()} /> */}
        </View>
        <LoadingScreen flag={this.state.isLoading} />
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => ({
  action: state.auth.action,
  loginError: state.auth.loginError,
});

const mapDispatchToProps = {
  login: payload => login(payload),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
