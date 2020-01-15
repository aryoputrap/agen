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
          <Icon name={'filter'} size={25} />
        </TouchableOpacity>
      </View>
    ),
  });

  constructor(props) {
    super(props);
    this.state = {
      screenType: {type: 'deviceScreen'},
    };
  }

  render() {
    let screenType = this.state.screenType.type;
    return (
      <View>
        <TouchableWithoutFeedback
          onPress={() => this.setState({screenType: {type: 'deviceScreen'}})}>
          {(() => {
            if (screenType === 'deviceScreen') {
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
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
