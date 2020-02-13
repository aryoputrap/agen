import React, {Component} from 'react';
import {View, Picker, Text} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import Loading from '../../Loading';
import Styles from './styles';

class DROPFLAG extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      bertemu_dengan: [],
      status_kepemilikan: [],
      distributor: [],
      kodepos: [],
      revisit: [],
    };
  }

  async componentDidMount() {
    this.getoption();
  }

  getoption = async () => {
    const tokenx = await AsyncStorage.getItem('token');
    // const iduser = await decode(tokenx);
    // const id = iduser.body[0];
    // const tokenx =
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5IjpbMTQsImFrdXNpc2kiLDMsMTRdLCJpYXQiOjE1ODE0OTk2NjQsImV4cCI6MTU4MTUyODQ2NH0.iGOnkGESgwDdEfC1b9pOa4so0sC8-UjY7lA2C5qbosE';
    const header = {
      Authorization: 'Bearer ' + tokenx,
      'x-api-key':
        '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
    };
    axios({
      method: 'GET',
      url: 'http://support.tokopandai.id:3003/Api/getOption',
      headers: header,
    })
      .then(response => {
        this.response = response.data;
        //MASTER_ARRAY_DATA_DENY
        const MasterOptionArray = response.data.data;
        //MASTER_ARRAY
        const Masterbertemu = MasterOptionArray.filter(bertemu_dengan => {
          return bertemu_dengan.flag === 'bertemu_dengan';
        });
        const Masterpemilik = MasterOptionArray.filter(status_kepemilikan => {
          return status_kepemilikan.flag === 'status_kepemilikan';
        });
        const Masterdistributor = MasterOptionArray.filter(distributor => {
          return distributor.flag === 'distributor';
        });
        const Masterkodepos = MasterOptionArray.filter(kode_pos => {
          return kode_pos.flag === 'kode_pos';
        });
        const Masterrevisit = MasterOptionArray.filter(potensi_revisit => {
          return potensi_revisit.flag === 'potensi_revisit';
        });
        // console.log(MasterOption);
        // console.log(provinsi);
        this.setState({
          isLoading: false,
          bertemu_dengan: [...new Set(Masterbertemu.map(x => x.nama))],
          status_kepemilikan: [...new Set(Masterpemilik.map(x => x.nama))],
          distributor: [...new Set(Masterdistributor.map(x => x.nama))],
          kodepos: [...new Set(Masterkodepos.map(x => x.nama))],
          revisit: [...new Set(Masterrevisit.map(x => x.nama))],
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const {
      dataditributor,
      datakodepos,
      datarevisit,
      datapemilik,
      databertemu,
    } = this.props;
    return (
      <View>
        <Loading flag={this.state.isLoading} />
        <Text style={Styles.TextInput}>Bertemu Dengan</Text>
        <View style={Styles.droppicker}>
          <Picker
            mode={'dropdown'}
            selectedValue={databertemu}
            onValueChange={itemValue => {
              this.props.onChangebertemu('bertemu_dengan', itemValue);
            }}>
            <Picker.Item color="grey" label="Telah bertemu dengan" value="" />
            {this.state.bertemu_dengan.map((jenis, id) => (
              <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
            ))}
          </Picker>
        </View>
        <Text style={Styles.TextInput}>Kepemilikan Toko</Text>
        <View style={Styles.droppicker}>
          <Picker
            mode={'dropdown'}
            selectedValue={datapemilik}
            onValueChange={itemValue => {
              this.props.onChangepemilik('status_kepemilikan', itemValue);
            }}>
            <Picker.Item color="grey" label="Kepemilikan Toko" value="" />
            {this.state.status_kepemilikan.map((jenis, id) => (
              <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
            ))}
          </Picker>
        </View>
        <Text style={Styles.TextInput}>Distributor</Text>
        <View style={Styles.droppicker}>
          <Picker
            mode={'dropdown'}
            selectedValue={dataditributor}
            onValueChange={itemValue => {
              this.props.onChangedistributor('distributor', itemValue);
            }}>
            <Picker.Item color="grey" label="Distributor" value="" />
            {this.state.distributor.map((jenis, id) => (
              <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
            ))}
          </Picker>
        </View>
        <Text style={Styles.TextInput}>Kode Pos</Text>
        <View style={Styles.droppicker}>
          <Picker
            mode={'dropdown'}
            selectedValue={datakodepos}
            onValueChange={itemValue => {
              this.props.onChangekodepos('kode_pos', itemValue);
            }}>
            <Picker.Item color="grey" label="kode pos toko" value="" />
            {this.state.kodepos.map((jenis, id) => (
              <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
            ))}
          </Picker>
        </View>
        <Text style={Styles.TextInput}>Potensi Revisit Toko</Text>
        <View style={Styles.droppicker}>
          <Picker
            mode={'dropdown'}
            selectedValue={datarevisit}
            onValueChange={itemValue => {
              this.props.onChangerevisit('potensi_revisit', itemValue);
            }}>
            <Picker.Item color="grey" label="Potensi Revisit" value="" />
            {this.state.revisit.map((jenis, id) => (
              <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
            ))}
          </Picker>
        </View>
      </View>
    );
  }
}

export default DROPFLAG;
