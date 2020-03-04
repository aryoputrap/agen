import {StyleSheet, Dimensions} from 'react-native';
import Color from '../../config/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  containerField: {
    flexDirection: 'column',
  },
  barrier: {
    marginTop: hp((height / height) * 0.8),
    borderWidth: 2,
    borderRadius: 10,
    width: wp(width * 0.2),
    borderColor: Color.main.greyLineGood,
  },
  titleField: {
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
    marginTop: 10,
    marginBottom: 1,
    elevation: 0.5,
  },
  fieldData: {
    padding: 15,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
