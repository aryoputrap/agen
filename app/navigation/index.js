/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon, Text} from 'native-base';
import Color from '../config/color';
//Authen
import HomeScreen from '../screen/Home';
import AkunScreen from '../screen/Akun';
// import Inbox from '../screen/akun';
import InboxScreen from '../screen/InputData';
import Absensi from '../screen/Absensi';
import InputData from '../screen/InputData';
//import Akun
import LupaKataSandi from '../screen/Akun/LupaKataSandi';
import GantiKataSandi from '../screen/Akun/GantiKataSandi';
import LupaPinKeamaan from '../screen/Akun/LupaPinKeamanan';
import GantiPinKeamaan from '../screen/Akun/GantiPinKeamanan';
import TentangTokoPandai from '../screen/Akun/TentangTokoPandai';
import HubungiKami from '../screen/Akun/HubungiKami';

const ROUTES = {
  Home: {name: 'home', label: 'Home'},
  Inbox: {name: 'home', label: 'Inbox'},
  Akun: {name: 'home', label: 'Akun'},
};

const TabBarIcon = (props, tintColor) => {
  const {navigation} = props;
  const {routeName} = navigation.state;
  let iconName;
  let iconType;
  if (routeName.toLowerCase() === ROUTES.Home.name) {
    iconName = 'home';
    iconType = 'FontAwesome';
  } else if (routeName.toLowerCase() === ROUTES.Inbox.name) {
    iconName = 'home';
    iconType = 'FontAwesome';
  } else if (routeName.toLowerCase() === ROUTES.Akun.name) {
    iconName = 'home';
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
    initialRouteName: 'Akun',
    headerMode: null,
    tabBarOptions: {
      showLabel: true,
      activeTintColor: Color.main.blueAkun,
      inactiveTintColor: 'gray',
      keyboardHidesTabBar: true,
      tabStyle: {
        paddingVertical: 10,
      },
      style: {
        height: 60,
        elevation: 12,
        borderTopWidth: 0,
      },
    },
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
    Absensi: Absensi,
    InputData: InputData,
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
