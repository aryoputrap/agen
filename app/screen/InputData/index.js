/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import Styles from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TextInput from '../../component/TextInput';
import Button from '../../component/Button';
import Dropdown from '../../component/Dropdown';
// const DEMO_OPTIONS_1 = ['option 1', 'option 2', 'option 3', 'option 4'];
export default class absen extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={{padding: 15}}>
          <Text style={Styles.TextInput}>LE CODE</Text>
          <TextInput keyboardType={'number-pad'} />
          <Text style={Styles.TextInput}>Nama Toko</Text>
          <TextInput keyboardType={'default'} />
          <Text style={Styles.TextInput}>Status Toko</Text>
          <View style={Styles.dropdown}>
            <TouchableOpacity>
              <Dropdown
                style={{justifyContent: 'center', marginTop: 5}}
                options={['Install', 'Belum Banget Install']}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.fotoArea}>
          <TouchableOpacity onPress={() => console.warn}>
            <View style={{flexDirection: 'column', padding: 15}}>
              <Image
                source={require('../../asset/images/insert-photo.png')}
                resizeMode={'stretch'}
                style={Styles.fotoData}
              />
              <Text style={Styles.TextFoto}>Foto Dalam</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.warn}>
            <View style={{flexDirection: 'column', padding: 15}}>
              <Image
                source={require('../../asset/images/insert-photo.png')}
                resizeMode={'stretch'}
                style={Styles.fotoData}
              />
              <Text style={Styles.TextFoto}>Foto Dalam</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.warn}>
            <View style={{flexDirection: 'column', padding: 15}}>
              <Image
                source={require('../../asset/images/insert-photo.png')}
                resizeMode={'stretch'}
                style={Styles.fotoData}
              />
              <Text style={Styles.TextFoto}>Foto Dalam</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Button />
      </SafeAreaView>
    );
  }
}
