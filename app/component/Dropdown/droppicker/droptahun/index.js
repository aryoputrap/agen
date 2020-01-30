import React, {Component} from 'react';
import {View, Picker} from 'react-native';
import {TAHUN} from '../../../../utility/InputData_Utility';

const Filter_Tahun = TAHUN;
class status extends Component {
  constructor() {
    super();
    this.state = {
      Tahun: Filter_Tahun,
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
            this.props.onChange('Tahun', itemValue);
          }}>
          <Picker.Item color="grey" label="Tahun" value="" />
          {this.state.Tahun.map((jenis, id) => (
            <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
          ))}
        </Picker>
      </View>
    );
  }
}

export default status;
