import React, {Component} from 'react';
import {View, Picker} from 'react-native';
import {STATUS} from '../../../utility/InputData_Utility';

const STATUSDATA = STATUS;
class status extends Component {
  constructor() {
    super();
    this.state = {
      ket_akusisi: STATUSDATA,
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
            this.props.onChange('ket_akusisi', itemValue);
          }}>
          <Picker.Item color="grey" label="Status Toko" value="" />
          {this.state.ket_akusisi.map((jenis, id) => (
            <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
          ))}
        </Picker>
      </View>
    );
  }
}

export default status;
