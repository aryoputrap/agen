import React, {Component} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import axios from 'axios';
import Styles from './style';

export default class Absensi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kunjunganflatlist: null,
    };
  }
  UNSAFE_componentWillMount() {
    // const flag = this.state.flag;
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5IjpbMTQsImFrdXNpc2kiLDNdLCJpYXQiOjE1ODAzNzYxMTAsImV4cCI6MTU4MDQwNDkxMH0.SAj9cOhmCcJssOTbPp5e_BHSz7qg36gX9zMBIZI5SzM';
    const header = {
      Authorization: 'Bearer ' + token,
      'x-api-key':
        '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
    };
    axios({
      method: 'GET',
      url: 'http://support.tokopandai.id:3003/Api/laporan/kunjungan/12',
      headers: header,
    })
      .then(response => {
        this.response = response.data;
        // console.log(response.data.data);
        this.setState({
          kunjunganflatlist: response.data.data,
          isLoading: false,
        });
        console.log(this.state);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const {onPress} = this.props;
    return (
      <View style={Styles.container}>
        <View style={Styles.linebody} />
        <View style={Styles.titleAbsensi}>
          <View style={Styles.dateVisit}>
            <Text style={Styles.date}> 18 </Text>
            <Text style={Styles.date}> Nov 2019</Text>
          </View>
          <View style={Styles.lineHorizontal} />
          <View style={Styles.bodyKunjungan}>
            <View style={Styles.textinstallStatus}>
              <Text style={Styles.textstatusInstall}> Total Install</Text>
              <Text style={Styles.textstatusInstall}> Total No Install</Text>
              <Text style={Styles.textstatusInstall}> Total Aktivasi</Text>
              <Text style={Styles.textTotal}> Total Kunjungan </Text>
            </View>
            <View style={Styles.textinstallStatus}>
              <Text> 6 </Text>
              <Text> 5 </Text>
              <Text> 10 </Text>
              <Text style={Styles.textTotal}> 11 </Text>
            </View>
          </View>
        </View>
        <View style={Styles.buttonView}>
          <TouchableOpacity style={Styles.btnDetail} onPress={onPress}>
            <Text style={Styles.textDetail}>Lihat Detail</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.line} />
        <FlatList
          key="flatList"
          style={Styles.containerx}
          data={this.state.kunjunganflatlist}
          keyExtractor={(item, index) => `${item}--${index}`}
          renderItem={({item}) => (
            <View style={Styles.container}>
              <View style={Styles.linebody} />
              <View style={Styles.titleAbsensi}>
                <View style={Styles.dateVisit}>
                  <Text style={Styles.date}> 18 </Text>
                  <Text style={Styles.date}> {item.tgl}</Text>
                </View>
                <View style={Styles.lineHorizontal} />
                <View style={Styles.bodyKunjungan}>
                  <View style={Styles.textinstallStatus}>
                    <Text style={Styles.textstatusInstall}> Total Install</Text>
                    <Text style={Styles.textstatusInstall}>
                      {' '}
                      Total No Install
                    </Text>
                    <Text style={Styles.textstatusInstall}>
                      {' '}
                      Total Aktivasi
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
                <TouchableOpacity style={Styles.btnDetail} onPress={onPress}>
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
