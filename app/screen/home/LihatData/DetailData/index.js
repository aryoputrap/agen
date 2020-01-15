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
import ModalImage from '../../../../component/ModalImage';
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
      fotodetail1: '',
      fotodetail2: '',
      fotodetail3: '',
      fotodetail4: '',
      fotodetail5: '',
      fotodetail6: '',
      isModalImage: false,
      isModalImage2: false,
    };
    // () => console.log(this.state);
  }

  componentDidMount() {
    // const {item} = this.props;
    const item = 16;
    const header = {
      Authorization: 'Bearer ' + token,
      'x-api-key':
        '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
    };
    axios({
      method: 'GET',
      url: 'http://support.tokopandai.id:3003/Api/viewAkusisi/detail/' + item,
      headers: header,
    })
      .then(response => {
        this.response = response.data;
        const detail = response.data.data.mains;
        // const fotodetail1 = response.data.data.photos1;
        // console.log(response.data.data.photos1.encode_foto);
        // console.log(response.data.data.mains);
        // console.log(response.data.mains.no_aplikasi);
        // this.setState({detail}, () => console.log(this.state));
        this.setState(
          {
            detail,
            fotodetail1: response.data.data.photos1.encode_foto,
            fotodetail2: response.data.data.photos2.encode_foto,
            fotodetail3: response.data.data.photos3.encode_foto,
            fotodetail4: response.data.data.photos4.encode_foto,
            fotodetail5: response.data.data.photos5.encode_foto,
            fotodetail6: response.data.data.photos6.encode_foto,
          },
          // () => console.log(this.state),
        );
        // console.log(this.response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  onpressedit = () => {
    let detail = [...this.state.detail];
    const {navigate} = this.props.navigation;
    // console.log(detail[0].ket_akusisi);
    // console.log(detail[0].ket_aktivasi);
    if (detail[0].ket_akusisi === 'No Install') {
      navigate('InputData');
    } else if (detail[0].ket_aktivasi === 'Tidak') {
      navigate('EditDetail');
    }
  };

  renderEdit() {
    // const data = JSON.parse(JSON.stringify(this.state.detail));
    // console.log(data[0]);
    return (
      <View style={Styles.buttonEdit}>
        <TouchableOpacity style={Styles.editBottom} onPress={this.onpressedit}>
          <Text style={Styles.textEdit}>EDIT</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderInstall = () => {
    return (
      <View style={Styles.buttonEdit}>
        <Text style={Styles.textEdit}>MANTAP</Text>
      </View>
    );
  };

  onModal = () => {
    this.setState({isModalImage: true});
  };

  onModal2 = () => {
    this.setState({isModalImage2: true});
  };

  onModalImage() {
    this.setState({isModalImage: false});
  }

  onModalImage2() {
    this.setState({isModalImage2: false});
  }

  render() {
    return (
      <SafeAreaView style={Styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        {this.state.detail.map(detail => (
          <View>
            <Image
              source={require('../../../../asset/images/icon/detail-toko-icon.png')}
              style={Styles.tokodetail}
            />
            <Text style={Styles.textHeader} key={1}>
              {detail.nama_toko}
            </Text>
            <Text style={Styles.textHeader} key={2}>
              {detail.le_code}
            </Text>
          </View>
        ))}
        <View style={Styles.line} />
        <View style={Styles.noakun}>
          <View style={Styles.mainBodyakun}>
            {this.state.detail.map(detail => (
              <View style={Styles.alamat}>
                <Text style={Styles.nomorakun}>Nomor Akun :</Text>
                <Text style={Styles.nomorakun2} key={3}>
                  {detail.no_aplikasi}
                </Text>
              </View>
            ))}
            {this.renderEdit()}
          </View>
          {this.state.detail.map(detail => (
            <ScrollView style={Styles.scroolview}>
              <View style={Styles.mainBody}>
                <View style={Styles.bodyakun}>
                  <Text style={Styles.texttittle}>Agen Akusisi</Text>
                  <Text style={Styles.texttittle2} key={4}>
                    {detail.username_akusisi}
                  </Text>
                  <Text style={Styles.texttittle}>No Handphone</Text>
                  <Text style={Styles.texttittle2} key={5}>
                    {detail.hp}
                  </Text>
                  <Text style={Styles.texttittle}>PJP</Text>
                  <Text style={Styles.texttittle2} key={6}>
                    {detail.pjp}
                  </Text>
                  <Text style={Styles.texttittle}>Jenis Toko</Text>
                  <Text style={Styles.texttittle2} key={7}>
                    {detail.jenis_toko}
                  </Text>
                  <Text style={Styles.texttittle}>Distributor</Text>
                  <Text style={Styles.texttittle2} key={8}>
                    {detail.nama_distributor}
                  </Text>
                  <Text style={Styles.texttittle}>Punya Kulkas</Text>
                  <Text style={Styles.texttittle2} key={9}>
                    {detail.kulkas}
                  </Text>
                  <Text style={Styles.texttittle}>Status</Text>
                  <Text style={Styles.texttittle2} key={10}>
                    {detail.ket_akusisi}
                  </Text>
                  <Text style={Styles.texttittle}>Keterangan Aktivasi</Text>
                  <Text style={Styles.texttittle2} key={11}>
                    {detail.ket_aktivasi}
                  </Text>
                </View>
                <View style={Styles.bodyakun2}>
                  <Text style={Styles.texttittle}>Kota Tempat Usaha</Text>
                  <Text style={Styles.texttittle2} key={12}>
                    {detail.kota}
                  </Text>
                  <Text style={Styles.texttittle}>Provinsi</Text>
                  <Text style={Styles.texttittle2} key={13}>
                    {detail.provinsi}
                  </Text>
                  <Text style={Styles.texttittle}>Nama Sales Distributor</Text>
                  <Text style={Styles.texttittle2} key={14}>
                    {detail.sales}
                  </Text>
                  <Text style={Styles.texttittle}>Nama Toko (Plang)</Text>
                  <Text style={Styles.texttittle2} key={15}>
                    {detail.plang}
                  </Text>
                  <Text style={Styles.texttittle}>Besar Toko</Text>
                  <Text style={Styles.texttittle2} key={16}>
                    {detail.ukuran}
                  </Text>
                  <Text style={Styles.texttittle}>Lokasi Toko</Text>
                  <Text style={Styles.texttittle2} key={17}>
                    {detail.lokasi}
                  </Text>
                  <Text style={Styles.texttittle}>Area Pakir</Text>
                  <Text style={Styles.texttittle2} key={18}>
                    {detail.parkir}
                  </Text>
                  <Text style={Styles.texttittle}>Tanggal Kunjungan</Text>
                  <Text style={Styles.texttittle2} key={19}>
                    {detail.tgl_kunjungan_akusisi}
                  </Text>
                </View>
              </View>
              <View style={Styles.alamat}>
                <Text style={Styles.texttittle}>Catatan</Text>
                <Text style={Styles.texttittle2} key={20}>
                  {detail.note_akusisi}
                </Text>
              </View>
              <View style={Styles.alamat}>
                <Text style={Styles.texttittle}>Alamat Toko</Text>
                <Text style={Styles.texttittle2} key={21}>
                  {detail.alamat}
                </Text>
              </View>
              <ModalImage
                key={this.state.fotodetail1}
                isVisible={this.state.isModalImage}
                source={{
                  uri: `data:image/png;base64,${this.state.fotodetail1}`,
                }}
                Press={() => this.onModalImage()}
              />
              <ModalImage
                key={this.state.fotodetail12}
                isVisible={this.state.isModalImage2}
                source={{
                  uri: `data:image/png;base64,${this.state.fotodetail2}`,
                }}
                Press={() => this.onModalImage2()}
              />
              <View style={Styles.alamat}>
                <Text style={Styles.texttittle}>Foto Toko</Text>
                <View style={Styles.mainBodyfoto}>
                  <TouchableOpacity onPress={this.onModal}>
                    <Image
                      source={{
                        uri: `data:image/png;base64,${this.state.fotodetail1}`,
                      }}
                      resizeMode={'stretch'}
                      style={Styles.imageData}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.onModal2}>
                    <Image
                      source={{
                        uri: `data:image/png;base64,${this.state.fotodetail2}`,
                      }}
                      resizeMode={'stretch'}
                      style={Styles.imageData}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.onModal}>
                    <Image
                      source={{
                        uri: `data:image/png;base64,${this.state.fotodetail3}`,
                      }}
                      resizeMode={'stretch'}
                      style={Styles.imageData}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={Styles.alamat}>
                <View style={Styles.mainBodyfoto}>
                  <TouchableOpacity>
                    <Image
                      source={{
                        uri: `data:image/png;base64,${this.state.fotodetail4}`,
                      }}
                      resizeMode={'stretch'}
                      style={Styles.imageData}
                    />
                  </TouchableOpacity>
                  <Image
                    source={{
                      uri: `data:image/png;base64,${this.state.fotodetail5}`,
                    }}
                    resizeMode={'stretch'}
                    style={Styles.imageData}
                  />
                  <Image
                    source={{
                      uri: `data:image/png;base64,${this.state.fotodetail6}`,
                    }}
                    resizeMode={'stretch'}
                    style={Styles.imageData}
                  />
                </View>
              </View>
            </ScrollView>
          ))}
        </View>
      </SafeAreaView>
    );
  }
}
