import React, {Component} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import axios from 'axios';
// import token from '../../../../config/Api/token';
import Styles from './style';
import {SCLAlert, SCLAlertButton} from 'react-native-scl-alert';
import Icon3 from 'react-native-vector-icons/dist/Entypo';
import AsyncStorage from '@react-native-community/async-storage';
import decode from 'jwt-decode';
import Loading from '../../../../component/Loading';

export default class Absensi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      absenflatlist: [],
      download: false,
      linkdownload: null,
      isLoading: true,
    };
  }

  async UNSAFE_componentWillMount() {
    const tokenx = await AsyncStorage.getItem('token');
    const iduser = await decode(tokenx);
    const id = iduser.body[0];
    const header = {
      Authorization: 'Bearer ' + tokenx,
      'x-api-key':
        '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
    };
    axios({
      method: 'GET',
      url:
        'http://support.tokopandai.id:3003/Api/laporan/absen/' +
        id +
        '/01/2020',
      headers: header,
    })
      .then(response => {
        this.response = response.data;
        // console.log(response.data.data);
        // console.log(response.data.data.link);
        this.setState({
          absenflatlist: response.data.data.data,
          linkdownload: response.data.data.linkL,
          isLoading: false,
        });
        console.log(this.state);
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidUpdate() {
    this.buttondownload();
  }

  buttondownload = () => {
    return (
      <View>
        <SCLAlert
          show={this.state.download}
          onRequestClose={this.handleClose}
          theme="info"
          title="Informasi"
          subtitle="Apakah anda mau unduh."
          subtitle2="Laporan Absensi Bulan Februari?"
          headerIconComponent={
            <Icon3 name="download" size={50} color="white" />
          }>
          <View style={Styles.buttonmodal}>
            <View style={Styles.buttonyes}>
              <SCLAlertButton
                theme="info"
                onPress={this.handleClose}
                style={Styles.buttonyes}>
                YA
              </SCLAlertButton>
            </View>
            <View style={Styles.buttonyes}>
              <SCLAlertButton
                theme="default"
                onPress={this.handleClose}
                style={Styles.buttonyes}>
                TIDAK
              </SCLAlertButton>
            </View>
          </View>
        </SCLAlert>
      </View>
    );
  };

  handleOpen = () => {
    this.setState({download: false});
  };
  handleClose = () => {
    this.setState({download: false});
  };

  filedownload = () => {
    if (this.state.download === true) {
      return <View>{this.state.linkdownload}</View>;
    }
  };

  buttonfloat = () => {
    const {filter} = this.props;
    return (
      <View style={Styles.buttonfloat}>
        <TouchableOpacity
          style={Styles.buttondownload}
          onPress={() => this.setState({download: true})}>
          <Text style={Styles.textfilter}>Download</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.buttonfilter} onPress={filter}>
          <Text style={Styles.textfilter}>Filter</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View>
        <Loading flag={this.state.isLoading} />
        <View style={Styles.container}>
          <View style={Styles.titleAbsensi}>
            <Text style={Styles.textabsensi}>Tanggal</Text>
            <Text style={Styles.textabsensi}>Masuk</Text>
            <Text style={Styles.textabsensi}>Pulang</Text>
          </View>
          {/* <View style={Styles.linebody} /> */}
          {/* <View style={Styles.titleAbsensi}>
            <Text style={Styles.textabsensi2}> 18 Nov 2019</Text>
            <Text style={Styles.textabsensi2}> 08: 00 WIB</Text>
            <Text style={Styles.textabsensi2}> 17: 00 WIB</Text>
          </View> */}
          <View style={Styles.line} />
          <FlatList
            key="flatList"
            style={Styles.container}
            data={this.state.absenflatlist}
            keyExtractor={(item, index) => `${item}--${index}`}
            renderItem={({item}) => (
              <View>
                <View style={Styles.titleAbsensi}>
                  <Text style={Styles.textabsensi2}>{item.tgl}</Text>
                  <Text style={Styles.textabsensimasuk}>{item.masuk}</Text>
                  <Text style={Styles.textabsensi2}>{item.pulang}</Text>
                </View>
                <View style={Styles.line} />
              </View>
            )}
          />
        </View>
        {this.buttonfloat()}
        {this.buttondownload()}
      </View>
    );
  }
}
