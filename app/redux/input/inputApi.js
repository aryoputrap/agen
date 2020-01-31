import {apicom} from '../_bootredux/bootApi';
import AsyncStorage from '@react-native-community/async-storage';

//UNTUK FLAG 3 DAN FLAG 6
export const Inputflag1 = payload => apicom.post('/akusisi', payload);
export const Inputflag3 = payload => apicom.post('/aktivasi', payload);
export const Inputflag6 = payload => apicom.post('/aktivasi', payload);

export const storetoken = async token => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (error) {
    console.log('AsyncStorage error during token store:', error);
  }
};
