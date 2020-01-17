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
  marginProduk: {
    marginLeft: 10,
  },
  titleAbsensi: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    fontSize: 15,
  },
  titleStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 15,
  },
  textabsensi: {
    fontWeight: 'bold',
    fontSize: 15,
    color: Color.main.greyLineGood,
  },
  textabsensi2: {
    fontWeight: 'bold',
    fontSize: 14,
    color: Color.main.baseBlack,
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
});
