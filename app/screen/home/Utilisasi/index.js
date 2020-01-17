import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Styles from './style';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import PPOB from './PPOB';
import Danapandai from './Danapandai';

export default class info extends Component {
  static navigationOptions = () => ({
    title: 'Utilisasi',
    headerTransparent: false,
    headerTitleStyle: Styles.headerTitleStyle,
    headerStyle: Styles.headerStyle,
    headerRight: (
      <View style={Styles.headericon}>
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
      return <PPOB />;
    } else if (this.state.screenType.type === 'KunjunganScreen') {
      return (
        <Danapandai
          onPress={() => this.props.navigation.navigate('DetailKunjungan')}
        />
      );
    }
  }

  render() {
    let screenType = this.state.screenType.type;
    return (
      <View>
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
                      <Text style={Styles.textButtonmain}>PPOB</Text>
                    </View>
                  );
                } else {
                  return (
                    <View style={Styles.buttonLaporan}>
                      <Text style={Styles.textButton}>PPOB</Text>
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
                      <Text style={Styles.textButtonmain}>Dana Pandai</Text>
                    </View>
                  );
                } else {
                  return (
                    <View style={Styles.buttonLaporan}>
                      <Text style={Styles.textButton}>Dana Pandai</Text>
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
