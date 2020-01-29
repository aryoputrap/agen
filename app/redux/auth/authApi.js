import {apiauth} from '../_bootredux/bootApi';
import AsyncStorage from '@react-native-community/async-storage';

export const loginApi = payload => apiauth.post('/login', payload);
export const logoutApi = payload => apiauth.post('/logout', payload);

export const storetoken = async token => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (error) {
    console.log('AsyncStorage error during token store:', error);
  }
};
