import {Dimensions, StyleSheet} from 'react-native';
// import Color from '../../../config/color';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    width: width * 0.9,
    height: height,
    padding: 10,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  headericon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonheader: {
    justifyContent: 'space-between',
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 15,
  },
  headerTitleStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  headerStyle: {
    height: height * 0.08,
  },
  errorMassage: {
    color: 'red',
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 13,
    marginBottom: 15,
  },
});
