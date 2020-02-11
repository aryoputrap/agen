import React, {Component} from 'react';
import {View, Picker, Text} from 'react-native';
import {
  UKURAN_TOKO,
  LUAS_TOKO,
  LOKASI_TOKO,
  JENIS_TOKO,
  PJP,
  AREA_PARKIR,
} from '../../../../../utility/InputData_Utility';
import Styles from './styles';

const UKURANTOKO = UKURAN_TOKO;
const LUASTOKO = LUAS_TOKO;
const LOKASI = LOKASI_TOKO;
const JENISTOKO = JENIS_TOKO;
const PJPDATA = PJP;
const PARKIR = AREA_PARKIR;

class status extends Component {
  constructor() {
    super();
    this.state = {
      jenistoko: JENISTOKO,
      ukuran: UKURANTOKO,
      luas: LUASTOKO,
      lokasi: LOKASI,
      berdekatan: ['Kantor RT/RW', 'Tempat Keagmaan', 'Pasar', 'Sekolah'],
      pjp: PJPDATA,
      parkir: PARKIR,
      status: ['Ada', 'Tidak Ada'],
      jenisretail: [
        'Toko Sembako',
        'Toko Bahan Makanan',
        'Toko Kosmetik',
        'Toko Alat Rumah',
      ],
      akses_toko: ['Motor', '1 Mobil', '2 Mobil'],
      kodepos: ['40321', '44402', '41022'],
    };
  }
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
      datarevisit,
      datajenisretail,
      dataakses,
      datakodepos,
    } = this.props;
    return (
      <View>
        <Text style={Styles.TextInput}>Kode POS Toko</Text>
        <View style={Styles.droppicker}>
          <Picker
            mode={'dropdown'}
            selectedValue={datakodepos}
            onValueChange={itemValue => {
              this.props.onChangekodepos('kode_pos', itemValue);
            }}>
            <Picker.Item color="grey" label="Kode Pos" value="" />
            {this.state.kodepos.map((jenis, id) => (
              <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
            ))}
          </Picker>
        </View>
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
        <Text style={Styles.TextInput}>
          Berpotensi (Untuk Dikunjungi Kembali)
        </Text>
        <View style={Styles.droppicker}>
          <Picker
            mode={'dropdown'}
            selectedValue={datarevisit}
            onValueChange={itemValue => {
              this.props.onChangerevisit('potensi_revisit', itemValue);
            }}>
            <Picker.Item color="grey" label="Potensi Revisit" value="" />
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
