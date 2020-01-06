import React, {Component} from 'react';
import {View, Picker} from 'react-native';
import {AREA_PARKIR} from '../../../../../utility/InputData_Utility';

const AREAPARKIR = AREA_PARKIR;
class status extends Component {
  constructor() {
    super();
    this.state = {
      parkir: AREAPARKIR,
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
            this.props.onChange('parkir', itemValue);
          }}>
          <Picker.Item color="grey" label="Area Parkir ? " value="" />
          {this.state.parkir.map((jenis, id) => (
            <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
          ))}
        </Picker>
      </View>
    );
  }
}

export default status;
