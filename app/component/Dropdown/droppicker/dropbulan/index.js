import React, {Component} from 'react';
import {View, Picker} from 'react-native';
import {BULAN} from '../../../../utility/InputData_Utility';

const Filter_Bulan = BULAN;
class bulan extends Component {
  constructor() {
    super();
    this.state = {
      Bulan: Filter_Bulan,
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
            this.props.onChange('Bulan', itemValue);
          }}>
          <Picker.Item color="grey" label="Bulan" value="" />
          {this.state.Bulan.map((jenis, id) => (
            <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
          ))}
        </Picker>
      </View>
    );
  }
}

export default bulan;
