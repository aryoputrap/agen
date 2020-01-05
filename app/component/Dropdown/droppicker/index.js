import React, {Component} from 'react';
import {View, StyleSheet, Picker} from 'react-native';

class status extends Component {
  constructor() {
    super();
    this.state = {
      ket_akusisi: ['Install', 'Belum Install'],
    };
  }
  render() {
    const {data, styles} = this.props;
    return (
      <View style={styles}>
        <Picker
          selectedValue={data}
          onValueChange={itemValue => {
            this.props.onChange('ket_akusisi', itemValue);
          }}>
          <Picker.Item color="grey" label="Status Toko" value="0" />
          {this.state.ket_akusisi.map((jenis, id) => (
            <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
          ))}
        </Picker>
      </View>
    );
  }
}

export default status;
