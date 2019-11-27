import {Dimensions} from 'react-native';
import Color from '../../config/color';

const {width, height} = Dimensions.get('window');
export default {
  tombolCard: {
    width: width * 0.25,
    height: height * 0.15,
    alignContent: 'center',
    textAlign: 'center',
    opacity: 1,
  },
  cardAbsen: {
    width: width * 0.17,
    height: height * 0.1,
    borderRadius: 10,
    alignContent: 'center',
    alignItems: 'center',
    elevation: 2,
    // backgroundColor: '#00B1FF',
    justifyContent: 'center',
    marginLeft: 20,
  },
  textCard: {
    color: Color.main.baseBlack,
    textAlign: 'center',
    // alignItems: 'center',
    // textAlign: 'center',
    // justifyContent: 'center',
  },
};
