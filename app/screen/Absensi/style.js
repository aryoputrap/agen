import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../config/color';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  tombolCard: {
    alignContent: 'center',
    textAlign: 'center',
  },
  belumabsen: {
    marginTop: height * 0.2,
    padding: 8,
    justifyContent: 'center',
  },
  textbelumabsen: {
    fontSize: 15,
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    color: Color.main.greyLineGood,
  },
  bodyAbsenfoto: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  bodymapAddress: {
    flexDirection: 'row',
  },
  bodydateCamera: {
    flexDirection: 'row',
  },
  cameraview: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  address: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  bodyAddress: {
    marginTop: 40,
    width: width * 0.75,
    height: height * 0.08,
    justifyContent: 'center',
  },
  textAddress: {
    fontFamily: 'Montserrat-Medium',
    color: 'green',
    fontSize: 11,
  },
  preview: {
    height: height * 0.65,
    width,
  },
  capture: {
    shadowColor: 'grey',
    backgroundColor: 'red',
    width: 60,
    height: 60,
    borderRadius: 100,
    alignSelf: 'center',
  },
  textAbsen: {
    justifyContent: 'center',
    fontSize: 14,
    textAlign: 'center',
  },
  icon: {
    marginRight: 5,
  },
  iconBody: {
    flexDirection: 'row',
  },
  buttonCamera: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bodyAbsen: {
    top: 20,
    flexDirection: 'row',
    marginLeft: width * 0.1,
    height: height * 0.25,
  },
  headerStyle: {
    height: height * 0.08,
  },
  headerTitleStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  boxShadow: {
    width: width * 0.165,
    height: height * 0.11,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Color.main.grey,
    backgroundColor: Color.main.white,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    borderWidth: 0.3,
    borderRadius: 10,
    elevation: 2,
  },
  textCard: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 11,
    color: Color.main.texttColor,
    top: 5,
  },
  textabsenHarini: {
    marginTop: height * 0.01,
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Bold',
    alignSelf: 'center',
  },
  bodyabsenTanggal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: height * 0.03,
  },
  bodyDate2: {
    flexDirection: 'column',
  },
  absenTanggal: {
    color: Color.main.greyLineGood,
    fontSize: 15,
    fontFamily: 'Montserrat-Bold',
    alignSelf: 'center',
  },
  absentgl: {
    color: Color.main.texttColor,
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    alignSelf: 'center',
  },
  absenTanggalMasukKeluar: {
    color: Color.main.texttColor,
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
    alignSelf: 'center',
  },
  LineFiturFull: {
    backgroundColor: Color.main.greyLineGood,
    width: width,
    height: height * 0.001,
    alignSelf: 'center',
  },
  LineFitur: {
    backgroundColor: Color.main.greyLineGood,
    width: width * 0.9,
    height: height * 0.001,
    alignSelf: 'center',
    top: 10,
    marginBottom: 5,
  },
  date: {
    flexDirection: 'column',
    width: width * 0.9,
    height: height,
    alignSelf: 'center',
  },
  fotoData: {
    width: width * 0.125,
    height: height * 0.07,
    marginLeft: 10,
    padding: 15,
    resizeMode: 'stretch',
  },
});
