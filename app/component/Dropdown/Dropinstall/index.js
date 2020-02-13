import React, {Component} from 'react';
import {View, Picker, Text, TextInput} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import Loading from '../../Loading';
import Styles from './styles';

class status extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      provinsi: [],
      akses_toko: [],
      jenistoko: [],
      ukuran: [],
      luas: [],
      lokasi: [],
      berdekatan: [],
      pjp: [],
      parkir: [],
      jenisretail: [],
      status: ['Ada', 'Tidak Ada'],
    };
  }

  async componentDidMount() {
    this.getoption();
  }

  getoption = async () => {
    const tokenx = await AsyncStorage.getItem('token');
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
        const MasterProvinsi = MasterOptionArray.filter(provinsi => {
          return provinsi.flag === 'provinsi';
        });
        const MasterAksestoko = MasterOptionArray.filter(akses_toko => {
          return akses_toko.flag === 'akses_toko';
        });
        const Masterjenistoko = MasterOptionArray.filter(jenis_toko => {
          return jenis_toko.flag === 'jenis_toko';
        });
        const Masterjenisretail = MasterOptionArray.filter(retail_toko => {
          return retail_toko.flag === 'retail_toko';
        });
        const Masterberdekatan = MasterOptionArray.filter(dekat_dengan => {
          return dekat_dengan.flag === 'dekat_dengan';
        });
        const Masterukuran = MasterOptionArray.filter(ukuran => {
          return ukuran.flag === 'ukuran';
        });
        const Masterlokasi = MasterOptionArray.filter(lokasi => {
          return lokasi.flag === 'lokasi';
        });
        const Masterluas = MasterOptionArray.filter(luas_toko => {
          return luas_toko.flag === 'luas_toko';
        });
        const Masterpjp = MasterOptionArray.filter(pjp => {
          return pjp.flag === 'pjp';
        });
        const Masterparkir = MasterOptionArray.filter(parkir => {
          return parkir.flag === 'parkir';
        });
        // console.log(MasterOption);
        // console.log(provinsi);
        this.setState({
          isLoading: false,
          provinsi: [...new Set(MasterProvinsi.map(x => x.nama))],
          akses_toko: [...new Set(MasterAksestoko.map(x => x.nama))],
          jenistoko: [...new Set(Masterjenistoko.map(x => x.nama))],
          jenisretail: [...new Set(Masterjenisretail.map(x => x.nama))],
          berdekatan: [...new Set(Masterberdekatan.map(x => x.nama))],
          ukuran: [...new Set(Masterukuran.map(x => x.nama))],
          lokasi: [...new Set(Masterlokasi.map(x => x.nama))],
          luas: [...new Set(Masterluas.map(x => x.nama))],
          pjp: [...new Set(Masterpjp.map(x => x.nama))],
          parkir: [...new Set(Masterparkir.map(x => x.nama))],
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const {
      datajenistoko,
      dataukuran,
      dataluas,
      datalokasi,
      databerdekatan,
      datapjp,
      dataparkir,
      dataplang,
      dataetalase,
      datarak,
      datakulkasminum,
      dataeskrim,
      datajenisretail,
      dataakses,
      //baru
      dataprovinsi,
      onChangekota,
      onChangesales,
      valuekota,
      valuesales,
    } = this.props;
    return (
      <View>
        <Loading flag={this.state.isLoading} />
        <Text style={Styles.TextInput}>Nama Sales Distributor</Text>
        <TextInput
          keyboardType={'default'}
          style={Styles.textInput}
          placeholder={'Nama Sales'}
          value={`${valuesales}`}
          onChangeText={onChangesales}
          // onChangeText={sales => this.changeState({name: 'sales', val: sales})}
        />
        <Text style={Styles.TextInput}>Provinsi</Text>
        <View style={Styles.droppicker}>
          <Picker
            mode={'dropdown'}
            selectedValue={dataprovinsi}
            onValueChange={itemValue => {
              this.props.onChangeprovinsi('provinsi', itemValue);
            }}>
            <Picker.Item color="grey" label="Provinsi Tempat Usaha" value="" />
            {this.state.provinsi.map((jenis, id) => (
              <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
            ))}
          </Picker>
        </View>
        <Text style={Styles.TextInput}>Kota/Kabupaten</Text>
        <TextInput
          returnKeyType="go"
          style={Styles.textInput}
          keyboardType={'default'}
          placeholder={'Kota Tempat Usaha'}
          onChangeText={onChangekota}
          value={`${valuekota}`}
        />
        <Text style={Styles.TextInput}>PJP</Text>
        <View style={Styles.droppicker}>
          <Picker
            mode={'dropdown'}
            selectedValue={datapjp}
            onValueChange={itemValue => {
              this.props.onChangepjp('pjp', itemValue);
            }}>
            <Picker.Item color="grey" label="PJP" value="" />
            {this.state.pjp.map((jenis, id) => (
              <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
            ))}
          </Picker>
        </View>
        <Text style={Styles.TextInput}>Jenis toko</Text>
        <View style={Styles.droppicker}>
          <Picker
            mode={'dropdown'}
            selectedValue={datajenistoko}
            onValueChange={itemValue => {
              this.props.onChangejenistoko('jenis_toko', itemValue);
            }}>
            <Picker.Item color="grey" label="Jenis toko" value="" />
            {this.state.jenistoko.map((jenis, id) => (
              <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
            ))}
          </Picker>
        </View>
        <Text style={Styles.TextInput}>Jenis Retail</Text>
        <View style={Styles.droppicker}>
          <Picker
            mode={'dropdown'}
            selectedValue={datajenisretail}
            onValueChange={itemValue => {
              this.props.onChangejenisretail('retail_toko', itemValue);
            }}>
            <Picker.Item color="grey" label="Jenis Retail" value="" />
            {this.state.jenisretail.map((jenis, id) => (
              <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
            ))}
          </Picker>
        </View>
        <Text style={Styles.TextInput}>Ukuran toko</Text>
        <View style={Styles.droppicker}>
          <Picker
            mode={'dropdown'}
            selectedValue={dataukuran}
            onValueChange={itemValue => {
              this.props.onChangeukuran('ukuran', itemValue);
            }}>
            <Picker.Item color="grey" label="Ukuran toko" value="" />
            {this.state.ukuran.map((jenis, id) => (
              <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
            ))}
          </Picker>
        </View>
        <Text style={Styles.TextInput}>Luas toko</Text>
        <View style={Styles.droppicker}>
          <Picker
            mode={'dropdown'}
            selectedValue={dataluas}
            onValueChange={itemValue => {
              this.props.onChangeluas('luas_toko', itemValue);
            }}>
            <Picker.Item color="grey" label="Luas toko" value="" />
            {this.state.luas.map((jenis, id) => (
              <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
            ))}
          </Picker>
        </View>
        <Text style={Styles.TextInput}>Lokasi Toko</Text>
        <View style={Styles.droppicker}>
          <Picker
            mode={'dropdown'}
            selectedValue={datalokasi}
            onValueChange={itemValue => {
              this.props.onChangelokasi('lokasi', itemValue);
            }}>
            <Picker.Item color="grey" label="Lokasi toko" value="" />
            {this.state.lokasi.map((jenis, id) => (
              <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
            ))}
          </Picker>
        </View>
        <Text style={Styles.TextInput}>Akses Jalan Toko</Text>
        <View style={Styles.droppicker}>
          <Picker
            mode={'dropdown'}
            selectedValue={dataakses}
            onValueChange={itemValue => {
              this.props.onChangeaksestoko('akses_toko', itemValue);
            }}>
            <Picker.Item color="grey" label="Akses jalan masuk toko" value="" />
            {this.state.akses_toko.map((jenis, id) => (
              <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
            ))}
          </Picker>
        </View>
        <Text style={Styles.TextInput}>Toko Berdekatan Dengan</Text>
        <View style={Styles.droppicker}>
          <Picker
            mode={'dropdown'}
            selectedValue={databerdekatan}
            onValueChange={itemValue => {
              this.props.onChangeberdekatan('dekat_dengan', itemValue);
            }}>
            <Picker.Item
              color="grey"
              label="Lokasi toko berdekatan dengan"
              value=""
            />
            {this.state.berdekatan.map((jenis, id) => (
              <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
            ))}
          </Picker>
        </View>
        <Text style={Styles.TextInput}>Area Parkir</Text>
        <View style={Styles.droppicker}>
          <Picker
            mode={'dropdown'}
            selectedValue={dataparkir}
            onValueChange={itemValue => {
              this.props.onChangeparkir('parkir', itemValue);
            }}>
            <Picker.Item color="grey" label="Area Parkir Toko" value="" />
            {this.state.parkir.map((jenis, id) => (
              <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
            ))}
          </Picker>
        </View>
        <Text style={Styles.TextInput}>Ada Nama Toko(Plang)</Text>
        <View style={Styles.droppicker}>
          <Picker
            mode={'dropdown'}
            selectedValue={dataplang}
            onValueChange={itemValue => {
              this.props.onChangeplang('plang', itemValue);
            }}>
            <Picker.Item color="grey" label="Plang Toko" value="" />
            {this.state.status.map((jenis, id) => (
              <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
            ))}
          </Picker>
        </View>
        <Text style={Styles.TextInput}>Etalase Toko</Text>
        <View style={Styles.droppicker}>
          <Picker
            mode={'dropdown'}
            selectedValue={dataetalase}
            onValueChange={itemValue => {
              this.props.onChangeetalase('etalase_toko', itemValue);
            }}>
            <Picker.Item color="grey" label="Etalase Toko" value="" />
            {this.state.status.map((jenis, id) => (
              <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
            ))}
          </Picker>
        </View>
        <Text style={Styles.TextInput}>Rak Makanan Kering</Text>
        <View style={Styles.droppicker}>
          <Picker
            mode={'dropdown'}
            selectedValue={datarak}
            onValueChange={itemValue => {
              this.props.onChangerak('rak_makanan', itemValue);
            }}>
            <Picker.Item color="grey" label="Rak Makanan Kering" value="" />
            {this.state.status.map((jenis, id) => (
              <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
            ))}
          </Picker>
        </View>
        <Text style={Styles.TextInput}>Kulkas Minuman</Text>
        <View style={Styles.droppicker}>
          <Picker
            mode={'dropdown'}
            selectedValue={datakulkasminum}
            onValueChange={itemValue => {
              this.props.onChangekulkas('kulkas', itemValue);
            }}>
            <Picker.Item color="grey" label="Kulkas Minuman" value="" />
            {this.state.status.map((jenis, id) => (
              <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
            ))}
          </Picker>
        </View>
        <Text style={Styles.TextInput}>Kulkas Es Krim</Text>
        <View style={Styles.droppicker}>
          <Picker
            mode={'dropdown'}
            selectedValue={dataeskrim}
            onValueChange={itemValue => {
              this.props.onChangeeskrim('kulkas_esKrim', itemValue);
            }}>
            <Picker.Item color="grey" label="Kulkas ES Krim" value="" />
            {this.state.status.map((jenis, id) => (
              <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
            ))}
          </Picker>
        </View>
      </View>
    );
  }
}

export default status;
