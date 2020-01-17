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
  textabsensi: {
    fontWeight: 'bold',
    fontSize: 15,
    color: Color.main.greyLineGood,
  },
  column: {
    flexDirection: 'column',
  },
  columnnominal: {
    marginLeft: width * 0.04,
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
  },
  columnstatus: {
    marginLeft: width * 0.05,
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
  },
  textabsensi2: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: Color.main.baseBlack,
  },
  linebody: {
    width: width * 0.9,
    height: height * 0.002,
    backgroundColor: Color.main.greyLineGood,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  },
  line: {
    width: width * 0.9,
    height: height * 0.002,
    backgroundColor: Color.main.greyLine,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  },
  imagestatus: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: width * 0.05,
    height: height * 0.025,
  },
});
