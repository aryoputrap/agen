import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from '../config/color';

//Authen
import Home from '../screen/home';
import Akun from '../screen/akun';

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
    Akun: {
      screen: Akun,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="list"
            color={tintColor}
            size={27}
            style={styles.IconBottom}
          />
        ),
        title: 'Kegiatan',
      },
    },
  },
  {
    initialRouteName: 'Home',
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
  },
  {
    headerMode: 'none',
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
