import React from 'react';
import {View, TextInput} from 'react-native';
import propTypes from 'prop-types';
import Style from './styles';

const Input = props => {
  const {keyboardType, placeholder, onChangeText, value} = props;
  return (
    <View>
      <TextInput
        returnKeyType="go"
        style={Style.textInput}
        keyboardType={keyboardType}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={`${value}`}
        // value={String(value)}
      />
    </View>
  );
};

Input.propTypes = {
  keyboardType: propTypes.string.isRequired,
  onChangeText: propTypes.func.isRequired,
  value: propTypes.oneOfType([
    propTypes.string.isRequired,
    propTypes.number.isRequired,
    propTypes.bool.isRequired,
  ]),
  placeholder: propTypes.oneOfType([propTypes.string, propTypes.number]),
};
export default Input;
