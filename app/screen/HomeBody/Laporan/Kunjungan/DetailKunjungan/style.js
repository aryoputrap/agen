import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../../../../config/color';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    width: width * 0.95,
    height: height * 0.8,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  bodycolum: {
    flexDirection: 'column',
    marginTop: 15,
  },
  titleAbsensi: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    fontSize: 15,
  },
  linebody: {
    width: width * 0.95,
    height: height * 0.001,
    backgroundColor: Color.main.baseBlack,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  },
  line: {
    width: width * 0.95,
    height: height * 0.001,
    backgroundColor: Color.main.greyLine,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  lineHorizontal: {
    width: width * 0.005,
    height: height * 0.1,
    backgroundColor: Color.main.greyLine,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  bodyKunjungan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.55,
    height: height * 0.1,
  },
  toko: {
    flex: 1,
    fontFamily: 'Montserrat-Bold',
    fontSize: 13,
  },
  textstatusInstall: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
  },
  dateVisit: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    marginRight: 10,
  },
  date: {
    fontSize: 14,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
  },
  date2: {
    fontSize: 14,
    justifyContent: 'center',
    textAlign: 'center',
  },
  textinstallStatus: {
    flexDirection: 'column',
  },
  btnDetail: {
    width: width * 0.45,
    height: height * 0.05,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: Color.main.blueAkun,
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonView: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  textDetail: {
    color: Color.main.blueAkun,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
