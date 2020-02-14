import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Styles from '../style';
import TextinputHeader from '../../../../component/TextInput/TextinputHeader';
import Buttonsub from '../../../../component/Button/Buttongreen';

export default class editDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      day: '',
      location: {
        latitude: '',
        longitude: '',
      },
      sendData: {
        faktur1: '',
        faktur2: '',
        faktur3: '',
        faktur4: '',
        faktur5: '',
        tagihan: '',
      },
      latitude: 0,
      longitude: 0,
      error: null,
      Address: null,
    };
  }

  changeKost = async (name, value) => {
    await this.setState(prevState => ({
      sendData: {
        ...prevState.sendData,
        [name]: value,
      },
    }));
    // console.log(this.state.sendData);
  };

  changeState(payload) {
    const {name, val} = payload;
    const innerFormData = {...this.state.sendData};
    innerFormData[name] = val;
    // console.log(innerFormData);
    this.setState({sendData: innerFormData});
    const isCompleteForm = Object.values(this.state.sendData).every(
      e => e !== '',
    );
    this.setState({isCompleteForm});
  }

  render() {
    const {sendData} = this.state;
    return (
      <View>
        <View style={Styles.viewbody}>
          <Text>Input faktur yang dibawa dari distributor</Text>
          <TextinputHeader
            tittle={'Faktur 1'}
            value={sendData.faktur1}
            keyboardType={'default'}
            placeholder={'Masukan Nomor Faktur'}
            onChangeText={faktur1 =>
              this.changeState({name: 'faktur1', val: faktur1})
            }
          />
          <TextinputHeader
            tittle={'Faktur 2'}
            value={sendData.faktur2}
            keyboardType={'default'}
            placeholder={'Masukan Nomor Faktur'}
            onChangeText={faktur2 =>
              this.changeState({name: 'faktur2', val: faktur2})
            }
          />
          <TextinputHeader
            tittle={'Faktur 3'}
            value={sendData.faktur3}
            keyboardType={'default'}
            placeholder={'Masukan Nomor Faktur'}
            onChangeText={faktur3 =>
              this.changeState({name: 'faktur3', val: faktur3})
            }
          />
          <TextinputHeader
            tittle={'Faktur 4'}
            value={sendData.faktur4}
            keyboardType={'default'}
            placeholder={'Masukan Nomor Faktur'}
            onChangeText={faktur4 =>
              this.changeState({name: 'faktur4', val: faktur4})
            }
          />
          <TextinputHeader
            tittle={'Faktur 5'}
            value={sendData.faktur5}
            keyboardType={'default'}
            placeholder={'Masukan Nomor Faktur'}
            onChangeText={faktur5 =>
              this.changeState({name: 'faktur5', val: faktur5})
            }
          />
          <View style={Styles.btnsubmit}>
            <Buttonsub
              textField={'SUBMIT'}
              // onPress={() => this.bottomKeluar()}
              // onPress={() => this.Keluar()}
            />
          </View>
        </View>
      </View>
    );
  }
}
