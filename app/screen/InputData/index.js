/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image, SafeAreaView, ScrollView} from 'react-native';
import Styles from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TextInput from '../../component/TextInput';
import Button from '../../component/Button';
import Dropdown from '../../component/Dropdown';
import Icon from 'react-native-vector-icons/Entypo';
export default class absen extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <View style={{padding: 15}}>
              <Text style={Styles.TextInput}>LE CODE</Text>
              <TextInput keyboardType={'number-pad'} placeholder={'LE CODE'} />
              <Text style={Styles.TextInput} placeholder={'Nama Toko'}>
                Nama Toko
              </Text>
              <TextInput keyboardType={'default'} placeholder={'Nama Toko'} />
              <Text style={Styles.TextInput}>Status Toko</Text>
              <View style={Styles.dropdown}>
                <TouchableOpacity
                  style={{flexDirection: 'row', width: '100%', height: '100%'}}>
                  <Dropdown
                    style={{
                      justifyContent: 'center',
                      marginTop: 5,
                      width: '92%',
                    }}
                    options={['Install', 'Belum Install']}
                  />
                  <View style={{justifyContent: 'flex-end'}}>
                    <Icon
                      name="chevron-down"
                      size={27}
                      style={{justifyContent: 'flex-end'}}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <Text style={Styles.TextInput}>Alasan Belum Install</Text>
              <View style={Styles.dropdown}>
                <TouchableOpacity
                  style={{flexDirection: 'row', width: '100%', height: '100%'}}>
                  <Dropdown
                    style={{
                      justifyContent: 'center',
                      marginTop: 5,
                      width: '92%',
                    }}
                    options={[
                      'Ribet',
                      'Tidak Punya HP (Mau kredit HP)',
                      'Tunggu Konfirmasi Pemilik',
                      'Toko Sedang Sibuk/Tutup - Revisit',
                      'Tunggu Informasi Sales',
                      'Sudah Tua/Gaptek',
                      'System Down',
                      'Hanya mau setor ke Sales',
                      'Order Sedikit/Jarang',
                      'Alasan Lainnya',
                    ]}
                  />
                  <View style={{justifyContent: 'flex-end'}}>
                    <Icon
                      name="chevron-down"
                      size={27}
                      style={{justifyContent: 'flex-end'}}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <Text style={Styles.TextInput}>Catatan Kunjungan</Text>
              <TextInput
                keyboardType={'default'}
                placeholder={'Catatan Kunjungan'}
              />
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
              <TouchableOpacity onPress={() => console.warn('masuk')}>
                <View style={{flexDirection: 'column', padding: 15}}>
                  <Image
                    source={require('../../asset/images/insert-photo.png')}
                    resizeMode={'stretch'}
                    style={Styles.fotoData}
                  />
                  <Text style={Styles.TextFoto}>Foto Lainnya</Text>
                </View>
              </TouchableOpacity>
            </View>
            <Button />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
