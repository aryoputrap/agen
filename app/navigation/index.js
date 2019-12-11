import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from '../config/color';
import Inbox from '../screen/InputData';
//Authen
import Home from '../screen/home';
import Akun from '../screen/Akun';
// import Inbox from '../screen/akun';
import Absensi from '../screen/Absensi';
import InputData from '../screen/InputData';
//import Akun
import LupaKataSandi from '../screen/Akun/LupaKataSandi';
import GantiPinKeamaan from '../screen/Akun/GantiPinKeamanan';
import TentangTokoPandai from '../screen/Akun/TentangTokoPandai';
import HubungiKami from '../screen/Akun/HubungiKami';

const StackPublic = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="home"
            color={tintColor}
            size={27}
            style={styles.IconBottom}
          />
        ),
        title: 'Menu',
      },
    },
    Inbox: {
      screen: Inbox,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="envelope"
            color={tintColor}
            size={27}
            style={styles.IconBottom}
          />
        ),
        title: 'Inbox',
      },
    },
    Akun: {
      screen: Akun,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="user"
            color={tintColor}
            size={27}
            style={styles.IconBottom}
          />
        ),
        title: 'Akun',
        fontFamily: 'Monsserat',
      },
    },
  },
  {
    initialRouteName: 'Akun',
    headerMode: 'none',
    tabBarOptions: {
      activeTintColor: Color.main.secondary,
      inactiveTintColor: Color.main.greyLine,
      style: {backgroundColor: Color.main.white},
    },
  },
);

const PublicStack = createStackNavigator(
  {
    StackPublic: StackPublic,
    Home: Home,
    Akun: Akun,
    Absensi: Absensi,
    Inbox: Inbox,
    InputData: InputData,
    LupaKataSandi: LupaKataSandi,
    GantiPinKeamaan: GantiPinKeamaan,
    HubungiKami: HubungiKami,
    TentangTokoPandai: TentangTokoPandai,
  },
  {
    headerMode: 'none',
    initialRouteName: 'StackPublic',
  },
);

export default PublicStack;

// #FFC34D #91490c

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  IconBottom: {
    alignSelf: 'center',
    marginTop: 15,
  },
  roudedBottom: {
    width: 70,
    height: 90,
    borderRadius: 100,
    backgroundColor: '#042B3E',
    alignItems: 'center',
    marginTop: 20,
  },
});
