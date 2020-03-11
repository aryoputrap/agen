import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../../config/color';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    width: width * 0.95,
    height: height * 0.85,
    padding: 10,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  headerTitleStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  headerStyle: {
    height: height * 0.08,
  },
  TextInput: {
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  Button: {
    marginTop: 'auto',
    marginBottom: 100,
  },
  errorMassage: {
    color: 'red',
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 13,
    marginBottom: 15,
  },
  icon: {
    alignSelf: 'center',
    marginTop: height * 0.05,
  },
  textbody: {
    textAlign: 'center',
    marginTop: height * 0.05,
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
  },
  parentCheck: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: width * 0.005,
    marginRight: 10,
    // borderWidth: 1,
    // borderColor: 'black',
  },
  checkBox: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  cek: {
    color: 'red',
  },
  checkBoxtext: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  textChecked: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    alignItems: 'center',
  },
  textCheckedtotal: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    alignItems: 'center',
  },
  dana: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  textMoney: {
    marginLeft: width * 0.05,
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  textMoneydisable: {
    marginLeft: width * 0.05,
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    alignItems: 'center',
    flexWrap: 'wrap',
    color: Color.main.greyBright,
  },
  inputMoney: {
    width: width * 0.35,
    margin: width * 0.01,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: Color.main.blueAkun,
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  inputMoneyfalse: {
    width: width * 0.35,
    margin: width * 0.01,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: Color.main.greyBright,
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  btnIsi: {
    width: width * 0.8,
    marginBottom: 20,
    marginTop: 'auto',
    alignSelf: 'center',
  },
  parentTotal: {
    flexDirection: 'row',
  },
  total: {
    flexDirection: 'column',
    marginTop: height * 0.05,
    marginLeft: width * 0.14,
  },
  totaltextMoney: {
    // marginLeft: width * 0.05,
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 5,
  },
  totalMoney: {
    flexDirection: 'column',
    width: width * 0.4,
    marginTop: height * 0.05,
    marginLeft: width * 0.2,
    borderBottomWidth: 1,
    margin: 5,
  },
});
