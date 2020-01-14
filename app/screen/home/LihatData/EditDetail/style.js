import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../../../config/color';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
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
  },
  scroolview: {
    marginTop: 5,
    width: width * 0.9,
    height: height * 0.55,
  },
  textEdit: {
    color: Color.main.white,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  tokodetail: {
    width: width * 0.27,
    height: height * 0.15,
    marginTop: 20,
    resizeMode: 'stretch',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  editBottom: {
    backgroundColor: Color.main.blueAkun,
    borderRadius: 10,
    width: width * 0.3,
    height: height * 0.05,
    justifyContent: 'center',
  },
  nomorakun: {
    fontWeight: 'bold',
  },
  alamat: {
    flexDirection: 'column',
  },
  textHeader: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
  },
  Button: {
    marginTop: 'auto',
    marginBottom: 100,
  },
});
