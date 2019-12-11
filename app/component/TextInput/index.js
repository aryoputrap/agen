/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TextInput} from 'react-native';
// import propTypes from 'prop-types';
import Color from '../../config/color';
export default class Component extends React.Component {
  render() {
    const {keyboardType, placeholder} = this.props;
    return (
      <View>
        <TextInput
          style={{
            padding: 10,
            borderRadius: 1,
            borderColor: Color.main.greyLine,
            elevation: 2,
          }}
          keyboardType={keyboardType}
          placeholder={placeholder}
          {...this.props}
        />
      </View>
    );
  }
}
