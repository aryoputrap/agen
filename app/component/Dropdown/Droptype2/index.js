import React, {Component} from 'react';
import {View, Picker, Text} from 'react-native';
import Styles from './styles';

class status extends Component {
  constructor() {
    super();
    this.state = {
      status: ['Unilever', 'Bayar Nanti'],
    };
  }
  render() {
    const {data, label, title, key} = this.props;
    return (
      <View>
        <Text style={Styles.TextInput}>{title}</Text>
        <View style={Styles.droppicker}>
          <Picker
            key={key}
            mode={'dropdown'}
            selectedValue={data}
            onValueChange={itemValue => {
              this.props.onChange('tagihan', itemValue);
            }}>
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
