import {Dimensions, StyleSheet} from 'react-native';
import Color from '../../../config/color';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    width: width * 0.92,
    height: height,
    padding: 5,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  containerx: {
    flex: 1,
    width: width * 0.93,
    marginBottom: height * 0.1,
    alignSelf: 'center',
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
  buttonDropdown: {
    flexDirection: 'row',
    width: width,
    height: '100%',
  },
  dropdown: {
    height: height * 0.07,
    padding: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
    borderColor: Color.main.greyLine,
    elevation: 2,
    flexDirection: 'row',
  },
  textlabel: {
    fontSize: 15,
  },
  dropdownStyle: {
    justifyContent: 'center',
    marginTop: 5,
    width: width * 0.85,
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
});
