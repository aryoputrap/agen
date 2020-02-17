import React, {Component} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import decode from 'jwt-decode';
import Loading from '../../../../component/Loading';
import Styles from './style';

export default class Absensi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kunjunganflatlist: null,
      isLoading: true,
    };
  }
  async UNSAFE_componentWillMount() {
    const tokenx = await AsyncStorage.getItem('token');
    const iduser = await decode(tokenx);
    const id = iduser.body[0];
    console.log(id);
    const header = {
      Authorization: 'Bearer ' + tokenx,
      'x-api-key':
        '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
    };
    axios({
      method: 'GET',
      url: 'http://support.tokopandai.id:3003/Api/laporan/kunjungan/' + id,
      headers: header,
    })
      .then(response => {
        this.response = response.data;
        // console.log(response.data.data);
        this.setState({
          kunjunganflatlist: response.data.data,
          isLoading: false,
        });
        // console.log(this.state);
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isLoading: false,
        });
      });
  }
  render() {
    // const {onPress} = this.props;
    return (
      <View style={Styles.container}>
        <Loading flag={this.state.isLoading} />
        <View style={Styles.linebody} />
        <FlatList
          key="flatList"
          style={Styles.container}
          data={this.state.kunjunganflatlist}
          keyExtractor={(item, index) => `${item}--${index}`}
          renderItem={({item}) => (
            <View>
              <View style={Styles.linebody} />
              <View style={Styles.titleAbsensi}>
                <View style={Styles.dateVisit}>
                  <Text style={Styles.date}> 18 </Text>
                  <Text style={Styles.date}> {item.tgl}</Text>
                </View>
                <View style={Styles.lineHorizontal} />
                <View style={Styles.bodyKunjungan}>
                  <View style={Styles.textinstallStatus}>
                    <Text style={Styles.textstatusInstall}>
                      {' '}
                      Total Install dan Aktivasi
                    </Text>
                    <Text style={Styles.textstatusInstall}>
                      {' '}
                      Total Install dan Tidak Install
                    </Text>
                    <Text style={Styles.textstatusInstall}>
                      {' '}
                      Total Tidak Install
                    </Text>
                    <Text style={Styles.textTotal}> Total Kunjungan </Text>
                  </View>
                  <View style={Styles.textinstallStatus}>
                    <Text>{item.total_install}</Text>
                    <Text>{item.total_noInstall}</Text>
                    <Text>{item.total_aktivasi}</Text>
                    <Text style={Styles.textTotal}>{item.total_kunjungan}</Text>
                  </View>
                </View>
              </View>
              <View style={Styles.buttonView}>
                <TouchableOpacity
                  id={item.tgl}
                  style={Styles.btnDetail}
                  onPress={() => this.props.onPress({id: item.tgl})}>
                  <Text style={Styles.textDetail}>Lihat Detail</Text>
                </TouchableOpacity>
              </View>
              <View style={Styles.line} />
            </View>
          )}
        />
      </View>
    );
  }
}
