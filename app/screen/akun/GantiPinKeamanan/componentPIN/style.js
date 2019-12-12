import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

export const codePinStyles = StyleSheet.create({
  container: {
    height: 170,
    width: width - 30,
    backgroundColor: '#FFF',
    alignContent: 'center',
    alignItems: 'center',
  },
  containerPin: {
    width: width * 0.8,
    height: height * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
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
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },
  text: {
    right: 145,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  error: {
    textAlign: 'center',
    color: 'red',
    paddingTop: 5,
  },
});
