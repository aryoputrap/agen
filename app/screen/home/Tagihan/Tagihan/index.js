import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Styles from '../style';
import TextinputHeader from '../../../../component/TextInput/TextinputHeader';
import Buttonsub from '../../../../component/Button/Buttongreen';
import Dropdown2 from '../../../../component/Dropdown/Droptype2';

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
        tagihan: '',
      },
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
          <View style={Styles.bodyimage}>
            <Image
              style={Styles.imagetagihan}
              source={require('../../../../asset/images/icon/tagihan.png')}
            />
            <Text style={Styles.texttagihan}>
              Tolong di Input ya, Sebagai Produktivitas Kamu!
            </Text>
          </View>

          <Text>Daftar faktur yang kamu tagih hari ini :</Text>
          <Dropdown2
            title={'Tagihan'}
            data={sendData.tagihan}
            label={'Pilih Jenis Tagihan'}
            onChange={this.changeKost}
          />
          <TextinputHeader
            tittle={'Nomor Invoice'}
            value={sendData.faktur2}
            keyboardType={'numeric'}
            placeholder={'Masukan Nomor Invoice'}
            onChangeText={faktur2 =>
              this.changeState({name: 'faktur2', val: faktur2})
            }
          />
          <TextinputHeader
            tittle={'Nomor DT CODE'}
            value={sendData.faktur3}
            keyboardType={'numeric'}
            placeholder={'Masukan Nomor DT CODE'}
            onChangeText={faktur3 =>
              this.changeState({name: 'faktur3', val: faktur3})
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
