/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Text, Icon} from 'native-base';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Color from '../config/color';
//Authen
import Login from '../screen/Login';
import HomeScreen from '../screen/Home';
import AkunScreen from '../screen/Akun';
import InboxScreen from '../screen/InputData';
import Absensi from '../screen/Absensi';
import InputData from '../screen/InputData';
//Import Home
import LihatData from '../screen/Home/LihatData';
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

const ROUTES = {
  Home: {name: 'home', label: 'Home'},
  Inbox: {name: 'inbox', label: 'Inbox'},
  Akun: {name: 'akun', label: 'Akun'},
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
    StackPublic: {
      screen: StackPublic,
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
    Absensi: Absensi,
    InputData: InputData,
    LihatData: LihatData,
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
    initialRouteName: 'InputData',
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
