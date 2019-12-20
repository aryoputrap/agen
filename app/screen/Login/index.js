import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import {StackActions, NavigationActions} from 'react-navigation';
import {login} from '../../redux/auth/authAction';
import {LOGIN_SUCCESS, LOGIN_FAILED} from '../../redux/auth/authConstant';
// import {isEmail, isValidPassword} from '../../utility/Validation';
import LoadingScreen from '../../component/Loading';
import Button from '../../component/Button/ButtonAkun';
import Styles from './style';
class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        username: '',
        password: '',
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

  componentDidUpdate(prevProps) {
    const {action} = this.props;
    if (prevProps.action !== action) {
      switch (action) {
        case LOGIN_SUCCESS:
          this.onSuccessLogin();
          break;
        case LOGIN_FAILED:
          this.onFailedLogin();
          break;
        default:
      }
    }
  }

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

  handleChange = (text, state) => {
    this.setState(_prevState => ({
      data: {
        ...this.state.data,
        [state]: text,
      },
    }));
  };

  loginProcess() {
    const {data} = this.state;
    if (
      data.username === '' ||
      data.username == null ||
      data.password === '' ||
      data.password == null
    ) {
      this.setState({
        usernameError: true,
        passwordError: true,
        errorMessage:
          'Username atau password salah,\n silakan cek kembali data anda.',
      });
    } else if (this.state.data.password.length < 6) {
      this.setState({
        passwordError: true,
        passwordErrorMessage: 'Password minimal 6 karakter.',
      });
    } else if (data.username === 'error' && data.password === 'error') {
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
      });
    }
    const sendData = {
      email: `${data.username}`,
      password: data.password,
    };
    this.props.login(sendData);
    return true;
  }
  showPassword = () => {
    this.setState({showPassword: !this.state.showPassword});
  };
  render() {
    const {validation} = this.state;
    const {username, password} = this.state.data;
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
            onChangeText={text => this.handleChange(text, 'username')}
            value={username}
          />
          {validation.email ? (
            <Text style={Styles.error}>Please enter valid email</Text>
          ) : null}
          <Text style={([Styles.textLogin], {marginTop: 20})}>Kata Sandi</Text>
          <TextInput
            style={Styles.Textinput}
            placeholder={'Kata Sandi'}
            secureTextEntry={true}
            onChangeText={text => this.handleChange(text, 'password')}
            value={password}
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
          <Button textField={'MASUK'} onPress={() => this.loginProcess()} />
        </View>
        <LoadingScreen flag={this.state.isLoading} />
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => ({
  action: state.auth.action,
  // deviceId: state.session.deviceId,
  loginError: state.auth.loginError,
});

const mapDispatchToProps = {
  login: payload => login(payload),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
