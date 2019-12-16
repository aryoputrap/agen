import {Dimensions, StyleSheet, Platform} from 'react-native';
// import Color from '../../../config/color';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  headerTitleStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  headerStyle: {
    height: 120,
  },
  colorText: {
    color: 'grey',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'grey',
  },
  ScrollView: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  iconStyle: {
    width: width * 0.07,
    height: height * 0.03,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    alignItems: 'center',
  },
  iconStyleSinggle: {
    width: 30,
    height: 30,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    alignItems: 'center',
  },
  sub_Category_VievTextIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sub_Category_Text: {
    fontSize: 15,
    color: 'grey',
    padding: 10,
    marginLeft: 10,
  },
  sub_CategoryTunggal: {
    fontSize: 15,
    color: 'grey',
    paddingTop: 10,
    paddingBottom: 10,
  },
  category_Text: {
    textAlign: 'left',
    justifyContent: 'center',
    color: 'grey',
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    paddingTop: 10,
    paddingBottom: 10,
  },
  category_View: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingLeft: 4,
  },
  Btn: {
    padding: 10,
    backgroundColor: '#FF6F00',
  },
});
