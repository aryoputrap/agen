import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import Styles from './style';
import Dropdown1 from '../../../component/Dropdown/Droptype1';
import Dropdown2 from '../../../component/Dropdown/Droptype2';
import TextinputHeader from '../../../component/TextInput/TextinputHeader';

export default class editDetail extends Component {
  static navigationOptions = () => ({
    title: 'Bayar Manual',
    headerTransparent: false,
    headerTitleStyle: Styles.headerTitleStyle,
    headerStyle: Styles.headerStyle,
  });

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      day: '',
      bayarmanual: '',
      location: {
        latitude: '',
        longitude: '',
      },
      sendData: {
        bayarmanual: '',
        tagihan: '',
        lecode: '',
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
        <View style={Styles.viewdrop}>
          <Dropdown1
            title={'Alasan Bayar Manual'}
            data={sendData.bayarmanual}
            label={'Alasan Bayar Manual'}
            onChange={this.changeKost}
          />
          <Dropdown2
            title={'Tagihan'}
            data={sendData.tagihan}
            label={'Tagihan'}
            onChange={this.changeKost}
          />
          <ScrollView style={Styles.Scroll}>
            <TextinputHeader
              tittle={'LE CODE'}
              value={sendData.lecode}
              keyboardType={'default'}
              placeholder={'LE CODE'}
              onChangeText={lecode =>
                this.changeState({name: 'lecode', val: lecode})
              }
            />
            <TextinputHeader
              tittle={'Nama Toko'}
              value={sendData.lecode}
              keyboardType={'default'}
              placeholder={'Nama Toko'}
              onChangeText={lecode =>
                this.changeState({name: 'lecode', val: lecode})
              }
            />
            <TextinputHeader
              tittle={'Kode DT'}
              value={sendData.lecode}
              keyboardType={'default'}
              placeholder={'Kode DT'}
              onChangeText={lecode =>
                this.changeState({name: 'lecode', val: lecode})
              }
            />
            <TextinputHeader
              tittle={'Nama DT'}
              value={sendData.lecode}
              keyboardType={'default'}
              placeholder={'Nama DT'}
              onChangeText={lecode =>
                this.changeState({name: 'lecode', val: lecode})
              }
            />
            <TextinputHeader
              tittle={'VA Toko'}
              value={sendData.lecode}
              keyboardType={'default'}
              placeholder={'VA Toko'}
              onChangeText={lecode =>
                this.changeState({name: 'lecode', val: lecode})
              }
            />
            <TextinputHeader
              tittle={'Nominal Tagihan'}
              value={sendData.lecode}
              keyboardType={'default'}
              placeholder={'Nominal Tagihan'}
              onChangeText={lecode =>
                this.changeState({name: 'lecode', val: lecode})
              }
            />
            <TextinputHeader
              tittle={'Nominal Tagihan'}
              value={sendData.lecode}
              keyboardType={'default'}
              placeholder={'Nominal Tagihan'}
              onChangeText={lecode =>
                this.changeState({name: 'lecode', val: lecode})
              }
            />
            <View style={Styles.margin} />
          </ScrollView>
        </View>
      </View>
    );
  }
}
