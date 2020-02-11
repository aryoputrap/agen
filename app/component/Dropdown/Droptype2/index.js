import React, {Component} from 'react';
import {View, Picker, Text} from 'react-native';
import Styles from './styles';

class status extends Component {
  constructor() {
    super();
    this.state = {
      status: ['Ya', 'Tidak'],
    };
  }
  render() {
    const {data, label, title, onValueChange, key} = this.props;
    return (
      <View>
        <Text style={Styles.TextInput}>{title}</Text>
        <View style={Styles.droppicker}>
          <Picker
            key={key}
            mode={'dropdown'}
            selectedValue={data}
            onValueChange={onValueChange}>
            <Picker.Item color="grey" label={label} value="" />
            {this.state.status.map((jenis, id) => (
              <Picker.Item key={id} label={`${jenis}`} value={`${jenis}`} />
            ))}
          </Picker>
        </View>
      </View>
    );
  }
}

export default status;
