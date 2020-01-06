import React, {Component} from 'react';
import {View, Picker} from 'react-native';

class status extends Component {
  constructor() {
    super();
    this.state = {
      ket_aktivasi: ['Ya', 'Tidak'],
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
            this.props.onChange('ket_aktivasi', itemValue);
          }}>
          <Picker.Item color="grey" label="Aktivasi KTP" value="" />
          {this.state.ket_aktivasi.map((jenis, id) => (
            <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
          ))}
        </Picker>
      </View>
    );
  }
}

export default status;
