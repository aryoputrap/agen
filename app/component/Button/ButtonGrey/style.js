import {StyleSheet, Dimensions} from 'react-native';
import Color from '../../../config/color';

const {height} = Dimensions.get('window');
export default StyleSheet.create({
  btnField: {
    height: height * 0.06,
    backgroundColor: Color.main.greyBright,
    marginTop: 5,
    marginBottom: 10,
    justifyContent: 'center',
    borderRadius: 5,
    opacity: 1,
  },
  textData: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    alignSelf: 'center',
    color: Color.main.white,
  },
});
