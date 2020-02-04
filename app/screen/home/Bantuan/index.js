/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Alert,
  SafeAreaView,
  LayoutAnimation,
  StatusBar,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './style';

class Expandable_ListView extends Component {
  constructor() {
    super();
    this.state = {
      layout_Height: 0,
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.item.expanded) {
      this.setState(() => {
        return {
          layout_Height: null,
        };
      });
    } else {
      this.setState(() => {
        return {
          layout_Height: 0,
        };
      });
    }
  }

  shouldComponentUpdate(_nextProps, nextState) {
    if (this.state.layout_Height !== nextState.layout_Height) {
      return true;
    }
    return false;
  }

  show_Selected_Category = item => {
    // Write your code here which you want to execute on sub category selection.
    Alert.alert(item);
  };
  render() {
    return (
      <SafeAreaView>
        <StatusBar hidden={true} />
        <View style={styles.Panel_Holder}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.props.onClickFunction}
            style={styles.category_View}>
            <Text style={styles.category_Text}>
              {this.props.item.category_Name}{' '}
            </Text>
            <Icon
              name={'chevron-right'}
              size={18}
              color={'grey'}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
          <View style={{height: this.state.layout_Height, overflow: 'hidden'}}>
            {this.props.item.sub_Category.map((item, key) => (
              <TouchableOpacity
                key={key}
                style={styles.sub_Category_Text}
                onPress={this.show_Selected_Category.bind(this, item.name)}>
                <View style={styles.sub_Category_VievTextIcon}>
                  <Text style={styles.colorText}>{item.name}</Text>
                  <Icon
                    name={'chevron-right'}
                    size={18}
                    color={'grey'}
                    style={styles.iconStyle}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export default class App extends Component {
  static navigationOptions = () => ({
    title: 'Bantuan',
    headerTransparent: false,
    headerTitleStyle: styles.headerTitleStyle,
  });
  constructor() {
    super();
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    const array = [
      {
        expanded: false,
        category_Name: 'Script',
        sub_Category: [
          {id: 1, name: 'Opening'},
          {id: 2, name: 'Handle Objection'},
          {id: 3, name: 'Produk'},
        ],
      },
      {
        expanded: false,
        category_Name: 'Cara Pakai Aplikasi',
        sub_Category: [
          {id: 4, name: 'Aplikasi Toko'},
          {id: 5, name: 'Aplikasi Agen'},
          {id: 6, name: 'Absensi'},
          {id: 7, name: 'Input Data'},
        ],
      },
    ];
    this.state = {
      AccordionData: [...array],
    };
  }

  update_Layout = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...this.state.AccordionData];
    array[index].expanded = !array[index].expanded;
    this.setState(() => {
      return {
        AccordionData: array,
      };
    });
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.MainContainer}>
        <ScrollView contentContainerStyle={styles.ScrollView}>
          <View>
            <TouchableOpacity
              style={styles.sub_CategoryTunggal}
              onPress={() => navigate('CaraRequestOTP')}>
              <View style={styles.sub_Category_VievTextIcon}>
                <Text style={styles.colorText}> Cara Request OTP Toko</Text>
                <Icon
                  name={'chevron-right'}
                  size={18}
                  color={'grey'}
                  style={styles.iconStyleSinggle}
                />
              </View>
              <View style={styles.line} />
            </TouchableOpacity>
          </View>
          {this.state.AccordionData.map((item, key) => (
            <Expandable_ListView
              key={item.category_Name}
              onClickFunction={this.update_Layout.bind(this, key)}
              item={item}
            />
          ))}
          <View>
            <TouchableOpacity
              style={styles.sub_CategoryTunggal}
              onPress={() => navigate('CaraDaftarMaster')}>
              <View style={styles.sub_Category_VievTextIcon}>
                <Text style={styles.colorText}> Cara Daftar Master Outlet</Text>
                <Icon
                  name={'chevron-right'}
                  size={18}
                  color={'grey'}
                  style={styles.iconStyleSinggle}
                />
              </View>
              <View style={styles.line} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.sub_CategoryTunggal}
              onPress={() => navigate('CaraDaftarDistributor')}>
              <View style={styles.sub_Category_VievTextIcon}>
                <Text style={styles.colorText}> Cara Daftar Distributor</Text>
                <Icon
                  name={'chevron-right'}
                  size={18}
                  color={'grey'}
                  style={styles.iconStyleSinggle}
                />
              </View>
              <View style={styles.line} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
