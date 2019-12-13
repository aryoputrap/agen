import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

export const codePinStyles = StyleSheet.create({
  container: {
    height: height * 0.01,
    width: width * 0.8,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  containerPin: {
    width: width * 0.8,
    height: height * 0.07,
    flexDirection: 'row',
    // justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 5,
  },
  pin: {
    borderColor: '#008CC9',
    borderBottomWidth: 2,
    backgroundColor: 'white',
    // tintColor: '#008CC9',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    flex: 1,
    // marginLeft: 2,
    // marginRight: 2,
    alignSelf: 'center',
    borderRadius: 5,
    shadowColor: 'red',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },
  error: {
    textAlign: 'center',
    color: 'red',
    paddingTop: 5,
  },
});
