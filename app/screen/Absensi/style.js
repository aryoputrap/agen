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
    elevation: 3,
  },
  cardAbsen: {
    width: width * 0.17,
    height: height * 0.1,
    borderRadius: 10,
    alignContent: 'center',
    alignItems: 'center',
    elevation: 4,
    // backgroundColor: '#00B1FF',
    justifyContent: 'center',
    marginLeft: 20,
  },
  absenHarini: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Bold',
    alignSelf: 'center',
  },
  absenTanggal: {
    color: Color.main.greyText,
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    alignSelf: 'center',
  },
  bodyAbsen: {
    top: 20,
    flexDirection: 'row',
    marginLeft: 10,
    width: width * 0.9,
    height: height * 0.25,
  },
  absenTanggalMasukKeluar: {
    color: Color.main.texttColor,
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    alignSelf: 'center',
  },
  LineFitur: {
    marginTop: 15,
    backgroundColor: Color.main.greyLineGood,
    width: width * 0.9,
    height: height * 0.001,
    alignSelf: 'center',
  },
  textCard: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 8,
    color: Color.main.texttColor,
    // alignItems: 'center',
    // textAlign: 'center',
    // justifyContent: 'center',
  },
};
