import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../config/color';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    width: width * 0.9,
    height: height * 0.85,
    padding: 10,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  header: {
    backgroundColor: Color.main.white,
  },
  headericon: {
    marginLeft: 10,
  },
  title: {
    color: Color.main.baseBlack,
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    justifyContent: 'center',
  },
});
