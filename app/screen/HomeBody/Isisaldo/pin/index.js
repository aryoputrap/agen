/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import ReactNativePinView from 'react-native-pin-view';
// import decode from 'jwt-decode';
// import axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';
export default class pin extends Component {
  constructor() {
    super();
    this.state = {
      pin: null,
      showRemoveButton: false,
      showCompletedButton: false,
    };
  }

  render() {
    const showRemoveButton = this.state;
    const showCompletedButton = this.state;
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#008CC9',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <StatusBar barStyle="light-content" />
        <Text
          style={{
            paddingTop: 10,
            paddingBottom: 48,
            color: '#FFF',
            fontSize: 48,
            textAlign: 'center',
          }}>
          MASUKAN PIN
          {this.state.pin}
        </Text>
        <ReactNativePinView
          inputSize={40}
          pinLength={6}
          buttonSize={60}
          onValueChange={value => this.setState({pin: value})}
          buttonAreaStyle={{
            marginTop: 24,
          }}
          inputAreaStyle={{
            marginBottom: 24,
          }}
          inputViewEmptyStyle={{
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: '#FFF',
          }}
          inputViewFilledStyle={{
            backgroundColor: '#FFF',
          }}
          buttonViewStyle={{
            borderWidth: 1,
            borderColor: '#FFF',
          }}
          buttonTextStyle={{
            color: '#FFF',
          }}
          onButtonPress={key => {
            // if (key === 'custom_left') {
            //   pinView.current.clear();
            // }
            if (key === 'custom_right') {
              // alert('Entered Pin: ' + enteredPin);
              //   pinView.current.
            }
            if (key === 'three') {
              alert("You can't use 3");
            }
          }}
          customLeftButton={
            showRemoveButton ? (
              <Icon name={'ios-backspace'} size={36} color={'#FFF'} />
            ) : (
              undefined
            )
          }
          customRightButton={
            showCompletedButton ? (
              <Icon
                name={'ios-checkmark-circle-outline'}
                size={70}
                color={'#FFF'}
              />
            ) : (
              undefined
            )
          }
        />
      </SafeAreaView>
    );
  }
}
