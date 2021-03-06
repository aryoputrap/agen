import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
  Clipboard,
} from 'react-native';
import ModalImage from '../../../../component/ModalImage';
import Loading from '../../../../component/Loading';
// import {token} from '../../../../config/Api/token';
import Styles from './style';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {Coachmark} from 'react-native-coachmark';

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
      fmcg: '',
      coach: false,
      fotodetail1: '',
      fotodetail2: '',
      fotodetail3: '',
      fotodetail4: '',
      fotodetail5: '',
      fotodetail6: '',
      isModalImage: false,
      buttonedit: false,
      isModalImage2: false,
      isLoading: true,
    };
    // () => console.log(this.state);
  }

  async componentDidMount() {
    // const {item} = this.props;
    const tokenx = await AsyncStorage.getItem('token');
    const item = this.props.navigation.state.params.id;
    const header = {
      Authorization: 'Bearer ' + tokenx,
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
        this.setState({detail}, () => console.log(this.state));
        this.setState(
          {
            detail,
            isLoading: false,
            fotodetail1: response.data.data.photos1.encode_foto,
            fotodetail2: response.data.data.photos2.encode_foto,
            fotodetail3: response.data.data.photos3.encode_foto,
            fotodetail4: response.data.data.photos4.encode_foto,
            fotodetail5: response.data.data.photos5.encode_foto,
            fotodetail6: response.data.data.photos6.encode_foto,
          },
          // () => console.log(this.state),
        );
        const fmcg = detail[0].fmcg;
        if (fmcg === 15) {
          this.setState({fmcg: 'UNILEVER'});
        } else if (fmcg === 10) {
          this.setState({fmcg: 'GODREJ'});
        }
        //LOGIC BUTTON
        if (detail[0].ket_akusisi === 'No Install') {
          this.setState({buttonedit: true});
        } else if (detail[0].ket_aktivasi === 'Tidak') {
          this.setState({buttonedit: true});
        } else if (
          detail[0].ket_akusisi === 'Install' &&
          detail[0].ket_aktivasi === 'Tidak'
        ) {
          this.setState({buttonedit: true});
        } else if (
          detail[0].ket_akusisi === 'Install' &&
          (detail[0].ket_aktivasi === 'Tidak' ||
            detail[0].ket_aktivasi === 'Revisit')
        ) {
          this.setState({buttonedit: true});
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isLoading: false,
        });
        this.props.navigation.navigate('LihatData');
      });
  }

  onpressedit = () => {
    let detail = [...this.state.detail];
    // console.log(detail);
    const {navigate} = this.props.navigation;
    // const fmcg = this.state.fmcg;
    const fmcg = detail[0].name_fmcg;
    const le_code = detail[0].le_code;
    const namatoko = detail[0].nama_toko;
    const handphone = detail[0].hp;
    const namapemilik = detail[0].nama_pemilik;
    const distributor = detail[0].nama_distributor;
    // console.log(le_code);
    if (detail[0].ket_akusisi === 'No Install') {
      navigate('InputEditDetail', {
        openFlag4: true,
        fmcg,
        le_code,
        namatoko,
        handphone,
        namapemilik,
        distributor,
      });
    } else if (detail[0].ket_aktivasi === 'Tidak') {
      navigate('InputEditDetail', {
        openFlag3: true,
        fmcg,
        le_code,
        namatoko,
        handphone,
        namapemilik,
      });
    }
  };

  renderEdit() {
    if (this.state.buttonedit === true) {
      return (
        <View style={Styles.buttonEdit}>
          <TouchableOpacity onPress={this.onpressedit}>
            <View style={Styles.editBottom}>
              <Text style={Styles.textEdit}>EDIT AKUN</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  }

  renderInstall = () => {
    return (
      <View style={Styles.buttonEdit}>
        <Text style={Styles.textEdit}>MANTAP</Text>
      </View>
    );
  };

  showcoach = () => {
    this.setState({coach: true});
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
      <SafeAreaView style={Styles.container} key={121}>
        <StatusBar translucent backgroundColor="transparent" />
        <Loading flag={this.state.isLoading} />
        {this.state.detail.map((detail, id) => (
          <View key={detail.toString(123123)}>
            <Image
              key={id.img1}
              source={require('../../../../asset/images/icon/detail-toko-icon.png')}
              style={Styles.tokodetail}
            />
            <Text style={Styles.textHeadertoko} key={id.toko1}>
              {detail.nama_toko}
            </Text>
            <View style={Styles.copy}>
              <Text style={Styles.textHeader} key={id.le_code1}>
                {detail.le_code}
              </Text>
              <Coachmark
                isAnchorReady
                message="Klik Ini Untuk Copy Paste Le Code">
                <TouchableOpacity
                  style={Styles.btnCopy}
                  onPress={() => Clipboard.setString(detail.le_code)}>
                  <Text style={Styles.salin}>Salin Le Code</Text>
                </TouchableOpacity>
              </Coachmark>
            </View>
          </View>
        ))}
        <View style={Styles.line} />
        <View style={Styles.noakun}>
          <View style={Styles.mainBody}>
            {this.state.detail.map((detail, bodyakun) => (
              <View style={Styles.alamat} key={bodyakun.toString()}>
                <Text style={Styles.nomorakun} key={bodyakun.nomorakun}>
                  Nomor Akun :
                </Text>
                <Text style={Styles.nomorakun2} key={bodyakun.no_aplikasi1}>
                  {detail.no_aplikasi}
                </Text>
              </View>
            ))}
            {this.renderEdit()}
          </View>
          {this.state.detail.map((detail, mainbody) => (
            <ScrollView style={Styles.scroolview} key={mainbody}>
              <View style={Styles.mainBody}>
                <View style={Styles.bodyakun}>
                  <Text style={Styles.texttittle} key={mainbody.agen}>
                    Agen Akusisi
                  </Text>
                  <Text
                    style={Styles.texttittle2}
                    key={detail.username_akusisi}>
                    {detail.username_akusisi}
                  </Text>
                  <Text style={Styles.texttittle}>Nama Pemilik Toko :</Text>
                  <Text style={Styles.texttittle2} key={mainbody.nama_pemilik}>
                    {detail.nama_pemilik}
                  </Text>
                  <Text style={Styles.texttittle}>Status Kepemilik Toko :</Text>
                  <Text
                    style={Styles.texttittle2}
                    key={mainbody.status_kepemilikan}>
                    {detail.status_kepemilikan}
                  </Text>
                  <Text style={Styles.texttittle}>No Handphone :</Text>
                  <Text style={Styles.texttittle2} key={mainbody.hp}>
                    {detail.hp}
                  </Text>
                  <Text style={Styles.texttittle}>Bertemu dengan:</Text>
                  <Text
                    style={Styles.texttittle2}
                    key={mainbody.bertemu_dengan}>
                    {detail.bertemu_dengan}
                  </Text>
                  <Text style={Styles.texttittle}>PJP :</Text>
                  <Text style={Styles.texttittle2} key={mainbody.pjp}>
                    {detail.pjp}
                  </Text>
                  <Text style={Styles.texttittle}>Potensi Revisit:</Text>
                  <Text
                    style={Styles.texttittle2}
                    key={mainbody.potensi_revisit}>
                    {detail.potensi_revisit}
                  </Text>
                  <Text style={Styles.texttittle}>Jenis Toko:</Text>
                  <Text style={Styles.texttittle2} key={mainbody.jenis_toko}>
                    {detail.jenis_toko}
                  </Text>
                  <Text style={Styles.texttittle}>Retail Toko :</Text>
                  <Text style={Styles.texttittle2} key={mainbody.retail_toko}>
                    {detail.retail_toko}
                  </Text>
                  <Text style={Styles.texttittle}>
                    Nama Sales Distributor :
                  </Text>
                  <Text style={Styles.texttittle2} key={mainbody.sales}>
                    {detail.sales}
                  </Text>
                  <Text style={Styles.texttittle}>Distributor :</Text>
                  <Text
                    style={Styles.texttittle2}
                    key={detail.nama_distributor}>
                    {detail.nama_distributor}
                  </Text>
                  <Text style={Styles.texttittle}>Status :</Text>
                  <Text style={Styles.texttittle2} key={mainbody.ket_akusisi}>
                    {detail.ket_akusisi}
                  </Text>
                  <Text style={Styles.texttittle}>Keterangan Aktivasi :</Text>
                  <Text style={Styles.texttittle2} key={mainbody.ket_aktivasi}>
                    {detail.ket_aktivasi}
                  </Text>
                  <Text style={Styles.texttittle}>Alasan Tidak Aktivasi :</Text>
                  <Text style={Styles.texttittle2} key={mainbody.ket2_aktivasi}>
                    {detail.ket2_aktivasi}
                  </Text>
                  <Text style={Styles.texttittle}>
                    Akses(Toko Dekat Dengan) :
                  </Text>
                  <Text style={Styles.texttittle2} key={mainbody.dekat_dengan}>
                    {detail.dekat_dengan}
                  </Text>
                  <Text style={Styles.texttittle}>Akses(Jalan Toko):</Text>
                  <Text style={Styles.texttittle2} key={mainbody.akses_toko}>
                    {detail.akses_toko}
                  </Text>
                </View>
                <View style={Styles.bodyakun2}>
                  <Text style={Styles.texttittle}>FMCG :</Text>
                  <Text style={Styles.texttittle2} key={mainbody.fmcg}>
                    {detail.name_fmcg}
                  </Text>
                  <Text style={Styles.texttittle}>Kode POS :</Text>
                  <Text style={Styles.texttittle2} key={mainbody.kode_pos}>
                    {detail.kode_pos}
                  </Text>
                  <Text style={Styles.texttittle}>Provinsi :</Text>
                  <Text style={Styles.texttittle2} key={mainbody.provinsi}>
                    {detail.provinsi}
                  </Text>
                  <Text style={Styles.texttittle}>Kota Tempat Usaha :</Text>
                  <Text style={Styles.texttittle2} key={mainbody.kota}>
                    {detail.kota}
                  </Text>
                  <Text style={Styles.texttittle}>Nama Toko (Plang) :</Text>
                  <Text style={Styles.texttittle2} key={mainbody.plang}>
                    {detail.plang}
                  </Text>
                  <Text style={Styles.texttittle}>Besar Toko :</Text>
                  <Text style={Styles.texttittle2} key={mainbody.ukuran}>
                    {detail.ukuran}
                  </Text>
                  <Text style={Styles.texttittle}>Luas Toko :</Text>
                  <Text style={Styles.texttittle2} key={mainbody.luas_toko}>
                    {detail.luas_toko}
                  </Text>
                  <Text style={Styles.texttittle}>Lokasi Toko :</Text>
                  <Text style={Styles.texttittle2} key={mainbody.lokasi}>
                    {detail.lokasi}
                  </Text>
                  <Text style={Styles.texttittle}>Etalase Toko :</Text>
                  <Text style={Styles.texttittle2} key={mainbody.etalase_toko}>
                    {detail.etalase_toko}
                  </Text>
                  <Text style={Styles.texttittle}>Rak Makanan :</Text>
                  <Text style={Styles.texttittle2} key={mainbody.rak_makanan}>
                    {detail.rak_makanan}
                  </Text>
                  <Text style={Styles.texttittle}>Kulkas Minuman :</Text>
                  <Text style={Styles.texttittle2} key={mainbody.kulkas}>
                    {detail.kulkas}
                  </Text>
                  <Text style={Styles.texttittle}>Kulkas Es Krim :</Text>
                  <Text style={Styles.texttittle2} key={mainbody.kulkas_esKrim}>
                    {detail.kulkas_esKrim}
                  </Text>
                  <Text style={Styles.texttittle}>Area Pakir :</Text>
                  <Text style={Styles.texttittle2} key={mainbody.parkir}>
                    {detail.parkir}
                  </Text>
                  <Text style={Styles.texttittle}>Plafond :</Text>
                  <Text style={Styles.texttittle2} key={mainbody.plafond}>
                    {detail.plafond}
                  </Text>
                  <Text style={Styles.texttittle}>Tanggal Akusisi :</Text>
                  <Text
                    style={Styles.texttittle2}
                    key={detail.tgl_kunjungan_akusisi}>
                    {detail.tgl_kunjungan_akusisi}
                  </Text>
                  <Text style={Styles.texttittle}>Tanggal Aktivasi :</Text>
                  <Text
                    style={Styles.texttittle2}
                    key={detail.tgl_kunjungan_aktivasi}>
                    {detail.tgl_kunjungan_aktivasi}
                  </Text>
                </View>
              </View>
              <View style={Styles.alamat}>
                <Text style={Styles.texttittle}>Catatan Agen</Text>
                <Text style={Styles.texttittle2} key={detail.note_akusisi}>
                  {detail.note_akusisi}
                </Text>
              </View>
              <View style={Styles.alamat}>
                <Text style={Styles.texttittle}>Catatan Admin</Text>
                <Text style={Styles.texttittle2} key={detail.note_akusisi}>
                  {detail.memo_updateStatus}
                </Text>
              </View>
              <View style={Styles.alamat}>
                <Text style={Styles.texttittle}>Alamat Toko</Text>
                <Text style={Styles.texttittle2} key={detail.alamat}>
                  {detail.alamat}
                </Text>
              </View>
              <ModalImage
                isVisible={this.state.isModalImage}
                source={{
                  uri: `data:image/png;base64,${this.state.fotodetail1}`,
                }}
                Press={() => this.onModalImage()}
              />
              <View>
                <ModalImage
                  isVisible={this.state.isModalImage2}
                  source={{
                    uri: `data:image/png;base64,${this.state.fotodetail2}`,
                  }}
                  Press={() => this.onModalImage2()}
                />
              </View>
              <View style={Styles.alamat}>
                <Text style={Styles.texttittle}>Foto Toko</Text>
                <View style={Styles.mainBodyfoto}>
                  <TouchableOpacity onPress={this.onModal} key={11}>
                    <Image
                      source={{
                        uri: `data:image/png;base64,${this.state.fotodetail1}`,
                      }}
                      resizeMode={'stretch'}
                      style={Styles.imageData}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.onModal2} key={12}>
                    <Image
                      source={{
                        uri: `data:image/png;base64,${this.state.fotodetail2}`,
                      }}
                      resizeMode={'stretch'}
                      style={Styles.imageData}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.onModal} key={13}>
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
                  <TouchableOpacity key={14}>
                    <Image
                      source={{
                        uri: `data:image/png;base64,${this.state.fotodetail4}`,
                      }}
                      resizeMode={'stretch'}
                      style={Styles.imageData}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity key={15}>
                    <Image
                      source={{
                        uri: `data:image/png;base64,${this.state.fotodetail5}`,
                      }}
                      resizeMode={'stretch'}
                      style={Styles.imageData}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity key={16}>
                    <Image
                      source={{
                        uri: `data:image/png;base64,${this.state.fotodetail6}`,
                      }}
                      resizeMode={'stretch'}
                      style={Styles.imageData}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          ))}
        </View>
      </SafeAreaView>
    );
  }
}
