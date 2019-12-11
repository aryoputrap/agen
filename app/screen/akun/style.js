import {StyleSheet, Dimensions} from 'react-native';
import Color from '../../config/color';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  scroolview: {
    height: height,
    marginTop: 10,
    marginBottom: 52,
  },
  namaAkun: {
    fontSize: 23,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
  },
  nomorVA: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
  },
  boardAccount: {
    height: height * 0.2,
    width: width * 0.8,
    padding: 10,
    borderWidth: 2,
    borderColor: Color.main.blueAkun,
    alignSelf: 'center',
    justifyContent: 'center',
    // elevation: 2,
    borderRadius: 10,
  },
  tentangSaya: {
    fontSize: 14,
    color: Color.main.blueAkun,
    fontFamily: 'Montserrat-Bold',
  },
  ubahtentangSaya: {
    fontSize: 11,
    color: Color.main.baseBlack,
    fontFamily: 'Montserrat-Medium',
    justifyContent: 'center',
    marginLeft: 150,
  },
  titleField: {
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
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
