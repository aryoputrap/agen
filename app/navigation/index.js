/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Text, Icon} from 'native-base';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Color from '../config/color';
//Opening
import SplashScreen from '../screen/Splashscreen';
//Authen
import Login from '../screen/Login';
import HomeScreen from '../screen/Home';
import AkunScreen from '../screen/Akun';
import InboxScreen from '../screen/InputData';
import Absensi from '../screen/Absensi';
import InputData from '../screen/InputData';
//import HOME_BODY
import Isisaldo from '../screen/HomeBody/Isisaldo';
import Info from '../screen/HomeBody/Info';
import Laporan from '../screen/HomeBody/Laporan';
import Riwayat from '../screen/HomeBody/Riwayat';
//import HOME_BODY_LAPORAN_&_DETAIL
import LaporanAbsensi from '../screen/HomeBody/Laporan/Absensi';
import Kunjungan from '../screen/HomeBody/Laporan/Kunjungan';
import DetailKunjungan from '../screen/HomeBody/Laporan/Kunjungan/DetailKunjungan';
//Import Home
//Home Lihat-Data
import LihatData from '../screen/Home/LihatData';
import DetailData from '../screen/Home/LihatData/DetailData';
import EditDetail from '../screen/Home/LihatData/EditDetail';
import InputEditDetail from '../screen/InputEditDetail';
import Utilisasi from '../screen/Home/Utilisasi';
//Home Bantuan
import Bantuan from '../screen/Home/Bantuan';
//import Akun
import LupaKataSandi from '../screen/Akun/LupaKataSandi';
import GantiKataSandi from '../screen/Akun/GantiKataSandi';
import LupaPinKeamaan from '../screen/Akun/LupaPinKeamanan';
import GantiPinKeamaan from '../screen/Akun/GantiPinKeamanan';
import TentangTokoPandai from '../screen/Akun/TentangTokoPandai';
import HubungiKami from '../screen/Akun/HubungiKami';
//Import Bantuan
import CaraRequestOTP from '../screen/Home/Bantuan/CaraRequestOTP';
import CaraDaftarMaster from '../screen/Home/Bantuan/CaraDaftarMaster';
import CaraPakai from '../screen/Home/Bantuan/CaraPakai';
import CaraDaftarDistributor from '../screen/Home/Bantuan/CaraDaftarDistributor';
import Script from '../screen/Home/Bantuan/Script';
//Chat Inbox
import ChatScreen from '../screen/Chat';

const ROUTES = {
  Home: {name: 'home', label: 'Home'},
  Inbox: {name: 'inbox', label: 'Inbox'},
  Akun: {name: 'akun', label: 'Akun'},
  Chat: {name: 'chat', label: 'Chat'},
};

const TabBarIcon = (props, tintColor) => {
  const {navigation} = props;
  const {routeName} = navigation.state;
  let iconName;
  let iconType;
  if (routeName.toLowerCase() === ROUTES.Home.name) {
    iconName = 'home';
    iconType = 'AntDesign';
  } else if (routeName.toLowerCase() === ROUTES.Inbox.name) {
    iconName = 'envelope-o';
    iconType = 'FontAwesome';
  } else if (routeName.toLowerCase() === ROUTES.Akun.name) {
    iconName = 'user';
    iconType = 'FontAwesome';
  } else if (routeName.toLowerCase() === ROUTES.Chat.name) {
    iconName = 'chat';
    iconType = 'Entypo';
  }
  return (
    <Icon
      type={iconType}
      name={iconName}
      style={{fontSize: 20, color: tintColor}}
    />
  );
};

const TabBarLabel = (props, tintColor) => {
  const {navigation} = props;
  const {routeName} = navigation.state;
  return (
    <Text style={[styles.tabLabel, {color: tintColor}]}>
      {ROUTES[routeName].label}
    </Text>
  );
};

const StackPublic = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Inbox: InboxScreen,
    Akun: AkunScreen,
    Chat: ChatScreen,
  },
  {
    defaultNavigationOptions: props => ({
      tabBarIcon: ({tintColor}) => TabBarIcon(props, tintColor),
      tabBarLabel: ({tintColor}) => TabBarLabel(props, tintColor),
    }),
    // headerMode: null,
    tabBarOptions: {
      showLabel: true,
      activeTintColor: Color.main.blueAkun,
      inactiveTintColor: 'gray',
      keyboardHidesTabBar: false,
      tabStyle: {
        paddingVertical: 10,
      },
      style: {
        height: 50,
        elevation: 12,
        borderTopWidth: 0,
      },
    },
    initialRouteName: 'Home',
  },
);

const PublicStack = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    StackPublic: {
      screen: StackPublic,
      navigationOptions: {
        header: null,
      },
    },
    Isisaldo: Isisaldo,
    Info: Info,
    Laporan: Laporan,
    LaporanAbsensi: LaporanAbsensi,
    Kunjungan: Kunjungan,
    DetailKunjungan: DetailKunjungan,
    Riwayat: Riwayat,
    Absensi: Absensi,
    InputData: InputData,
    LihatData: LihatData,
    Utilisasi: Utilisasi,
    DetailData: DetailData,
    EditDetail: EditDetail,
    InputEditDetail: InputEditDetail,
    Bantuan: Bantuan,
    CaraRequestOTP: CaraRequestOTP,
    CaraDaftarMaster: CaraDaftarMaster,
    CaraPakai: CaraPakai,
    CaraDaftarDistributor: CaraDaftarDistributor,
    Script: Script,
    LupaKataSandi: LupaKataSandi,
    GantiKataSandi: GantiKataSandi,
    LupaPinKeamaan: LupaPinKeamaan,
    GantiPinKeamaan: GantiPinKeamaan,
    HubungiKami: HubungiKami,
    TentangTokoPandai: TentangTokoPandai,
  },
  {
    headerMode: 'screen',
    initialRouteName: 'StackPublic',
    // initialRouteName: 'LihatData',
    // initialRouteName: 'DetailData',
    // initialRouteName: 'Laporan',
    // initialRouteName: 'EditDetail',
    // initialRouteName: 'SplashScreen',
    // initialRouteName: 'InputData',
    // initialRouteName: 'Absensi',
  },
);

export default createAppContainer(PublicStack);

const styles = StyleSheet.create({
  IconBottom: {
    alignSelf: 'center',
  },
  tabLabel: {
    textAlign: 'center',
    fontSize: 10,
    fontFamily: 'Montserrat-Medium',
    marginTop: 2,
    color: '#333333',
  },
  icon: {
    fontSize: 20,
  },
});
