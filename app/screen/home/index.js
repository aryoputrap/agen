/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import Style from './style';

const {width, height} = Dimensions.get('window');
export default class App extends Component {
  render() {
    return (
      <View>
        <StatusBar
          backgroundColor="rgba(3, 169, 244, 0.8)"
          barStyle="light-content"
        />
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../asset/images/logotopan.png')}
            style={{
              resizeMode: 'stretch',
              width: width * 0.35,
              height: height * 0.04,
              margin: 10,
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              paddingLeft: 50,
            }}>
            <Text style={{fontSize: 11}}>Hari : Selasa</Text>
            <Text style={{fontSize: 11}}>Tanggal : 11 September 2019</Text>
          </View>
        </View>
        {/* // Fitur Body 1 */}
        <View style={Style.BodyFiturMain}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'column', padding: 10}}>
              <Text style={Style.TextBold}>Virtual Account</Text>
              <Text style={Style.TextBold}>10920000109299001</Text>
            </View>
            <Text style={Style.Saldo}>Rp. 5.000.000</Text>
          </View>
          <View style={Style.BodyFitur}>
            <View style={Style.BodyContenAgen}>
              <Text style={Style.TextThin}>Halo Agen Indri</Text>
              <View style={{top: 1, justifyContent: 'flex-start'}}>
                <Text style={Style.TextThin}>
                  Lokasi Kamu Sekarang ada di _______________________
                </Text>
              </View>
              <Text style={Style.TextThin}>
                Sudah Jam 10 nihh kamu belum setoran ke bank!
              </Text>
              <Text style={Style.TextThin}>
                Setoran kamu baru x% limit dari agemmlimit xxx
              </Text>
              <View style={Style.LineFitur} />
              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'center',
                  justifyContent: 'space-around',
                }}>
                <TouchableOpacity style={Style.ButtonFitur}>
                  <Image
                    source={require('../../asset/images/isisaldo.png')}
                    style={Style.ImageFitur}
                  />
                  <Text style={Style.TextThin}>Isi Saldo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.ButtonFitur}>
                  <Image
                    source={require('../../asset/images/riwayat.png')}
                    style={Style.ImageFitur}
                  />
                  <Text style={Style.TextThin}>Riwayat</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.ButtonFitur}>
                  <Image
                    source={require('../../asset/images/laporan.png')}
                    style={Style.ImageFitur}
                  />
                  <Text style={Style.TextThin}>Laporan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.ButtonFitur}>
                  <Image
                    source={require('../../asset/images/info.png')}
                    style={Style.ImageFiturInfo}
                  />
                  <Text style={Style.TextThin}>Info</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            padding: 15,
            justifyContent: 'space-around',
            top: 10,
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Absensi')}>
            <Image
              source={require('../../asset/images/absensi.png')}
              style={Style.ImageFitur2}
            />
            <Text style={Style.TexttFitur2}>Absensi</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('InputData')}>
            <Image
              source={require('../../asset/images/inputdata.png')}
              style={Style.ImageFitur2}
            />
            <Text style={Style.TexttFitur2}>Input Data</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../asset/images/lihatdata.png')}
              style={Style.ImageFitur2}
            />
            <Text style={Style.TexttFitur2}>Lihat Data</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../asset/images/bayarmanual.png')}
              style={Style.ImageFitur2}
            />
            <Text style={Style.TexttFitur2}>Bayar Manual</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            top: 10,
          }}>
          <TouchableOpacity>
            <Image
              source={require('../../asset/images/tagihan.png')}
              style={Style.ImageFitur2}
            />
            <Text style={Style.TexttFitur2}>Tagihan</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../asset/images/utilisasi.png')}
              style={Style.ImageFitur2}
            />
            <Text style={Style.TexttFitur2}>Utilisasi</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../asset/images/bantuan.png')}
              style={Style.ImageFitur2}
            />
            <Text style={Style.TexttFitur2}>Bantuan</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../asset/images/lainnya.png')}
              style={Style.ImageFitur2}
            />
            <Text style={Style.TexttFitur2}>Lainnya</Text>
          </TouchableOpacity>
        </View>
        <View style={Style.LineFitur2} />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={Style.scrollHorizon}>
          <TouchableOpacity>
            <View style={Style.promoContainer}>
              <View style={{flex: 2}}>
                <Image
                  source={require('../../asset/images/Banner1.jpeg')}
                  style={Style.Banner}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Style.promoContainer}>
              <View style={{flex: 2}}>
                <Image
                  source={require('../../asset/images/Banner2.jpeg')}
                  style={Style.Banner}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Style.promoContainer}>
              <View style={{flex: 2}}>
                <Image
                  source={require('../../asset/images/Banner1.jpeg')}
                  style={Style.Banner}
                />
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
