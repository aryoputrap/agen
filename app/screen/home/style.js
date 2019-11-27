import {Dimensions} from 'react-native';
import Color from '../../config/color';

const {width, height} = Dimensions.get('window');
export default {
  headerTitleStyle: {
    fontSize: 10,
    paddingLeft: 0,
    marginLeft: 0,
  },
  BodyContenAgen: {
    flexDirection: 'column',
    paddingLeft: 10,
    paddingTop: 5,
  },
  TextBold: {
    color: '#FFFF',
    fontWeight: 'bold',
  },
  TextThin: {
    color: '#FFFF',
    fontSize: 12,
  },
  Saldo: {
    fontSize: 20,
    color: Color.main.white,
    fontWeight: 'bold',
    justifyContent: 'flex-end',
    padding: 10,
    // Left: width + 10,
  },
  LineFitur: {
    marginTop: 5,
    backgroundColor: Color.main.white,
    width: width * 0.85,
    height: height * 0.002,
  },
  LineFitur2: {
    marginTop: 20,
    backgroundColor: 'gray',
    width: width * 0.9,
    height: height * 0.0015,
    alignSelf: 'center',
  },
  BodyFiturMain: {
    backgroundColor: Color.main.primary,
    height: Dimensions.get('window').height * 0.3,
    width: width * 0.93,
    alignSelf: 'center',
    borderRadius: 10,
  },
  BodyFitur: {
    backgroundColor: Color.main.secondary,
    width: width * 0.93,
    height: Dimensions.get('window').height * 0.23,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    top: 0,
  },
  ButtonFitur: {
    top: 10,
    justifyContent: 'center',
  },
  ImageFitur: {
    resizeMode: 'stretch',
    width: width * 0.075,
    height: height * 0.045,
    alignSelf: 'center',
    alignContent: 'center',
  },
  ImageFiturInfo: {
    resizeMode: 'stretch',
    width: width * 0.075,
    height: height * 0.04,
    alignSelf: 'center',
    alignContent: 'center',
  },
  TextFitur: {
    color: '#FFFF',
    fontSize: 24 / 3,
    fontWeight: 'bold',
    top: 6,
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    fontFamily: 'Montserrat-Regular',
  },
  ImageFitur2: {
    resizeMode: 'stretch',
    width: width * 0.16,
    height: height * 0.08,
    paddingTop: 5,
  },
  TexttFitur2: {
    top: 5,
    fontSize: 8,
    alignSelf: 'center',
    fontFamily: 'Montserrat-Reguler',
  },
  scrollHorizon: {
    top: 10,
    marginHorizontal: -10,
    paddingHorizontal: 0,
  },
  Banner: {
    height: height * 0.187,
    width: width * 0.9,
    resizeMode: 'stretch',
    borderRadius: 5,
  },
  promoContainer: {
    height: height * 0.188,
    width: width * 0.9,
    marginLeft: 10,
    borderWidth: 0.5,
    borderColor: '#dddddd',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    justifyContent: 'center',
  },
  //   footerButton: {
  //     paddingVertical: 5,
  //     backgroundColor: Colors.app.mainButton,
  //   },
};
