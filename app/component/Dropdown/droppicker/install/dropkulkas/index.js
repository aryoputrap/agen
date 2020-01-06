import React, {Component} from 'react';
import {View, Picker} from 'react-native';
import {KULKAS} from '../../../../../utility/InputData_Utility';

const KULKASDATA = KULKAS;
class status extends Component {
  constructor() {
    super();
    this.state = {
      kulkas: KULKASDATA,
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
            this.props.onChange('kulkas', itemValue);
          }}>
          <Picker.Item color="grey" label="Ada kulkas ? " value="" />
          {this.state.kulkas.map((jenis, id) => (
            <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
          ))}
        </Picker>
      </View>
    );
  }
}

export default status;
