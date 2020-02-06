import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
  StatusBar,
  // PermissionsAndroid
} from 'react-native';
//IMPORT_REDUX
import {connect} from 'react-redux';
import {StackActions, NavigationActions} from 'react-navigation';
import {LOGIN_FAILED, LOGIN_SUCCESS} from '../../redux/auth/authConstant';
import {login} from '../../redux/auth/authAction';
// import btoa from 'btoa';
//IMPORT_COMPONENTS
import Icon from 'react-native-vector-icons/FontAwesome';
import RNLocation from 'react-native-location';
import Modal from '../../component/Modal';
import LoadingScreen from '../../component/Loading';
import Button from '../../component/Button/ButtonAkun';
import Styles from './style';
import Color from '../../config/color';
import Loading from '../../component/Loading';

class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      dataLogin: {
        username: '',
        password: '',
        versi: '1.0.0',
        latitude: '-6.209506',
        longitude: '106.8323306',
        accuracy: '2.0',
      },
      showPassword: false,
      validation: {
        email: false,
        password: false,
      },
      token: 'ga ada token',
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

  componentDidUpdate(prevProps) {
    this.getDataTable();
    const {action} = this.props;
    if (prevProps.action !== action) {
      switch (action) {
        case LOGIN_SUCCESS:
          // Alert.alert('Login Mantap Sukses');
          this.onSuccessLoginRedux();
          break;
        case LOGIN_FAILED:
          this.onFailedLoginRedux();
          Alert.alert('Login Gagal');
          break;
        default:
      }
    }
  }

  alertLogin() {
    this.setState({isLoading: true});
  }

  getDataTable = async () => {
    const tokenlogin = await AsyncStorage.getItem('token');
    // console.log(tokenlogin);
    this.setState({
      token: tokenlogin,
    });
  };

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
    } else if (dataLogin.password.length < 8) {
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
      this.setState({
        usernameError: false,
        passwordError: false,
        errorMessage: null,
      });
      this.setState({isLoading: true});
      // this.kirimLogin(); // --->> static endpoint
      const sendData = {
        username: dataLogin.username,
        password: dataLogin.password,
        versi: dataLogin.versi,
        latitude: dataLogin.latitude,
        longitude: dataLogin.longitude,
        accuracy: dataLogin.accuracy,
      };
      this.props.login(sendData);
      // console.log(login);
      return true;
    }
  }

  onupdateLogin() {
    this.setState({isModalSucces: false});
    this.props.navigation.navigate('GantiKataSandi');
  }

  onSuccessLoginRedux() {
    this.setState({isLoading: false});
    this.props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'StackPublic'})],
      }),
    );
  }

  onFailedLoginRedux() {
    this.setState({isLoading: false});
    // if (this.props.loginError.message.includes('400')) {
    //   this.callAlert(
    //     'Terjadi Kesalahan, Silahkan ulangi kembali! \n pastikan username dan password anda benar',
    //   );
    // } else if (this.props.loginError.message.includes('500')) {
    //   this.callAlert('Internal Server Error');
    // } else if (this.props.loginError.message.includes('401')) {
    //   this.callAlert('Unauthorized');
    // } else if (this.props.loginError.message.includes('403')) {
    //   this.callAlert('Forbidden');
    // } else {
    //   this.callAlert(this.props.loginError.message);
    // }
  }

  onSuccessLogin() {
    this.setState({isModalSucces: false});
    this.props.navigation.navigate('StackPublic');
  }

  onFailedLogin() {
    this.setState({isModalFailed: true});
    this.setState({
      isLoading: false,
    });
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
        <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFF'} />
        <Loading flag={this.state.isLoading} />
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
              // secureTextEntry={this.state.showpassword}
              onChangeText={password =>
                this.handleChange({name: 'password', val: password})
              }
              value={dataLogin.password}
              // onKeyPress={() => this.loginProcess()}
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
          {/* <Text> token nya : {this.state.token}</Text> */}
        </TouchableOpacity>
        <View style={Styles.button}>
          {/* <Button textField={'MASUK'} onPress={() => this.kirimLogin()} /> */}
          <Button textField={'MASUK'} onPress={() => this.loginProcess()} />
          {/* <Button
            textField={'MASUK'}
            onPress={() => this.props.navigation.navigate('StackPublic')}
          /> */}
        </View>
        <LoadingScreen flag={this.state.isLoading} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    action: state.auth.action,
    loginError: state.auth.loginError,
  };
};

const mapDispatchToProps = {
  login: payload => login(payload),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
