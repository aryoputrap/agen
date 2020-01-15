import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../../../../config/color';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    width: width * 0.9,
    height: height,
    padding: 5,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  Scroll: {
    width: width * 0.95,
    padding: 5,
    paddingRight: 100,
  },
  headericon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight: 10,
  },
  buttonheader: {
    justifyContent: 'space-between',
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 20,
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
});
