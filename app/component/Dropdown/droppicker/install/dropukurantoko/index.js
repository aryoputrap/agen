import React, {Component} from 'react';
import {View, Picker} from 'react-native';
import {UKURAN_TOKO} from '../../../../../utility/InputData_Utility';

const UKURANTOKO = UKURAN_TOKO;
class status extends Component {
  constructor() {
    super();
    this.state = {
      ukuran: UKURANTOKO,
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
            this.props.onChange('ukuran', itemValue);
          }}>
          <Picker.Item color="grey" label="Ukuran toko" value="" />
          {this.state.ukuran.map((jenis, id) => (
            <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
          ))}
        </Picker>
      </View>
    );
  }
}

export default status;
