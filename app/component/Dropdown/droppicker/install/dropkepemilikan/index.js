import React, {Component} from 'react';
import {View, Picker} from 'react-native';
import {KEPEMILIKAN} from '../../../../../utility/InputData_Utility';

const Status = KEPEMILIKAN;
class status extends Component {
  constructor() {
    super();
    this.state = {
      dropdown: Status,
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
            this.props.onChange('status_kepemilikan', itemValue);
          }}>
          <Picker.Item color="grey" label="Kepemilikan Toko" value="" />
          {this.state.dropdown.map((jenis, id) => (
            <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
          ))}
        </Picker>
      </View>
    );
  }
}

export default status;
