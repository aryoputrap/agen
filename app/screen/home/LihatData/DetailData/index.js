import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {token} from '../../../../config/Api/token';
import Styles from './style';
import axios from 'axios';
export default class LupaKataSandi extends Component {
  static navigationOptions = () => ({
    title: 'Detail Toko',
    headerTransparent: false,
    headerTitleStyle: Styles.headerTitleStyle,
    headerStyle: Styles.headerStyle,
  });

  constructor(props) {
    super(props);
    this.state = {
      detail: [],
    };
    () => console.log(this.state);
  }

  componentDidMount() {
    // const {item} = this.props;
    const header = {
      Authorization: 'Bearer ' + token,
      'x-api-key':
        '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
    };
    axios({
      method: 'GET',
      url: 'http://support.tokopandai.id:3003/Api/viewAkusisi/detail/1',
      headers: header,
    })
      .then(response => {
        this.response = response.data;
        const detail = response.data.data.mains;
        // console.log(response.data.data.mains);
        // console.log(response.data.data.mains);
        // console.log(response.data.mains.no_aplikasi);
        this.setState({detail}, () => console.log(this.state));
        // console.log(this.response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView style={Styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        {this.state.detail.map(detail => (
          <View>
            <Image
              source={require('../../../../asset/images/icon/detail-toko-icon.png')}
              style={Styles.tokodetail}
            />
            <Text style={Styles.textHeader}>{detail.nama_toko}</Text>
            <Text style={Styles.textHeader}>{detail.le_code}</Text>
          </View>
        ))}
        <View style={Styles.line} />
        <View style={Styles.noakun}>
          <View style={Styles.mainBodyakun}>
            {this.state.detail.map(detail => (
              <View style={Styles.alamat}>
                <Text style={Styles.nomorakun}>Nomor Akun :</Text>
                <Text style={Styles.nomorakun2}>{detail.no_aplikasi}</Text>
              </View>
            ))}
            <View style={Styles.buttonEdit}>
              <TouchableOpacity
                style={Styles.editBottom}
                onPress={() => navigate('EditDetail')}>
                <Text style={Styles.textEdit}>EDIT</Text>
              </TouchableOpacity>
            </View>
          </View>
          {this.state.detail.map(detail => (
            <ScrollView style={Styles.scroolview}>
              <View style={Styles.mainBody}>
                <View style={Styles.bodyakun}>
                  <Text style={Styles.texttittle}>Agen Akusisi</Text>
                  <Text style={Styles.texttittle2}>{detail.agent_akusisi}</Text>
                  <Text style={Styles.texttittle}>No Handphone</Text>
                  <Text style={Styles.texttittle2}>{detail.hp}</Text>
                  <Text style={Styles.texttittle}>PJP</Text>
                  <Text style={Styles.texttittle2}>{detail.pjp}</Text>
                  <Text style={Styles.texttittle}>Jenis Toko</Text>
                  <Text style={Styles.texttittle2}>{detail.jenis_toko}</Text>
                  <Text style={Styles.texttittle}>Distributor</Text>
                  <Text style={Styles.texttittle2}>
                    {detail.nama_distributor}
                  </Text>
                  <Text style={Styles.texttittle}>Punya Kulkas</Text>
                  <Text style={Styles.texttittle2}>{detail.kulkas}</Text>
                  <Text style={Styles.texttittle}>Status</Text>
                  <Text style={Styles.texttittle2}>{detail.ket_akusisi}</Text>
                  <Text style={Styles.texttittle}>Keterangan Aktivasi</Text>
                  <Text style={Styles.texttittle2}>{detail.ket_aktivasi}</Text>
                  <Text style={Styles.texttittle}>Tanggal Kunjungan</Text>
                  <Text style={Styles.texttittle2}>
                    {detail.tgl_kunjungan_akusisi}
                  </Text>
                </View>
                <View style={Styles.bodyakun2}>
                  <Text style={Styles.texttittle}>Kota Tempat Usaha</Text>
                  <Text style={Styles.texttittle2}>{detail.kota}</Text>
                  <Text style={Styles.texttittle}>Provinsi</Text>
                  <Text style={Styles.texttittle2}>{detail.provinsi}</Text>
                  <Text style={Styles.texttittle}>Nama Sales Distributor</Text>
                  <Text style={Styles.texttittle2}>{detail.sales}</Text>
                  <Text style={Styles.texttittle}>Nama Toko (Plang)</Text>
                  <Text style={Styles.texttittle2}>{detail.plang}</Text>
                  <Text style={Styles.texttittle}>Besar Toko</Text>
                  <Text style={Styles.texttittle2}>{detail.ukuran}</Text>
                  <Text style={Styles.texttittle}>Lokasi Toko</Text>
                  <Text style={Styles.texttittle2}>{detail.lokasi}</Text>
                  <Text style={Styles.texttittle}>Area Pakir</Text>
                  <Text style={Styles.texttittle2}>{detail.parkir}</Text>
                  <Text style={Styles.texttittle}>Tanggal Aktivasi</Text>
                  <Text style={Styles.texttittle2}>
                    {detail.tgl_kunjungan_aktivasi}
                  </Text>
                </View>
              </View>
              <View style={Styles.alamat}>
                <Text style={Styles.texttittle}>Catatan</Text>
                <Text style={Styles.texttittle2}>{detail.note_akusisi}</Text>
              </View>
              <View style={Styles.alamat}>
                <Text style={Styles.texttittle}>Alamat Toko</Text>
                <Text style={Styles.texttittle2}>{detail.alamat}</Text>
              </View>
            </ScrollView>
          ))}
        </View>
      </SafeAreaView>
    );
  }
}
