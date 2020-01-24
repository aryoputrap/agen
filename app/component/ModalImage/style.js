import {Dimensions, Platform} from 'react-native';
import ExtraDimensions from 'react-native-extra-dimensions-android';
import Color from '../../config/color';

const width = Dimensions.get('window').width;
const height =
  Platform.OS === 'android'
    ? Dimensions.get('window').height
    : ExtraDimensions.get('REAL_WINDOW_HEIGHT');
export default {
  error: {
    color: Color.main.red,
    fontSize: 12,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    color: Color.main.baseBlack,
    fontSize: 14,
    marginVertical: 10,
  },
  modalSize: {
    width: width * 0.9,
    height: height * 0.325,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: Color.main.white,
  },
  imageModal: {
    position: 'absolute',
    width: width * 0.9,
    height: height * 0.8,
    resizeMode: 'stretch',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  errorMassage: {
    color: 'red',
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 13,
    marginBottom: 15,
  },
};
