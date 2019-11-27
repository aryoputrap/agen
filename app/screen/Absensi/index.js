import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
// import {Card, CardItem} from 'nativ-base';

export default class absen extends Component {
  render() {
    return (
      <View>
        <Text>Ini Absensi Masuk dan Keluar</Text>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flexDirection: 'row',
            padding: 15,
          }}>
          <TouchableOpacity
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 10,
            }}>
            <View>
              <Image
                source={require('../../asset/images/enter.png')}
                resizeMode={'stretch'}
              />
              <Text>Masuk</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('../../asset/images/logout.png')} />
            <Text>Pulang</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
