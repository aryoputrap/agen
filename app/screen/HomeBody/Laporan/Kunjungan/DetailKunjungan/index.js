import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import Styles from './style';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import decode from 'jwt-decode';
import Loading from '../../../../../component/Loading';

export default class DetailKunjungan extends Component {
  static navigationOptions = () => ({
    title: 'Detail Kunjungan',
    headerTransparent: false,
    headerTitleStyle: Styles.headerTitleStyle,
    headerStyle: Styles.headerStyle,
  });

  constructor(props) {
    super(props);
    this.state = {
      dataflatlist: [],
      kunjunganflatlist: null,
      isLoading: true,
    };
  }

  async componentDidMount() {
    // const {item} = this.props;
    const token = await AsyncStorage.getItem('token');
    const iduser = await decode(token);
    const userid = iduser.body[0];
    // console.log(userid);
    const tgl = this.props.navigation.state.params.id.id;
    // console.log(it);
    // const item = '2020-01-20';
    const header = {
      Authorization: 'Bearer ' + token,
      'x-api-key':
        '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
    };
    axios({
      method: 'GET',
      url:
        'http://support.tokopandai.id:3003/Api/laporan/kunjunganDetail/' +
        userid +
        '/' +
        tgl,
      headers: header,
    })
      .then(response => {
        this.response = response.data;
        // console.log(response.data.data);
        const dataflatlist = response.data.data;
        this.setState(
          {
            dataflatlist,
            isLoading: false,
          },
          // () => console.log(this.state),
        );
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isLoading: false,
        });
        // this.props.navigation.navigate('LihatData');
      });
  }

  render() {
    return (
      <View>
        <View style={Styles.container}>
          <Loading flag={this.state.isLoading} />
          <View style={Styles.linebody} />
          <FlatList
            style={Styles.containerx}
            data={this.state.dataflatlist}
            keyExtractor={(item, index) => `${item}--${index}`}
            renderItem={({item}) => (
              <View>
                <View style={Styles.linebody} />
                <View style={Styles.titleAbsensi}>
                  <View style={Styles.dateVisit}>
                    {/* <Text style={Styles.date}> 18 </Text> */}
                    <Text style={Styles.date2}>{item.tgl}</Text>
                    {/* <Text style={Styles.date2}> 10:00 WIB</Text> */}
                  </View>
                  <View style={Styles.lineHorizontal} />
                  <View style={Styles.bodycolum}>
                    <Text style={Styles.toko}>{item.nama_toko}</Text>
                    <View style={Styles.bodyKunjungan}>
                      <View style={Styles.textinstallStatus}>
                        <Text style={Styles.textstatusInstall}>
                          {item.le_code}
                        </Text>
                        <Text style={Styles.textstatusInstall}> MIR LA</Text>
                      </View>
                      <View style={Styles.textinstallStatus}>
                        <Text>{item.ket_akusisi}</Text>
                        <Text>{item.ket_aktivasi}</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={Styles.line} />
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}
