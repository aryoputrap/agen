import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../../config/color';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  headericon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonheader: {
    justifyContent: 'space-between',
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 15,
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
});
