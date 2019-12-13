import {Dimensions} from 'react-native';
import Color from '../../config/color';

const {width, height} = Dimensions.get('window');
export default {
  headerTitleStyle: {
    fontSize: 10,
    paddingLeft: 0,
    marginLeft: 0,
  },
  logoTokopandai: {
    resizeMode: 'stretch',
    width: width * 0.35,
    height: height * 0.04,
    margin: 11,
  },
  header: {
    flexDirection: 'row',
    headerBodyFitur: {
      flexDirection: 'column',
      padding: 10,
    },
  },
  tanggal: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    paddingLeft: 50,
    marginBottom: 10,
    textTanggal: {
      fontSize: 10,
      color: Color.main.blueAkun,
      fontFamily: 'Montserrat-Bold',
    },
    textHeader: {
      fontSize: 10,
      fontFamily: 'Montserrat-Medium',
      alignSelf: 'flex-end',
    },
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
  ViewLokasi: {
    top: 1,
    justifyContent: 'flex-start',
  },
  Saldo: {
    fontSize: 20,
    color: Color.main.white,
    fontWeight: 'bold',
    justifyContent: 'flex-end',
    padding: 15,
    marginLeft: width * 0.08,
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
    height: height * 0.3,
    width: width * 0.93,
    alignSelf: 'center',
    borderRadius: 10,
  },
  BodyFiturMain2: {
    backgroundColor: Color.main.blueAkun,
    width: width * 0.93,
    height: height * 0.23,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    top: 0,
  },
  BodyFiturSecondary: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
  },
  ButtonFitur: {
    top: 10,
    justifyContent: 'center',
  },
  BodyMenu: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
    top: 10,
    BodyMenu2: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      top: 10,
    },
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
    marginTop: 5,
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
    borderWidth: 0.1,
    borderColor: '#dddddd',
    borderRadius: 8,
    elevation: 1,
    justifyContent: 'space-between',
    marginLeft: 5,
  },
};
