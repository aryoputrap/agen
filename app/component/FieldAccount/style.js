import {StyleSheet, Dimensions} from 'react-native';
import Color from '../../config/color';

const {height} = Dimensions.get('window');
export default StyleSheet.create({
  containerField: {
    flexDirection: 'column',
    top: 10,
  },
  barrier: {
    top: 5,
  },
  titleField: {
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
    marginTop: 10,
    marginBottom: 1,
  },
  fieldData: {
    height: height * 0.07,
    padding: 10,
    borderRadius: 0.5,
    borderColor: Color.main.greyLine,
    elevation: 2,
    flexDirection: 'row',
  },
});
