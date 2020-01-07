import {Dimensions} from 'react-native';
import Color from '../../config/color';

const {width, height} = Dimensions.get('window');
export default {
  error: {
    color: Color.main.red,
    fontSize: 12,
  },
  errorMassage: {
    color: 'red',
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 13,
    marginBottom: 15,
  },
  droppicker: {
    borderRadius: 1,
    borderColor: Color.main.greyLine,
    elevation: 2,
  },
  dropStyle: {
    dropdown1: {
      width: width * 0.9,
      height: height * 0.17,
      borderColor: 'cornflowerblue',
      borderWidth: 2,
      borderRadius: 3,
    },
    dropdown2: {
      width: width * 0.9,
      height: height * 0.12,
      borderColor: 'cornflowerblue',
      borderWidth: 2,
      borderRadius: 3,
    },
    dropdown3: {
      width: width * 0.9,
      height: height * 0.3,
      borderColor: 'cornflowerblue',
      borderWidth: 2,
      borderRadius: 3,
    },
  },
  container: {
    flex: 1,
    marginTop: height * 0.001,
    width: width,
    height: height,
  },
  containPading: {
    padding: 15,
  },
  buttonDropdown: {
    flexDirection: 'row',
    width: width,
    height: '100%',
  },
  dropdownStyle: {
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginVertical: height * 0.01,
    width: width * 0.87,
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
  fotoSemua: {
    flexDirection: 'column',
  },
  fotoSudahinstall: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  fotoArea: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  TextInput: {
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  TextFoto: {
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
    alignSelf: 'center',
  },
  fotoData: {
    width: width * 0.25,
    height: height * 0.13,
    padding: 15,
    resizeMode: 'stretch',
  },
  dropdown: {
    height: height * 0.07,
    padding: 10,
    borderRadius: 1,
    borderColor: Color.main.greyLine,
    elevation: 2,
    flexDirection: 'row',
  },
  rowViewContainer: {
    fontSize: 12,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  listView: {
    height: height * 0.6,
    width: width,
    backgroundColor: '#000',
  },
  viewFoto: {
    flexDirection: 'column',
    padding: 15,
  },
};
