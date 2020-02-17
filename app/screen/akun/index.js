/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';
import DropdownAlert from 'react-native-dropdownalert';
import AsyncStorage from '@react-native-community/async-storage';
// import Storeage from '../../utility/Storage';
import RNLocation from 'react-native-location';
import decode from 'jwt-decode';
// import axios from 'axios';
import Styles from './style';
import FieldData from '../../component/FieldAccount';
import FieldSupport from '../../component/FieldAccount/TextSupport';
import ButtonLogout from '../../component/Button/ButtonAkun';
import LoadingScreen from '../../component/Loading';
//REDUX
import * as type from '../../redux/auth/authConstant';
import {logout} from '../../redux/auth/authAction';
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: ...']);

class Akun extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      userLogout: {
        latitude: '',
        longitude: '',
        accuracy: '2.0',
      },
      isLoading: false,
    };
  }

  // bottomKeluar = async () => {
  //   const {userLogout} = this.state;
  //   const token = await Storeage.getUser();
  //   const iduser = await decode(token);
  //   const id = iduser.body[0];
  //   const user = {
  //     id: id,
  //     latitude: userLogout.latitude,
  //     longitude: userLogout.longitude,
  //     accuracy: userLogout.accuracy,
  //   };
  //   console.log(user);
  //   const creden = 'dG9rb3BhbmRhaS5pZDp0MGtPcEBOZEAhMTIzNDU2Nzg=';
  //   const header = {
  //     Authorization: 'Basic ' + creden,
  //     'Content-Type': 'application/json',
  //     'x-api-key':
  //       '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
  //   };
  //   axios({
  //     method: 'POST',
  //     url: 'http://support.tokopandai.id:3003/Api/logout',
  //     headers: header,
  //     data: user,
  //   })
  //     .then(response => {
  //       console.log(response);
  //       this.response = response.data;
  //       AsyncStorage.removeItem('token');
  //       console.log(response);
  //       console.log(response.data);
  //       if (response.status === 200) {
  //         this.onSuccessLogout();
  //       }
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

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

  componentDidUpdate(prevProps) {
    const {action} = this.props;
    if (prevProps.action !== action) {
      switch (action) {
        case type.LOGOUT_SUCCESS:
          this.onSuccessLogout();
          break;
        case type.LOGOUT_FAILED:
          this.dropDownAlertRef.alertWithType('error', 'Logout Gagal');
          this.onFailedLogout();
          break;
        default:
      }
    }
  }

  onSuccessLogout() {
    this.setState({isLoading: false});
    this.props.navigation.navigate('Login');
  }

  onFailedLogout() {
    this.setState({isLoading: false});
  }

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
            const innerFormData = {...this.state.userLogout};
            innerFormData.latitude = lat.toString();
            innerFormData.longitude = long.toString();
            this.setState({userLogout: innerFormData});
            console.log(innerFormData);
          },
        );
      }
    });
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView style={Styles.container}>
        <LoadingScreen flag={this.state.isLoading} />
        <DropdownAlert ref={ref => (this.dropDownAlertRef = ref)} />
        <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFF'} />
        <View style={{justifyContent: 'center', alignSelf: 'center', top: 50}}>
          <View style={Styles.boardAccount}>
            <Text style={Styles.namaAkun}>Aryo Putra Purwanto</Text>
            <Text style={Styles.nomorVA}>Nomor VA: 00000021312 </Text>
          </View>
          <View style={{flexDirection: 'row', top: 10}}>
            <Text style={Styles.tentangSaya}>Tentang Saya</Text>
            <TouchableOpacity style={{justifyContent: 'flex-end'}}>
              <Text style={Styles.ubahtentangSaya}>Ubah</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={Styles.scroolview}>
            <View>
              <FieldData
                titleField={'Email'}
                textField={'aryoputrap@tokopandai.id'}
              />
              <FieldData
                titleField={'Nomor Telepon Genggam'}
                textField={'0815880024'}
              />
              <FieldData titleField={'Tempat Lahir'} textField={'Inggris'} />
              <FieldData
                titleField={'Tanggal Lahir'}
                textField={'17 Agustus 1945'}
              />
              <View style={{marginTop: 20}}>
                <FieldSupport
                  TextField={'Ganti Kata Sandi'}
                  onPress={() => navigate('GantiKataSandi')}
                />
                <FieldSupport
                  TextField={'Lupa Kata Sandi'}
                  onPress={() => navigate('LupaKataSandi')}
                />
                <FieldSupport
                  TextField={'Ganti Pin Keamanan'}
                  onPress={() => navigate('GantiPinKeamaan')}
                />
                <FieldSupport
                  TextField={'Lupa Pin Keamanan'}
                  onPress={() => navigate('LupaPinKeamaan')}
                />
                <FieldSupport
                  TextField={'Hubungi Kami'}
                  onPress={() => navigate('HubungiKami')}
                />
                <FieldSupport
                  TextField={'Tentang Toko Pandai'}
                  onPress={() => navigate('TentangTokoPandai')}
                />
              </View>
              <ButtonLogout
                textField={'Keluar'}
                // onPress={() => this.bottomKeluar()}
                onPress={() => this.Keluar()}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    action: state.auth.action,
    // loginError: state.auth.loginError,
  };
};

const mapDispatchToProps = {
  logout: payload => logout(payload),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Akun);
