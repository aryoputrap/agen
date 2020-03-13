import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../../config/color';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    width: width * 0.95,
    height: height * 0.85,
    padding: 5,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  modal: {
    width: width * 0.5,
    height: height * 0.02,
  },
  imagemodal: {
    alignSelf: 'center',
    margin: 10,
  },
  textmodal: {
    alignSelf: 'center',
    fontFamily: 'Montserrat-Medium',
    marginHorizontal: 30,
  },
  inputtf: {
    width: width * 0.7,
  },
  codepin: {
    width: width * 0.05,
    alignSelf: 'center',
  },
  buttonmodal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: 10,
    margin: 10,
  },
  modalview: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    height,
    width,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  mondalin: {
    backgroundColor: Color.main.white,
    height: height * 0.3,
    width: width * 0.8,
    alignSelf: 'center',
    justifyContent: 'center',
    // marginTop: height * 0.25,
    borderRadius: 10,
  },
  buttonLaporanmain: {
    borderColor: Color.main.blueAkun,
    borderWidth: 2,
    alignSelf: 'center',
    width: width * 0.33,
    height: height * 0.05,
    borderRadius: 5,
    justifyContent: 'center',
    marginHorizontal: 7,
  },
  textButtonmain: {
    fontFamily: 'Montserrat-Bold',
    color: Color.main.blueAkun,
    textAlign: 'center',
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
    width: width * 0.75,
    marginBottom: 20,
    marginTop: 'auto',
    alignSelf: 'center',
  },
  parentTotal: {
    flexDirection: 'row',
  },
  parentTotaltf: {
    flexDirection: 'column',
  },
  total: {
    flexDirection: 'column',
    marginTop: height * 0.05,
    marginLeft: width * 0.14,
  },
  totalTrans: {
    flexDirection: 'column',
    marginTop: height * 0.04,
    marginLeft: width * 0.1,
  },
  totaltextMoney: {
    // marginLeft: width * 0.05,
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 5,
  },
  totaltextMoneytf: {
    // marginLeft: width * 0.05,
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: 15,
  },
  totalMoney: {
    flexDirection: 'column',
    width: width * 0.5,
    marginTop: height * 0.05,
    marginLeft: width * 0.1,
    borderBottomWidth: 1,
    margin: 5,
  },
  totalMoneytransfer: {
    flexDirection: 'column',
    borderRadius: 10,
    width: width * 0.75,
    marginTop: height * 0.02,
    marginLeft: width * 0.1,
    borderWidth: 1,
    margin: 5,
  },
  inputview: {
    flexDirection: 'column',
    borderRadius: 10,
    width: width * 0.75,
    marginTop: height * 0.005,
    marginLeft: width * 0.1,
    borderWidth: 1,
    margin: 5,
  },
  totalTransinput: {
    flexDirection: 'column',
    width: width * 0.75,
    marginTop: height * 0.01,
    marginLeft: width * 0.1,
    margin: 5,
  },
});
