import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../../config/color';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    width: width * 0.9,
    height: height,
    padding: 10,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  fieldContain: {
    height: height * 0.5,
    padding: 10,
    borderRadius: 0.5,
    borderColor: Color.main.greyLine,
    elevation: 2,
    flexDirection: 'row',
  },
  TextInput: {
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  Button: {
    marginTop: 'auto',
    marginBottom: 50,
  },
});
