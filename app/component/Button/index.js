/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
// import propTypes from 'prop-types';
import Color from '../../config/color';

const {width, height} = Dimensions.get('window');
export default class Component extends React.Component {
  render() {
    const {onPress} = this.props;
    return (
      <View>
        <TouchableOpacity
          style={{
            width: width * 0.93,
            height: height * 0.075,
            backgroundColor: Color.main.buttonGreen,
            borderRadius: 10,
            justifyContent: 'center',
            alignSelf: 'center',
            alignContent: 'center',
            opacity: 1,
            marginBottom: 10,
            marginTop: 10,
          }}
          onPress={onPress}>
          <Text
            style={{
              color: Color.main.white,
              fontSize: 17,
              fontFamily: 'Montserrat-Medium',
              alignSelf: 'center',
            }}>
            SUBMIT
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
