import {Dimensions} from 'react-native';
import Color from '../../config/color';
// import Color from '../../config/color';

const {width, height} = Dimensions.get('window');
export default {
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  fotoArea: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  TextInput: {
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  TextFoto: {
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
    alignSelf: 'center',
  },
  fotoData: {
    width: width * 0.25,
    height: height * 0.15,
    padding: 15,
    resizeMode: 'stretch',
  },
  dropdown: {
    height: height * 0.07,
    padding: 10,
    borderRadius: 1,
    borderColor: Color.main.greyLine,
    elevation: 2,
  },
};
