import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../../../config/color';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    width: width * 0.95,
    height: height,
    padding: 10,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  produk: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  titleUtilbod: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: width * 0.04,
    width: width * 0.8,
  },
  titleUtil: {
    flexDirection: 'row',
    width: width * 0.55,
    marginLeft: width * 0.05,
    justifyContent: 'space-between',
  },
  titleAbsensi: {
    flexDirection: 'row',
    fontSize: 15,
  },
  titleproduk: {
    alignSelf: 'center',
    width: width * 0.3,
  },
  titleStatus: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    fontSize: 15,
  },
  textabsensi: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13,
    color: Color.main.greyLineGood,
  },
  textabsensiU: {
    fontWeight: 'bold',
    fontSize: 13,
    color: Color.main.greyLineGood,
  },
  textBody: {
    fontWeight: 'bold',
    fontSize: 13,
    color: Color.main.baseBlack,
    alignSelf: 'center',
  },
  textBody2: {
    fontWeight: 'normal',
    fontSize: 11,
    color: Color.main.baseBlack,
  },
  bodtext2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textabsensi2: {
    fontWeight: 'bold',
    fontSize: 12,
    color: Color.main.baseBlack,
    alignSelf: 'center',
  },
  produkBody: {
    flexDirection: 'row',
    width: width * 0.22,
  },
  linebody: {
    width: width * 0.9,
    height: height * 0.002,
    backgroundColor: Color.main.greyLineGood,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  },
  line: {
    width: width * 0.9,
    height: height * 0.002,
    backgroundColor: Color.main.greyLine,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  },
  total: {
    alignSelf: 'center',
    backgroundColor: Color.main.blueAkun,
    marginTop: 'auto',
    marginBottom: height * 0.2,
    width: width * 0.9,
    height: height * 0.1,
    justifyContent: 'center',
    borderRadius: 10,
  },
  totaltext: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: width * 0.9,
  },
  totalNumber: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  totalText: {
    color: Color.main.white,
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
  },
  totalTrasaction: {
    fontFamily: 'Montserrat-Bold',
    color: Color.main.white,
    marginLeft: width * 0.1,
    marginRight: width * 0.1,
    fontSize: 14,
  },
  totalNominal: {
    fontFamily: 'Montserrat-Bold',
    color: Color.main.white,
    fontSize: 14,
  },
  row: {
    left: 10,
  },
});
