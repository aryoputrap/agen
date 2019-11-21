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
              <Text style={{color: '#FFFF', fontWeight: 'bold'}}>
                Virtual Account
              </Text>
              <Text style={{color: '#FFFF', fontWeight: 'bold'}}>
                10920000109299001
              </Text>
            </View>
            <Text
              style={{
                fontSize: 20,
                color: '#FFFF',
                fontWeight: 'bold',
                justifyContent: 'flex-end',
                padding: 10,
                left: 30,
              }}>
              Rp. 5.000.000
            </Text>
          </View>
          <View style={Style.BodyFitur}>
            <View
              style={{
                flexDirection: 'column',
                paddingLeft: 10,
                paddingTop: 5,
              }}>
              <Text style={{color: '#FFFF'}}>Halo Agen Indri</Text>
              <Text style={{color: '#FFFF'}}>
                Sudah Jam 10 nihh kamu belum setoran ke bank!
              </Text>
              <Text style={{color: '#FFFF'}}>
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
                  <Text style={Style.TextFitur}>Isi Saldo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.ButtonFitur}>
                  <Image
                    source={require('../../asset/images/riwayat.png')}
                    style={Style.ImageFitur}
                  />
                  <Text style={Style.TextFitur}>Riwayat</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.ButtonFitur}>
                  <Image
                    source={require('../../asset/images/laporan.png')}
                    style={Style.ImageFitur}
                  />
                  <Text style={Style.TextFitur}>Laporan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.ButtonFitur}>
                  <Image
                    source={require('../../asset/images/info.png')}
                    style={Style.ImageFiturInfo}
                  />
                  <Text style={Style.TextFitur}>Info</Text>
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
          <TouchableOpacity>
            <Image
              source={require('../../asset/images/absensi.png')}
              style={Style.ImageFitur2}
            />
            <Text style={Style.TexttFitur2}>Absensi</Text>
          </TouchableOpacity>
          <TouchableOpacity>
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
                  style={{
                    height: height * 0.2,
                    width: width * 0.9,
                    resizeMode: 'stretch',
                    borderRadius: 5,
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Style.promoContainer}>
              <View style={{flex: 2}}>
                <Image
                  source={require('../../asset/images/Banner2.jpeg')}
                  style={{
                    height: height * 0.2,
                    width: width * 0.9,
                    resizeMode: 'stretch',
                    borderRadius: 5,
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Style.promoContainer}>
              <View style={{flex: 2}}>
                <Image
                  source={require('../../asset/images/Banner1.jpeg')}
                  style={{
                    height: height * 0.2,
                    width: width * 0.9,
                    resizeMode: 'stretch',
                    borderRadius: 5,
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
