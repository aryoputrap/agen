import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../../../config/color';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle: {
    height: height * 0.08,
  },
  headerTitleStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  scroolview: {
    marginTop: 5,
    width: width * 0.9,
    height: height * 0.55,
  },
  textEdit: {
    color: Color.main.white,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  tokodetail: {
    width: width * 0.27,
    height: height * 0.15,
    marginTop: 20,
    resizeMode: 'stretch',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  editBottom: {
    backgroundColor: Color.main.blueAkun,
    borderRadius: 10,
    width: width * 0.3,
    height: height * 0.05,
    justifyContent: 'center',
  },
  nomorakun: {
    fontWeight: 'bold',
  },
  nomorakun2: {
    fontSize: 15,
    fontWeight: '100',
  },
  alamat: {
    flexDirection: 'column',
  },
  textHeader: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
  },
  buttonDropdown: {
    flexDirection: 'row',
    width: width,
    height: '100%',
  },
  noakun: {
    width: width * 0.95,
    marginLeft: 20,
  },
  buttonEdit: {
    marginLeft: width * 0.06,
  },
  mainBodyakun: {
    flexDirection: 'row',
  },
  mainBody: {
    flexDirection: 'row',
  },
  bodyakun: {
    marginTop: 5,
    flexDirection: 'column',
  },
  bodyakun2: {
    marginTop: 5,
    marginLeft: width * 0.15,
    flexDirection: 'column',
  },
  texttittle: {
    color: Color.main.greyLine,
    fontSize: 14,
    marginTop: 10,
  },
  texttittle2: {
    color: Color.main.baseBlack,
    fontSize: 13,
  },
  line: {
    width: width * 0.95,
    height: height * 0.001,
    backgroundColor: Color.main.baseBlack,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  },
  pilihdata: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pilihdata2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  pilihdataBackend: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pilihdatatexttanggal: {
    width: width * 0.17,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  pilihdatatextnama: {
    width: width * 0.2,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  pilihdatatextlecode: {
    width: width * 0.22,
    right: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  texttitle: {
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
  textpilihdata: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
  },
  textpilihdataLecode: {
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    right: 15,
  },
  textpilihdataDisributor: {
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
    right: 10,
  },
  textpilihdatabulan: {
    fontSize: 11,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
  },
  TextInput: {
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  Button: {
    marginTop: 'auto',
    marginBottom: 100,
  },
});
