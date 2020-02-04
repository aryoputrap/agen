import {Dimensions} from 'react-native';
import Color from '../../config/color';

const {width, height} = Dimensions.get('window');
export default {
  container: {
    flex: 1,
    width: width,
    height: height,
    padding: 20,
  },
  marginLogin: {
    marginVertical: 20,
    padding: 25,
  },
  textLogin: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
  },
  Textinput: {
    width: width * 0.85,
    height: height * 0.055,
    fontSize: 15,
    borderBottomWidth: 1,
    borderColor: Color.main.greyLine,
  },
  Textinputpassword: {
    width: width * 0.75,
    height: height * 0.055,
    fontSize: 15,
  },
  button: {
    width: width * 0.88,
    height: height * 0.1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  headerTitleStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    paddingTop: 50,
    marginTop: 30,
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    color: Color.main.blueAkun,
  },
  TextInput: {
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  error: {
    color: Color.main.red,
    fontSize: 12,
  },
  errorMassage: {
    color: 'red',
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 13,
    marginBottom: 15,
  },
  LupaKataSandi: {
    marginLeft: width * 0.06,
    marginBottom: 10,
  },
  textLupaKataSandi: {
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
  },
  ataumasuk: {
    justifyContent: 'center',
    textAlign: 'center',
    paddingLeft: 5,
    paddingRight: 5,
  },
  lineMain: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    width: width * 0.88,
  },
  Line: {
    backgroundColor: 'gray',
    width: width * 0.27,
    height: height * 0.0015,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  viewBtn: {
    marginTop: 20,
  },
  textbtnOther: {
    color: Color.main.blueAkun,
    fontSize: 14,
    marginVertical: 5,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    fontFamily: 'Montserrat-Medium',
  },
  btnOther: {
    width: width * 0.88,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: Color.main.blueAkun,
    padding: 5,
    borderRadius: 10,
    marginVertical: 7,
  },
  Icon: {
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 20,
  },
  viewpassword: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: Color.main.greyLine,
  },
  BtnEye: {
    position: 'absolute',
    marginLeft: width * 0.77,
  },
};
