import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {StackActions, NavigationActions} from 'react-navigation';
import RNLocation from 'react-native-location';
import {login} from '../../redux/auth/authAction';
// import {LOGIN_SUCCESS, LOGIN_FAILED} from '../../redux/auth/authConstant';
import axios from 'axios';
import LoadingScreen from '../../component/Loading';
import Button from '../../component/Button/ButtonAkun';
import Styles from './style';

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
      passwordError: false,
      passwordErrorMessage: null,
      isLoading: false,
    };
  }
  //Kalau Respon Login in nya = 0 maka lakukan Ganti Kata Sandi
  componentDidUpdate(kirimLogin) {
    switch (kirimLogin) {
      case 200:
        this.onSuccessLogin();
        break;
      case 400:
        this.onFailedLogin();
        break;
      case 401:
        this.onFailedLogin();
        break;
      case 403:
        this.onFailedLogin();
        break;
      default:
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

    const header = {
      'Content-Type': 'application/json',
      'x-api-key':
        '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
    };
    axios({
      method: 'POST',
      url: 'http://support.tokopandai.id:3003/Api/login',
      headers: header,
      data: user,
      auth: {
        username: 'tokopandai.id',
        password: 't0kOp@Nd@!12345678',
      },
    })
      .then(response => {
        var response = response.data;
        console.log(response);
        console.log(response.data.first_login);
        if (response.first_login === 0) {
          this.props.navigation.navigate('GantiKataSandi');
        } else if (response.first_login > 0) {
          this.props.navigation.navigate('StackPublic');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  onSuccessLogin() {
    this.setState({isLoading: false});
    this.props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'StackPublic'})],
      }),
    );
  }

  onFailedLogin() {
    this.setState({isLoading: false});
    if (this.props.loginError.message.includes('400')) {
      this.callAlert(
        'Opps.. Terjadi kesalahan. Silahkan ulangi kembali dan pastikan username dan password anda benar',
      );
    } else {
      this.callAlert(this.props.loginError.message);
    }
  }

  callAlert(message) {
    Alert.alert('Pesan', message, [{text: 'OK'}], {cancelable: false});
  }

  handleChange(payload) {
    const {name, val} = payload;
    const Data = {...this.state.dataLogin};
    Data[name] = val;
    console.log(Data);
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
    } else if (this.state.dataLogin.password.length < 6) {
      this.setState({
        passwordError: true,
        passwordErrorMessage: 'Password minimal 6 karakter.',
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
        passwordError: false,
        errorMessage: null,
        usernameError: false,
        passwordErrorMessage: null,
        isLoading: true,
      }) && this.kirimLogin;
    }
  }

  showPassword = () => {
    this.setState({showPassword: !this.state.showPassword});
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
          <TextInput
            style={Styles.Textinput}
            placeholder={'Kata Sandi'}
            secureTextEntry={true}
            onChangeText={password =>
              this.handleChange({name: 'password', val: password})
            }
            value={dataLogin.password}
          />
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
          <Button textField={'MASUK'} onPress={() => this.kirimLogin()} />
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
