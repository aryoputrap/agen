import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';
import {token} from '../../../config/Api/token';
import Loading from '../../../component/Loading';
import Dropdown from '../../../component/Dropdown';
// import Button from '../../../component/Button/ButtonAkun';
import Styles from './style';
import {Data} from './data';
import axios from 'axios';
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
      dataflatlistdumy: Data.data,
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
      console.log('Install');
      this.setState({
        isLoading: true,
        flag: 'C',
      });
      this.requestinstall();
    } else if (val === '1') {
      console.log('No Install');
      this.setState({
        isLoading: true,
        flag: 'T',
      });
      this.requestnoinstall();
    }
  }

  requestinstall = () => {
    // const flag = this.state.flag;
    const header = {
      Authorization: 'Bearer ' + token,
      'x-api-key':
        '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
    };
    axios({
      method: 'GET',
      url: 'http://support.tokopandai.id:3003/Api/viewAkusisi/14/C/1/30',
      headers: header,
    })
      .then(response => {
        this.response = response.data;
        console.log(response);
        this.setState({
          dataflatlist: response.data.data,
          isLoading: false,
        });
        console.log(this.response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  requestnoinstall = () => {
    const header = {
      Authorization: 'Bearer ' + token,
      'x-api-key':
        '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
    };
    axios({
      method: 'GET',
      url: 'http://support.tokopandai.id:3003/Api/viewAkusisi/14/T/1/5',
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
      });
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={Styles.container}>
          <Text style={Styles.TextInput}>Lihat Data</Text>
          <View style={Styles.dropdown}>
            <TouchableOpacity style={Styles.buttonDropdown}>
              <Dropdown
                // eslint-disable-next-line react-native/no-inline-styles
                textStyle={{fontSize: 15}}
                style={Styles.dropdownStyle}
                defaultIndex={-1}
                defaultValue={'Pilih Jenis Data'}
                options={['Install', 'No Install']}
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
          <TouchableOpacity onPress={() => navigate('DetailData')}>
            <View style={Styles.pilihdataBackend}>
              <View style={Styles.pilihdatatexttanggal}>
                <Text style={Styles.textpilihdatabulan}>
                  2020-20-10: 07:10:20
                </Text>
              </View>
              <View style={Styles.pilihdatatextnama}>
                <Text style={Styles.textpilihdata}>Aryo Toko</Text>
              </View>
              <View style={Styles.pilihdatatexttanggal}>
                <Text style={Styles.textpilihdata}>MIA LIA</Text>
              </View>
              <View style={Styles.pilihdatatextlecode}>
                <Text style={Styles.textpilihdata}>111112222233333444</Text>
              </View>
            </View>
          </TouchableOpacity>
          <Loading flag={this.state.isLoading} />
          <View style={Styles.line} />
          <FlatList
            key="flatList"
            style={Styles.containerx}
            data={this.state.dataflatlist}
            keyExtractor={(item, index) => `${item}--${index}`}
            renderItem={({item}) => (
              <View>
                <TouchableOpacity
                  id={item.id}
                  onPress={() => navigate('DetailData', item.id)}>
                  <View style={Styles.pilihdataBackend}>
                    <View style={Styles.pilihdatatexttanggal}>
                      <Text style={Styles.textpilihdatabulan}>
                        {item.tgl_kunjungan_akusisi}
                      </Text>
                    </View>
                    <View style={Styles.pilihdatatextnama}>
                      <Text style={Styles.textpilihdata}>
                        {item.nama_toko}
                        {item.id}
                      </Text>
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
          {/* <View style={Styles.Button}>
            <Button textField={'LIHAT DATA'} />
          </View> */}
        </View>
      </SafeAreaView>
    );
  }
}
