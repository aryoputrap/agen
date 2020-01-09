import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from './style';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class info extends Component {
  static navigationOptions = () => ({
    title: 'Laporan',
    headerTransparent: false,
    headerTitleStyle: Styles.headerTitleStyle,
    headerStyle: Styles.headerStyle,
    headerRight: (
      <View style={Styles.headericon}>
        <TouchableOpacity style={Styles.buttonheader}>
          <Icon name={'download'} size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={Styles.buttonheader}>
          <Icon name={'filter'} size={25} />
        </TouchableOpacity>
      </View>
    ),
  });

  render() {
    return (
      <View>
        <TouchableOpacity>
          <Text>Ini Laporan</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
