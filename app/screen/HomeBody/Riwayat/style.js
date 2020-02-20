import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../../config/color';
// import Color from '../../../config/color';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    width: width * 0.9,
    height: height,
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
  tanggal: {
    marginTop: 10,
    marginLeft: width * 0.05,
  },
  mainbody: {
    width: width * 0.9,
    flexDirection: 'column',
  },
  body: {
    marginTop: 10,
    marginLeft: width * 0.05,
    flexDirection: 'row',
  },
  pin: {
    color: Color.main.baseBlack,
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
  },
  status: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  dana: {
    color: Color.main.blueAkun,
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
  },
  line: {
    width: width * 0.9,
    height: height * 0.001,
    backgroundColor: Color.main.greyLine,
    justifyContent: 'center',
    marginVertical: 10,
  },
  iconfoto: {
    position: 'absolute',
    marginTop: height * 0.02,
    marginLeft: width * 0.8,
    justifyContent: 'center',
  },
  icondetail: {
    alignSelf: 'center',
    padding: height * 0.07,
  },
  imgdetail: {
    alignSelf: 'center',
  },
  textDetail1: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
    paddingTop: 10,
  },
  detailtitle: {
    paddingLeft: width * 0.07,
    paddingBottom: 10,
  },
  detailtitlegrey: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: Color.main.greyLineGood,
  },
  textbold: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
  },
  textmedium: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
    width: width * 0.8,
  },
});
