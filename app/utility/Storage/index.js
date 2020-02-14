// import {AsyncStorage} from '@react-native-community/async-storage';

// class LocalDb {
//   static async saveRememberMe(remember) {
//     try {
//       await AsyncStorage.setItem('remember', remember);
//       console.warn('Saved ' + remember);
//     } catch (error) {
//       console.warn(error.message);
//     }
//   }

//   static async saveProfile(data) {
//     try {
//       await AsyncStorage.setItem('profile', JSON.stringify(data));
//     } catch (error) {
//       // Error retrieving data
//       console.warn(error.message);
//     }
//   }

//   static async setLaunchType() {
//     try {
//       await AsyncStorage.setItem('lauchType', 'next');
//     } catch (error) {
//       // Error retrieving data
//       console.log(error.message);
//     }
//   }

//   static async getUserProfile() {
//     let item = {};
//     try {
//       item = (await AsyncStorage.getItem('profile')) || null;
//       const userProfile = JSON.parse(item);
//       return userProfile;
//     } catch (error) {
//       console.warn(error.message);
//     }
//     return null;
//   }

//   static async getUser() {
//     let item = await AsyncStorage.getItem('token');
//     return item;
//   }

//   static async saveIsProfilePublic(isPublic) {
//     try {
//       await AsyncStorage.setItem('isPublic', isPublic);
//     } catch (error) {
//       console.warn(error.message);
//     }
//   }
// }

// export default LocalDb;
