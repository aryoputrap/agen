import {Dimensions, StyleSheet} from 'react-native';
// import Color from '../../../config/color';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    width: width * 0.9,
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
    marginTop: height * 0.1,
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
    marginLeft: width * 0.05,
    marginRight: 10,
    // borderWidth: 1,
    // borderColor: 'black',
  },
  checkBox: {
    flexDirection: 'column',
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
  dana: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  textMoney: {
    marginLeft: width * 0.1,
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    alignItems: 'center',
  },
  btnIsi: {
    width: width * 0.8,
    marginTop: 'auto',
    alignSelf: 'center',
  },
});
