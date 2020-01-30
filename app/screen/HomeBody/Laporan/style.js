import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../../config/color';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    width: width * 0.9,
    height: height,
    padding: 5,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  header: {
    backgroundColor: Color.main.white,
  },
  tittle: {
    color: Color.main.baseBlack,
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    justifyContent: 'center',
  },
  reset: {
    color: Color.main.baseBlack,
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    justifyContent: 'center',
    marginRight: 10,
  },
  droppicker: {
    borderRadius: 1,
    borderColor: Color.main.greyLine,
    elevation: 2,
  },
  TextInput: {
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    marginTop: 'auto',
    marginBottom: 100,
  },
  Scroll: {
    width: width * 0.95,
    padding: 5,
    paddingRight: 100,
  },
  headericon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight: 5,
  },
  buttonheader: {
    justifyContent: 'space-between',
    marginVertical: 10,
    marginLeft: 15,
    marginRight: 10,
  },
  icon: {
    marginRight: 10,
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
  errorMassage: {
    color: 'red',
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 13,
    marginBottom: 15,
  },
  titlelaporanAbsensi: {
    flexDirection: 'row',
  },
  buttonLaporanmain: {
    backgroundColor: Color.main.blueAkun,
    width: width * 0.25,
    height: height * 0.05,
    borderRadius: 5,
    justifyContent: 'center',
    margin: 10,
  },
  buttonLaporan: {
    borderWidth: 2,
    borderColor: Color.main.blueAkun,
    width: width * 0.25,
    height: height * 0.05,
    borderRadius: 5,
    justifyContent: 'center',
    margin: 10,
  },
  textButtonmain: {
    fontFamily: 'Monserrat-Medium',
    color: Color.main.white,
    textAlign: 'center',
  },
  textButton: {
    fontFamily: 'Monserrat-Medium',
    color: Color.main.blueAkun,
    textAlign: 'center',
  },
  buttonmodal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonyes: {
    width: width * 0.32,
  },
  buttonno: {
    width: width * 0.32,
  },
});
