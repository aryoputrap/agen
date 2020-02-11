import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../../config/color';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    width: width * 0.92,
    height: height,
    padding: 5,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  TextInput: {
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  textInput: {
    padding: 10,
    borderRadius: 1,
    borderColor: Color.main.greyLine,
    elevation: 2,
    fontSize: 16,
    borderTopRightRadius: 9,
    borderTopLeftRadius: 9,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
