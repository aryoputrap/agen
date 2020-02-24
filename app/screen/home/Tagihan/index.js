import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import Styles from './style';
import Faktur from './Faktur';
import Tagihan from './Tagihan';

export default class info extends Component {
  static navigationOptions = () => ({
    title: 'Tagihan',
    headerTransparent: false,
    headerTitleStyle: Styles.headerTitleStyle,
    headerStyle: Styles.headerStyle,
  });

  constructor(props) {
    super(props);
    this.state = {
      screenType: {type: 'absenScreen'},
    };
  }

  renderLaporan() {
    if (this.state.screenType.type === 'absenScreen') {
      return <Faktur />;
    } else if (this.state.screenType.type === 'KunjunganScreen') {
      return (
        <Tagihan
          onPress={() => this.props.navigation.navigate('DetailKunjungan')}
        />
      );
    }
  }

  render() {
    let screenType = this.state.screenType.type;
    return (
      <View>
        <StatusBar hidden={true} />
        <ScrollView horizontal={true} style={Styles.Scroll}>
          <View style={Styles.titlelaporanAbsensi}>
            <TouchableOpacity
              onPress={() =>
                this.setState({screenType: {type: 'absenScreen'}})
              }>
              {(() => {
                if (screenType === 'absenScreen') {
                  return (
                    <View style={Styles.buttonLaporanmain}>
                      <Text style={Styles.textButtonmain}>Faktur</Text>
                    </View>
                  );
                } else {
                  return (
                    <View style={Styles.buttonLaporan}>
                      <Text style={Styles.textButton}>Faktur</Text>
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
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View>{this.renderLaporan()}</View>
      </View>
    );
  }
}
