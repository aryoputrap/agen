import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import Style from './style';
import {Day, Month} from '../../utility/Date';
// import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: '',
      date: '',
    };
  }

  componentDidMount() {
    let that = this;
    const day = Day[new Date().getDay()];
    const date = new Date().getDate();
    const month = Month[new Date().getMonth()];
    const year = new Date().getFullYear();
    that.setState({
      day: day,
      date: date + ' ' + month + ' ' + year + ' ',
    });
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFF'} />
        <View style={Style.header}>
          <Image
            source={require('../../asset/images/logotopan.png')}
            style={Style.logoTokopandai}
          />
          <View style={Style.tanggal}>
            <View style={Style.headerDate}>
              <Text style={Style.tanggal.textHeader}>Hari</Text>
              <Text style={Style.tanggal.textDay}>: {this.state.day}</Text>
            </View>
            <View style={Style.headerDate}>
              <Text style={Style.tanggal.textHeader}>Tanggal</Text>
              <Text style={Style.tanggal.textDate}>: {this.state.date}</Text>
            </View>
          </View>
        </View>
        {/* // Fitur Body 1 */}
        <View style={Style.BodyFiturMain}>
          <View style={Style.header}>
            <View style={Style.header.headerBodyFitur}>
              <Text style={Style.TextBold}>Virtual Account</Text>
              <Text style={Style.TextBold}>10920000109299001</Text>
            </View>
            <Text style={Style.Saldo}>Rp. 5.000.000</Text>
          </View>
          <View style={Style.BodyFiturMain2}>
            <View style={Style.BodyContenAgen}>
              <Text style={Style.TextThin}>Halo Agen Indri</Text>
              <View style={Style.ViewLokasi}>
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
              <View style={Style.BodyFiturSecondary}>
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
                  <Text style={Style.TextThin2}>Info</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={Style.BodyMenu}>
          <TouchableOpacity onPress={() => navigate('Absensi')}>
            <Image
              source={require('../../asset/images/absensi.png')}
              style={Style.ImageFitur2}
            />
            <Text style={Style.TexttFitur2}>Absensi</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('InputData')}>
            <Image
              source={require('../../asset/images/inputdata.png')}
              style={Style.ImageFitur2}
            />
            <Text style={Style.TexttFitur2}>Input Data</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('LihatData')}>
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
        <View style={Style.BodyMenu.BodyMenu2}>
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
          <TouchableOpacity onPress={() => navigate('Bantuan')}>
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
              <Image
                source={require('../../asset/images/Banner1.jpeg')}
                style={Style.Banner}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Style.promoContainer}>
              <Image
                source={require('../../asset/images/Banner2.jpeg')}
                style={Style.Banner}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Style.promoContainer}>
              <Image
                source={require('../../asset/images/Banner1.jpeg')}
                style={Style.Banner}
              />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
