import {Dimensions} from 'react-native';

export default {
  screen: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    // paddingHorizontal: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  text: {
    xl: {
      size: 40,
      line: 40,
    },
    l: {
      size: 26,
      line: 8,
    },
    m: {
      size: 18,
      line: 2,
    },
    s: {
      size: 14,
      line: 2,
    },
    ss: {
      size: 12,
      line: 14,
    },
  },
  fontFamily: 'Montserrat-Medium',
};
