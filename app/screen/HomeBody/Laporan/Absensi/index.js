import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';
// import token from '../../../../config/Api/token';
import Styles from './style';

export default class Absensi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      absenflatlist: null,
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
      url: 'http://support.tokopandai.id:3003/Api/laporan/absen/15/01/2020',
      headers: header,
    })
      .then(response => {
        this.response = response.data;
        console.log(response.data.data);
        this.setState({
          absenflatlist: response.data.data.data,
          isLoading: false,
        });
        console.log(this.state);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.titleAbsensi}>
          <Text style={Styles.textabsensi}>Tanggal</Text>
          <Text style={Styles.textabsensi}>Masuk</Text>
          <Text style={Styles.textabsensi}>Pulang</Text>
        </View>
        <View style={Styles.linebody} />
        <View style={Styles.titleAbsensi}>
          <Text style={Styles.textabsensi2}> 18 Nov 2019</Text>
          <Text style={Styles.textabsensi2}> 08: 00 WIB</Text>
          <Text style={Styles.textabsensi2}> 17: 00 WIB</Text>
        </View>
        <View style={Styles.line} />
        <FlatList
          key="flatList"
          style={Styles.containerx}
          data={this.state.absenflatlist}
          keyExtractor={(item, index) => `${item}--${index}`}
          renderItem={({item}) => (
            <View>
              <View style={Styles.titleAbsensi}>
                <Text style={Styles.textabsensi2}>{item.tgl}</Text>
                <Text style={Styles.textabsensi2}>{item.masuk} WIB</Text>
                <Text style={Styles.textabsensi2}>{item.pulang} WIB</Text>
              </View>
              <View style={Styles.line} />
            </View>
          )}
        />
      </View>
    );
  }
}
