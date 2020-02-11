// import {Dimensions, Platform} from 'react-native';
// import ExtraDimensions from 'react-native-extra-dimensions-android';
import Color from '../../../config/color';

// const width = Dimensions.get('window').width;
// const height =
//   Platform.OS === 'android'
//     ? Dimensions.get('window').height
//     : ExtraDimensions.get('REAL_WINDOW_HEIGHT');
export default {
  error: {
    color: Color.main.red,
    fontSize: 12,
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
};
