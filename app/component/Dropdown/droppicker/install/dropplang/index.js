import React, {Component} from 'react';
import {View, Picker} from 'react-native';
import {ADA_NAMA_TOKO} from '../../../../../utility/InputData_Utility';

const ADANAMATOKO = ADA_NAMA_TOKO;
class status extends Component {
  constructor() {
    super();
    this.state = {
      plang: ADANAMATOKO,
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
            this.props.onChange('plang', itemValue);
          }}>
          <Picker.Item color="grey" label="Plang toko" value="" />
          {this.state.plang.map((jenis, id) => (
            <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
          ))}
        </Picker>
      </View>
    );
  }
}

export default status;
