import {StyleSheet} from 'react-native';
import Color from '../../../config/color';

// const {height} = Dimensions.get('window');
export default StyleSheet.create({
  containerField: {
    flexDirection: 'column',
    marginTop: 10,
  },
  lineField: {
    borderBottomWidth: 0.7,
    borderBottomColor: Color.main.greyLine,
  },
  bantuan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
  },
  textBantuan: {
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    color: Color.main.blueAkun,
  },
  iconStyle: {
    justifyContent: 'center',
  },
});
