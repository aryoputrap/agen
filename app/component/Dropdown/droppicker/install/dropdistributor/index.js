import React, {Component} from 'react';
import {View, Picker} from 'react-native';

class status extends Component {
  constructor() {
    super();
    this.state = {
      distributor: ['NPS Bekasi', 'NPS Jakarta'],
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
            this.props.onChange('distributor', itemValue);
          }}>
          <Picker.Item color="grey" label="Distributor" value="" />
          {this.state.distributor.map((jenis, id) => (
            <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
          ))}
        </Picker>
      </View>
    );
  }
}

export default status;
