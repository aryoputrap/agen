import React, {Component} from 'react';
import {View, Picker} from 'react-native';
import {PJP} from '../../../../../utility/InputData_Utility';

const PJPdata = PJP;
class status extends Component {
  constructor() {
    super();
    this.state = {
      pjp: PJPdata,
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
            this.props.onChange('pjp', itemValue);
          }}>
          <Picker.Item color="grey" label="PJP" value="" />
          {this.state.pjp.map((jenis, id) => (
            <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
          ))}
        </Picker>
      </View>
    );
  }
}

export default status;
