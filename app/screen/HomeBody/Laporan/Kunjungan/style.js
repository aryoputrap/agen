import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../../../config/color';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    width: width * 0.9,
    height: height,
    padding: 10,
    flexDirection: 'column',
    alignSelf: 'center',
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
    width: width * 0.6,
    height: height * 0.1,
  },
  textstatusInstall: {
    fontFamily: 'Monserrat-Medium',
    fontSize: 14,
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
  textinstallStatus: {
    flexDirection: 'column',
    marginLeft: 10,
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
  textTotal: {
    fontFamily: 'Montserrat-Bold',
  },
});
