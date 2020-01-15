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
  textabsensi2: {
    fontWeight: 'bold',
    fontSize: 14,
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
});
