import React, {Component} from 'react';
import {View, Picker} from 'react-native';
import {JENIS_TOKO} from '../../../../../utility/InputData_Utility';

const JENISTOKO = JENIS_TOKO;
class status extends Component {
  constructor() {
    super();
    this.state = {
      jenis_toko: JENISTOKO,
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
            this.props.onChange('jenis_toko', itemValue);
          }}>
          <Picker.Item color="grey" label="Jenis toko" value="" />
          {this.state.jenis_toko.map((jenis, id) => (
            <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
          ))}
        </Picker>
      </View>
    );
  }
}

export default status;
