import * as React from 'react';
import {Picker, View, Text, TextInput} from 'react-native';
import axios from 'axios';
import Styles from './style';

class Form extends React.Component {
  constructor() {
    super();
    (this.state = {
      provinsi: [],
      province: [],
      selectedProvince: '',
      selectedCity: '',
      cities: [],
      city: '',
      // eslint-disable-next-line no-sequences
    }),
      () => console.log(this.state);
  }

  async componentDidMount() {
    this.city();
  }

  city = async () => {
    // const tokenx = await AsyncStorage.getItem('token');
    // const iduser = await decode(tokenx);
    // const id = iduser.body[0];
    const tokenx =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5IjpbMTQsImFrdXNpc2kiLDMsMTRdLCJpYXQiOjE1ODEzMjI1MzIsImV4cCI6MTU4MTM1MTMzMn0.CnKUKO-azXjnKPRSmkclZdPmzgOHXYVA6531fZ2-T48';
    const header = {
      Authorization: 'Bearer ' + tokenx,
      'x-api-key':
        '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
    };
    axios({
      method: 'GET',
      url: 'http://support.tokopandai.id:3003/Api/getOption',
      headers: header,
    })
      .then(response => {
        this.response = response.data;
        // console.log(response);
        //Data Array Deny Botak
        const MasterOptionArray = response.data.data;
        const MasterProvinsi = MasterOptionArray.filter(provinsi => {
          return provinsi.flag === 'provinsi';
        });
        const Masterdataprovinsi = [
          ...new Set(MasterProvinsi.map(x => x.nama)),
        ];
        // console.log(MasterOption);
        // console.log(provinsi);
        this.setState({
          provinsi: Masterdataprovinsi,
          isLoading: false,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const {styles, data, title, title2, onChangeText, value} = this.props;
    return (
      <View>
        <Text style={Styles.TextInput}>{title}</Text>
        <View style={styles}>
          <Picker
            mode="dropdown"
            selectedValue={data}
            onValueChange={itemValue => {
              this.props.onChange('provinsi', itemValue);
            }}>
            <Picker.Item color="grey" label="Provinsi Tempat Usaha" value="" />
            {this.state.provinsi.map((jenis, index) => (
              <Picker.Item key={index} label={`${jenis}`} value={`${jenis}`} />
            ))}
          </Picker>
        </View>
        <Text style={Styles.TextInput}>{title2}</Text>
        <View style={styles}>
          <TextInput
            returnKeyType="go"
            style={Styles.textInput}
            keyboardType={'default'}
            placeholder={'Kota Tempat Usaha'}
            onChangeText={onChangeText}
            value={`${value}`}
          />
        </View>
      </View>
    );
  }
}
export default Form;
