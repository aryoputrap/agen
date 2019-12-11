/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Entypo';
// import Color from '../../config/color';
import Styles from './style';
import FieldData from '../../component/FieldAccount';
import FieldSupport from '../../component/FieldAccount/TextSupport';
import ButtonLogout from '../../component/Button/ButtonAkun';

export default class App extends Component {
  render() {
    // const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={Styles.container}>
        <View style={{justifyContent: 'center', alignSelf: 'center', top: 50}}>
          <View style={Styles.boardAccount}>
            <Text style={Styles.namaAkun}>Aryo Putra Purwanto</Text>
            <Text style={Styles.nomorVA}>Nomor VA: 00000021312 </Text>
          </View>
          <View style={{flexDirection: 'row', top: 10}}>
            <Text style={Styles.tentangSaya}>Tentang Saya</Text>
            <TouchableOpacity style={{justifyContent: 'flex-end'}}>
              <Text style={Styles.ubahtentangSaya}>Ubah</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={Styles.scroolview}>
            <View>
              <FieldData
                titleField={'Email'}
                textField={'aryoputrap@tokopandai.id'}
              />
              <FieldData
                titleField={'Nomor Telepon Genggam'}
                textField={'0815880024'}
              />
              <FieldData titleField={'Tempat Lahir'} textField={'Inggris'} />
              <FieldData
                titleField={'Tanggal Lahir'}
                textField={'17 Agustus 1945'}
              />
              <View style={{marginTop: 20}}>
                <FieldSupport
                  TextField={'Lupa Kata Sandi'}
                  onPress={() =>
                    this.props.navigation.navigate('LupaKataSandi')
                  }
                />
                <FieldSupport
                  TextField={'Ganti Pin Keamanan'}
                  onPress={() =>
                    this.props.navigation.navigate('GantiPinKeamaan')
                  }
                />
                <FieldSupport
                  TextField={'Hubungi Kami'}
                  onPress={() => this.props.navigation.navigate('HubungiKami')}
                />
                <FieldSupport
                  TextField={'Tentang Toko Pandai'}
                  onPress={() =>
                    this.props.navigation.navigate('TentangTokoPandai')
                  }
                />
              </View>
              <ButtonLogout
                textField={'Keluar'}
                onPress={console.log('Keluar')}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
