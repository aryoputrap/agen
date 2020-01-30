import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  StatusBar,
} from 'react-native';
import {Header, Left, Body, Right, Title} from 'native-base';
import Styles from './style';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Icon2 from 'react-native-vector-icons/dist/FontAwesome';
import Icon3 from 'react-native-vector-icons/dist/Entypo';
import {SCLAlert, SCLAlertButton} from 'react-native-scl-alert';

import LaporanAbsensi from './Absensi';
import LaporanKunjungan from './Kunjungan';
import LaporanIsisaldo from './IsiSaldo';
import LaporanTagihan from './Tagihan';

export default class info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenType: {type: 'absenScreen'},
      download: false,
    };
  }

  renderLaporan() {
    if (this.state.screenType.type === 'absenScreen') {
      return <LaporanAbsensi />;
    } else if (this.state.screenType.type === 'KunjunganScreen') {
      return (
        <LaporanKunjungan
          onPress={() => this.props.navigation.navigate('DetailKunjungan')}
        />
      );
    } else if (this.state.screenType.type === 'IsisaldoScreen') {
      return <LaporanIsisaldo />;
    } else if (this.state.screenType.type === 'TagihanScreen') {
      return <LaporanTagihan />;
    }
  }

  handleOpendownload = () => {
    this.setState({download: true});
  };
  handleOpen = () => {
    this.setState({download: false});
  };
  handleClose = () => {
    this.setState({download: false});
  };

  render() {
    let screenType = this.state.screenType.type;
    const {navigate} = this.props.navigation;
    return (
      <View>
        <StatusBar backgroundColor="transparent" />
        <Header style={Styles.header}>
          <Left>
            <TouchableOpacity
              style={Styles.header}
              onPress={() => navigate('StackPublic')}>
              <Icon name="arrowleft" color="black" size={25} />
            </TouchableOpacity>
          </Left>
          <Body>
            <Title style={Styles.tittle}>Laporan</Title>
          </Body>
          <Right>
            <View style={Styles.headericon}>
              <TouchableOpacity
                style={Styles.buttonheader}
                onPress={this.handleOpendownload}>
                <Icon2 name={'download'} size={25} />
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.buttonheader}
                onPress={() => this.props.navigation.navigate('Filter')}>
                <Icon2 name={'filter'} size={25} style={Styles.icon} />
              </TouchableOpacity>
            </View>
          </Right>
        </Header>
        <View>
          <SCLAlert
            show={this.state.download}
            onRequestClose={this.handleClose}
            theme="info"
            title="Informasi"
            subtitle="Apakah anda mau unduh."
            subtitle2="Laporan Absensi Bulan Februari?"
            headerIconComponent={
              <Icon3 name="download" size={50} color="white" />
            }>
            <View style={Styles.buttonmodal}>
              <View style={Styles.buttonyes}>
                <SCLAlertButton
                  theme="info"
                  onPress={this.handleClose}
                  style={Styles.buttonyes}>
                  YA
                </SCLAlertButton>
              </View>
              <View style={Styles.buttonyes}>
                <SCLAlertButton
                  theme="default"
                  onPress={this.handleClose}
                  style={Styles.buttonyes}>
                  TIDAK
                </SCLAlertButton>
              </View>
            </View>
          </SCLAlert>
        </View>
        <ScrollView horizontal={true} style={Styles.Scroll}>
          <View style={Styles.titlelaporanAbsensi}>
            <View style={Styles.titlelaporanAbsensi}>
              <TouchableOpacity
                onPress={() =>
                  this.setState({screenType: {type: 'absenScreen'}})
                }>
                {(() => {
                  if (screenType === 'absenScreen') {
                    return (
                      <View style={Styles.buttonLaporanmain}>
                        <Text style={Styles.textButtonmain}>Absensi</Text>
                      </View>
                    );
                  } else {
                    return (
                      <View style={Styles.buttonLaporan}>
                        <Text style={Styles.textButton}>Absensi</Text>
                      </View>
                    );
                  }
                })()}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.setState({screenType: {type: 'KunjunganScreen'}})
                }>
                {(() => {
                  if (screenType === 'KunjunganScreen') {
                    return (
                      <View style={Styles.buttonLaporanmain}>
                        <Text style={Styles.textButtonmain}>Kunjungan</Text>
                      </View>
                    );
                  } else {
                    return (
                      <View style={Styles.buttonLaporan}>
                        <Text style={Styles.textButton}>Kunjungan</Text>
                      </View>
                    );
                  }
                })()}
              </TouchableOpacity>
              <TouchableWithoutFeedback
                onPress={() =>
                  this.setState({screenType: {type: 'IsisaldoScreen'}})
                }>
                {(() => {
                  if (screenType === 'IsisaldoScreen') {
                    return (
                      <View style={Styles.buttonLaporanmain}>
                        <Text style={Styles.textButtonmain}>Isi Saldo</Text>
                      </View>
                    );
                  } else {
                    return (
                      <View style={Styles.buttonLaporan}>
                        <Text style={Styles.textButton}>Isi Saldo</Text>
                      </View>
                    );
                  }
                })()}
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() =>
                  this.setState({screenType: {type: 'TagihanScreen'}})
                }>
                {(() => {
                  if (screenType === 'TagihanScreen') {
                    return (
                      <View style={Styles.buttonLaporanmain}>
                        <Text style={Styles.textButtonmain}>Tagihan</Text>
                      </View>
                    );
                  } else {
                    return (
                      <View style={Styles.buttonLaporan}>
                        <Text style={Styles.textButton}>Tagihan</Text>
                      </View>
                    );
                  }
                })()}
              </TouchableWithoutFeedback>
            </View>
          </View>
        </ScrollView>
        <View>{this.renderLaporan()}</View>
      </View>
    );
  }
}
