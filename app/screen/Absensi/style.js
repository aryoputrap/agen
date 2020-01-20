import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../config/color';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  tombolCard: {
    alignContent: 'center',
    textAlign: 'center',
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
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  textAddress: {
    fontFamily: 'Montserrat-Medium',
    color: 'green',
    fontSize: 14,
  },
  preview: {
    height: height * 0.7,
    width,
  },
  capture: {
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    borderRadius: 100,
    alignSelf: 'center',
  },
  textAbsen: {
    justifyContent: 'center',
    fontSize: 14,
    textAlign: 'center',
  },
  buttonCamera: {
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
    color: Color.main.greyText,
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
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
    padding: 15,
    resizeMode: 'stretch',
  },
  Button: {
    width: width * 0.9,
    height: height * 0.08,
    alignSelf: 'center',
    top: 230,
  },
});
