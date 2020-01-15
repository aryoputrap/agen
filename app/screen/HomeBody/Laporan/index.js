import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Styles from './style';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import LaporanAbsensi from './Absensi';
import LaporanKunjungan from './Kunjungan';
import LaporanIsisaldo from './IsiSaldo';
import LaporanTagihan from './Tagihan';

export default class info extends Component {
  static navigationOptions = () => ({
    title: 'Laporan',
    headerTransparent: false,
    headerTitleStyle: Styles.headerTitleStyle,
    headerStyle: Styles.headerStyle,
    headerRight: (
      <View style={Styles.headericon}>
        <TouchableOpacity style={Styles.buttonheader}>
          <Icon name={'download'} size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={Styles.buttonheader}>
          <Icon name={'filter'} size={25} style={Styles.icon} />
        </TouchableOpacity>
      </View>
    ),
  });

  constructor(props) {
    super(props);
    this.state = {
      screenType: {type: 'absenScreen'},
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

  render() {
    let screenType = this.state.screenType.type;
    return (
      <View>
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
