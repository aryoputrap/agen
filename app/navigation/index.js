import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from '../config/color';
import Massage from '../screen/InputData';
//Authen
import Home from '../screen/home';
import Akun from '../screen/akun';
// import Massage from '../screen/akun';
import Absensi from '../screen/Absensi';

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
    Massage: {
      screen: Massage,
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
        title: 'Massage',
        fontFamily: 'Monsserat',
      },
    },
  },
  {
    initialRouteName: 'Massage',
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
    Massage: Massage,
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
