import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';
import Loading from '../../../component/Loading';
import Dropdown from '../../../component/Dropdown';
import Styles from './style';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import decode from 'jwt-decode';
export default class LupaKataSandi extends Component {
  static navigationOptions = () => ({
    title: 'Lihat Data',
    headerTransparent: false,
    headerTitleStyle: Styles.headerTitleStyle,
    headerStyle: Styles.headerStyle,
  });

  constructor(props) {
    super(props);
    this.state = {
      lihatData: {
        data: '',
      },
      dataflatlist: null,
      isLoading: false,
      flag: '',
    };
  }

  changeState(payload) {
    const {name, val} = payload;
    const innerFormData = {...this.state.lihatData};
    // const Data = {...this.state.dataflatlist};
    innerFormData[name] = val;
    console.log(innerFormData);
    // console.log(Data);
    this.setState({lihatData: innerFormData});
    const isCompleteForm = Object.values(this.state.lihatData).every(
      e => e !== '',
    );
    this.setState({isCompleteForm});
    if (val === '0') {
      console.log('Install dan Aktivasi');
      this.setState({
        isLoading: true,
        flag: 'C',
      });
      this.requestinstallC();
    } else if (val === '1') {
      console.log('Install dan Tidak Aktivasi');
      this.setState({
        isLoading: true,
        flag: 'A',
      });
      this.requestinstallA();
    } else if (val === '2') {
      console.log('No Install');
      this.setState({
        isLoading: true,
        flag: 'T',
      });
      this.requestnoinstall();
    } else if (val === '3') {
      console.log('Revisit');
      this.setState({
        isLoading: true,
        flag: 'R',
      });
      this.requestrevisit();
    }
  }

  requestinstallC = async () => {
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
        'http://support.tokopandai.id:3003/Api/viewAkusisi/' + id + '/C/1/30',
      headers: header,
    })
      .then(response => {
        this.response = response.data;
        // console.log(response);
        this.setState({
          dataflatlist: response.data.data,
          isLoading: false,
        });
        // console.log(this.response.data);
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isLoading: false,
        });
      });
  };

  requestinstallA = async () => {
    // const flag = this.state.flag;
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
        'http://support.tokopandai.id:3003/Api/viewAkusisi/' + id + '/A/1/30',
      headers: header,
    })
      .then(response => {
        this.response = response.data;
        // console.log(response);
        this.setState({
          dataflatlist: response.data.data,
          isLoading: false,
        });
        console.log(this.response.data);
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isLoading: false,
        });
      });
  };

  requestnoinstall = async () => {
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
      url: 'http://support.tokopandai.id:3003/Api/viewAkusisi/' + id + '/T/1/5',
      headers: header,
    })
      .then(response => {
        this.response = response.data;
        // console.log(response);
        this.setState({
          dataflatlist: response.data.data,
          isLoading: false,
        });
        // console.log(this.response.data);
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isLoading: false,
        });
      });
  };

  requestrevisit = async () => {
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
      url: 'http://support.tokopandai.id:3003/Api/viewAkusisi/' + id + '/R/1/5',
      headers: header,
    })
      .then(response => {
        this.response = response.data;
        // console.log(response);
        this.setState({
          dataflatlist: response.data.data,
          isLoading: false,
        });
        // console.log(this.response.data);
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isLoading: false,
        });
      });
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView>
        <StatusBar hidden={true} />
        <View style={Styles.container}>
          <Text style={Styles.TextInput}>Lihat Data</Text>
          <View style={Styles.dropdown}>
            <TouchableOpacity style={Styles.buttonDropdown}>
              <Dropdown
                textStyle={Styles.textlabel}
                style={Styles.dropdownStyle}
                defaultIndex={-1}
                defaultValue={'Pilih Jenis Data'}
                options={[
                  'Install dan Aktivasi',
                  'Install dan Tidak Aktivasi',
                  'No Install',
                  'Revisit',
                ]}
                onSelect={data => this.changeState({name: 'data', val: data})}
              />
            </TouchableOpacity>
          </View>
          <View style={Styles.pilihdata}>
            <Text style={Styles.texttitle}>Tanggal</Text>
            <Text style={Styles.texttitle}>Nama Toko</Text>
            <Text style={Styles.textpilihdataDisributor}>Distributor</Text>
            <Text style={Styles.textpilihdataLecode}>LE CODE</Text>
          </View>
          <View style={Styles.line} />
          <Loading flag={this.state.isLoading} />
          <FlatList
            style={Styles.containerx}
            data={this.state.dataflatlist}
            keyExtractor={(item, index) => `${item}--${index}`}
            renderItem={({item}) => (
              <View>
                <TouchableOpacity
                  id={item.id}
                  onPress={() => navigate('DetailData', {id: item.id})}>
                  <View style={Styles.pilihdataBackend}>
                    <View style={Styles.pilihdatatexttanggal}>
                      <Text style={Styles.textpilihdatabulan}>
                        {item.tgl_kunjungan_akusisi}
                      </Text>
                    </View>
                    <View style={Styles.pilihdatatextnama}>
                      <Text style={Styles.textpilihdata}>{item.nama_toko}</Text>
                    </View>
                    <View style={Styles.pilihdatatexttanggal}>
                      <Text style={Styles.textpilihdata}>
                        {item.distributor}
                      </Text>
                    </View>
                    <View style={Styles.pilihdatatextlecode}>
                      <Text style={Styles.textpilihdata}>{item.le_code}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <View style={Styles.line} />
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}
