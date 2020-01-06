import React, {Component} from 'react';
import {View, Picker} from 'react-native';
import {LOKASI_TOKO} from '../../../../../utility/InputData_Utility';

const LOKASITOKO = LOKASI_TOKO;
class status extends Component {
  constructor() {
    super();
    this.state = {
      lokasi: LOKASITOKO,
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
            this.props.onChange('lokasi', itemValue);
          }}>
          <Picker.Item color="grey" label="Lokasi toko" value="" />
          {this.state.lokasi.map((jenis, id) => (
            <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
          ))}
        </Picker>
      </View>
    );
  }
}

export default status;
