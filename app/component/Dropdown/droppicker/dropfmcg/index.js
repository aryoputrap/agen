import React, {Component} from 'react';
import {View, Picker} from 'react-native';
import {FMCG} from '../../../../utility/InputData_Utility';

const FMCGDATA = FMCG;
class status extends Component {
  constructor() {
    super();
    this.state = {
      fmcg: FMCGDATA,
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
            this.props.onChange('fmcg', itemValue);
          }}>
          <Picker.Item color="black" label="UNILEVER" value="1" />
          {this.state.fmcg.map((jenis, id) => (
            <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
          ))}
        </Picker>
      </View>
    );
  }
}

export default status;
