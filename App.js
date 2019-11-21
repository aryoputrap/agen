import React, {Component} from 'react';
// import {View, Text} from 'react-native';
// import Home from './app/screen/home';
// import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Navigator from './app/navigation';

const MainApp = createAppContainer(
  createSwitchNavigator(
    {
      // Splash Screen waitt dulus
      // Main: {
      //   screen:SplashScreen
      // },
      // Main1: {
      //   screen:SplashScreen2
      // },
      // Navigation Guest
      Navigator: {
        screen: Navigator,
      },
    },
    {
      headerMode: null,
    },
  ),
);

export default class App extends Component {
  render() {
    return <MainApp />;
  }
}
