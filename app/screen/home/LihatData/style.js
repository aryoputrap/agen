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
    borderRadius: 1,
    borderColor: Color.main.greyLine,
    elevation: 2,
    flexDirection: 'row',
  },
  dropdownStyle: {
    justifyContent: 'center',
    marginTop: 5,
    width: width * 0.85,
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
