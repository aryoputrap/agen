import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export default {
  headerTitleStyle: {
    fontSize: 10,
    paddingLeft: 0,
    marginLeft: 0,
  },
  LineFitur: {
    marginTop: 5,
    backgroundColor: 'gray',
    width: width * 0.85,
    height: height * 0.002,
  },
  LineFitur2: {
    marginTop: 15,
    backgroundColor: 'gray',
    width: width * 0.9,
    height: height * 0.002,
    alignSelf: 'center',
  },
  BodyFiturMain: {
    backgroundColor: 'blue',
    height: height * 0.3,
    width: width * 0.93,
    alignSelf: 'center',
    borderRadius: 10,
  },
  BodyFitur: {
    backgroundColor: 'orange',
    width: width * 0.93,
    height: height * 0.23,
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
    fontSize: 14,
    fontWeight: 'bold',
    top: 6,
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  ImageFitur2: {
    resizeMode: 'stretch',
    width: width * 0.16,
    height: height * 0.08,
    paddingTop: 5,
  },
  TexttFitur2: {
    top: 5,
    fontSize: 12.5,
    alignSelf: 'center',
  },
  scrollHorizon: {
    top: 10,
    marginHorizontal: -10,
    paddingHorizontal: 0,
  },
  promoContainer: {
    height: height * 0.2,
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
  },
  //   footerButton: {
  //     paddingVertical: 5,
  //     backgroundColor: Colors.app.mainButton,
  //   },
};
