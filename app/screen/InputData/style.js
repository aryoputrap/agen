import {Dimensions} from 'react-native';
import Color from '../../config/color';

const {width, height} = Dimensions.get('window');
export default {
  error: {
    color: Color.main.red,
    fontSize: 12,
  },
  buttonText: {
    color: 'blue',
    marginBottom: 20,
    fontSize: 20,
  },
  textInput: {
    padding: 15,
    borderRadius: 1,
    borderColor: Color.main.greyLine,
    elevation: 2,
  },
  textFont: {
    fontSize: 16,
  },
  cameraFoto: {
    flex: 1,
    backgroundColor: 'black',
  },
  cameraBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  cameraCapture: {
    borderWidth: 5,
    borderColor: Color.main.greyLine,
    borderStartColor: 'blue',
    backgroundColor: Color.main.red,
    width: 60,
    height: 60,
    borderRadius: 100,
    alignSelf: 'center',
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
    borderTopRightRadius: 9,
    borderTopLeftRadius: 9,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
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
  lecode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputlecode: {
    width: width * 0.76,
  },
  buttonlecode: {
    width: width * 0.15,
    backgroundColor: Color.main.blueAkun,
    borderRadius: 10,
    justifyContent: 'center',
  },
  icon: {
    justifyContent: 'center',
    alignSelf: 'center',
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
  preview: {
    height,
    width,
  },
  previewktp: {
    height,
    width,
  },
  previewkit: {
    height: height * 0.1,
    width,
  },
  viewFoto: {
    flexDirection: 'column',
    padding: 15,
  },
  buttonCamera: {
    marginTop: height * 0.05,
    shadowColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonCameraktp: {
    height: height * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 'auto',
    marginBottom: height * 0.05,
  },
  iconfoto: {
    justifyContent: 'center',
    marginTop: 10,
  },
  capture: {
    borderWidth: 5,
    borderColor: Color.main.greyLine,
    borderStartColor: 'blue',
    backgroundColor: Color.main.red,
    width: 60,
    height: 60,
    borderRadius: 100,
    alignSelf: 'center',
  },
  capturektp: {
    marginTop: 10,
    borderWidth: 5,
    borderColor: Color.main.greyLine,
    backgroundColor: Color.main.red,
    width: 60,
    height: 60,
    borderRadius: 100,
    alignSelf: 'center',
  },
};
