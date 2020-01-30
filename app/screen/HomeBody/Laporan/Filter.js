import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import Styles from './style';
import {Header, Left, Body, Right, Title} from 'native-base';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Droptahun from '../../../component/Dropdown/droppicker/droptahun';
import Dropbulan from '../../../component/Dropdown/droppicker/dropbulan';
import Buttonx from '../../../component/Button/ButtonAkun';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sendData: {
        Tahun: '',
        Bulan: '',
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

  Reset = () => {
    this.setState({
      sendData: {
        Tahun: '',
        Bulan: '',
      },
    });
  };

  render() {
    const {sendData} = this.state;
    const {navigate} = this.props.navigation;
    return (
      <View>
        <StatusBar backgroundColor="transparent" />
        <Header style={Styles.header}>
          <Left>
            <TouchableOpacity
              style={Styles.header}
              onPress={() => navigate('Laporan')}>
              <Icon name="close" color="black" size={30} />
            </TouchableOpacity>
          </Left>
          <Body>
            <Title style={Styles.tittle}>Filter</Title>
          </Body>
          <Right>
            <TouchableOpacity onPress={this.Reset}>
              <Text style={Styles.reset}>Reset</Text>
            </TouchableOpacity>
          </Right>
        </Header>
        <View style={Styles.container}>
          <Text style={Styles.TextInput}>Distributor</Text>
          <Droptahun
            styles={Styles.droppicker}
            data={sendData.Tahun}
            onChange={this.changeKost}
          />
          <Text style={Styles.TextInput}>Bulan</Text>
          <Dropbulan
            styles={Styles.droppicker}
            data={sendData.Bulan}
            onChange={this.changeKost}
          />
          <View style={Styles.button}>
            <Buttonx textField={'Lihat Laporan'} />
          </View>
        </View>
      </View>
    );
  }
}
