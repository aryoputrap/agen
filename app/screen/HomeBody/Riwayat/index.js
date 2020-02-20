import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Styles from './style';

export default class info extends Component {
  static navigationOptions = () => ({
    title: 'Riwayat Transaksi',
    headerTransparent: false,
    headerTitleStyle: Styles.headerTitleStyle,
    headerStyle: Styles.headerStyle,
  });
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('DetailRiwayat')}>
          <Text style={Styles.tanggal}>01 Januari 2020</Text>
          <View style={Styles.body}>
            <View style={Styles.mainbody}>
              <Text style={Styles.pin}>#PU123125314652</Text>
              <Text style={Styles.status}>Pickup</Text>
              <Text style={Styles.dana}>Rp. 2.600.312</Text>
              <View style={Styles.line} />
            </View>
            <Icon
              name={'right'}
              size={40}
              color={'grey'}
              style={Styles.iconfoto}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
