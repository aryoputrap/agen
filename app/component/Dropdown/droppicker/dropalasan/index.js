import React, {Component} from 'react';
import {View, Picker} from 'react-native';

class status extends Component {
  constructor() {
    super();
    this.state = {
      ket2_akusisi: [
        'Ribet',
        'Tidak Punya HP (Mau kredit HP)',
        'Tunggu Konfirmasi Pemilik',
        'Toko Sedang Sibuk/Tutup - Revisit',
        'Tunggu Informasi Sales',
        'Sudah Tua/Gaptek',
        'System Down',
        'Hanya mau setor ke Sales',
        'Order Sedikit/Jarang',
        'Alasan Lainnya',
      ],
    };
  }
  render() {
    const {data, styles} = this.props;
    return (
      <View style={styles}>
        <Picker
          mode={'dropdown'}
          selectedValue={data}
          onValueChange={itemValue => {
            this.props.onChange('ket2_akusisi', itemValue);
          }}>
          <Picker.Item color="grey" label="Alasan Belum Install" value="" />
          {this.state.ket2_akusisi.map((jenis, id) => (
            <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
          ))}
        </Picker>
      </View>
    );
  }
}

export default status;
