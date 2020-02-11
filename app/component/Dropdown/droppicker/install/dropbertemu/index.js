import React, {Component} from 'react';
import {View, Picker} from 'react-native';
import {BERTEMU} from '../../../../../utility/InputData_Utility';

const Status = BERTEMU;
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
            this.props.onChange('bertemu_dengan', itemValue);
          }}>
          <Picker.Item color="grey" label="Telah bertemu dengan" value="" />
          {this.state.dropdown.map((jenis, id) => (
            <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
          ))}
        </Picker>
      </View>
    );
  }
}

export default status;
