// /* eslint-disable no-alert */
// /* eslint-disable react-native/no-inline-styles */
// import Icon from 'react-native-vector-icons/Ionicons';
// import React, {useEffect, useRef, useState} from 'react';
// import {SafeAreaView, StatusBar, Text} from 'react-native';
// import ReactNativePinView from 'react-native-pin-view';
// import decode from 'jwt-decode';
// import axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';
// const App = () => {
//   const pinView = useRef(null);
//   const [showRemoveButton, setShowRemoveButton] = useState(false);
//   const [enteredPin, setEnteredPin] = useState('');
//   const [showCompletedButton, setShowCompletedButton] = useState(false);
//   useEffect(() => {
//     const Transfer = async () => {
//       const tokenx = await AsyncStorage.getItem('token');
//       const iduser = await decode(tokenx);
//       const id = iduser.body[0];
//       const vaagent = '1010001169';
//       const {userUpdate} = this.state;
//       const user = {
//         id: id,
//         va_agent: vaagent,
//         va_toko: userUpdate.vatoko, //dari inputan
//         pin: userUpdate.pin,
//         tagihan: [
//           {fmcg: userUpdate.cekfmcg},
//           {bayar_nanti: userUpdate.cekbayarnanti},
//           {ppob: userUpdate.cekppob},
//           {lainnya: userUpdate.ceklain},
//         ],
//       };
//       console.log(user);
//       const header = {
//         Authorization: 'Bearer ' + tokenx,
//         'Content-Type': 'application/json',
//         'x-api-key':
//           '$2a$10$QNB/3KKnXvzSRQMd/stp1eDEHbtZHlAaKfeTKKJ9R5.OtUnEgnrA6',
//       };
//       axios({
//         method: 'POST',
//         url: 'http://support.tokopandai.id:3003/Api/isiSaldo/tagihan',
//         headers: header,
//         data: user,
//       })
//         .then(response => {
//           this.response = response.data;
//           this.dropDownAlertRef.alertWithType(
//             'success',
//             'Data Berhasil Masuk !',
//             response.data.message,
//           );
//           console.log(response);
//           this.onSuccessUpdate();
//         })
//         .catch(error => {
//           console.log(error.response.data.message);
//           this.dropDownAlertRef.alertWithType(
//             'error',
//             'Mohon diperiksa kembali !',
//             error.response.data.message,
//           );
//         });
//     };
//     if (enteredPin.length > 0) {
//       setShowRemoveButton(true);
//     } else {
//       setShowRemoveButton(false);
//     }
//     if (enteredPin.length === 6) {
//       setShowCompletedButton(true);
//     } else {
//       setShowCompletedButton(false);
//     }
//   }, [enteredPin]);

//   return (
//     <>
//       <StatusBar barStyle="light-content" />
//       <SafeAreaView
//         style={{
//           flex: 1,
//           backgroundColor: '#008CC9',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <Text
//           style={{
//             paddingTop: 10,
//             paddingBottom: 48,
//             color: '#FFF',
//             fontSize: 48,
//             textAlign: 'center',
//           }}>
//           MASUKAN PIN
//         </Text>
//         <ReactNativePinView
//           inputSize={40}
//           ref={pinView}
//           pinLength={6}
//           buttonSize={60}
//           onValueChange={value => setEnteredPin(value)}
//           buttonAreaStyle={{
//             marginTop: 24,
//           }}
//           inputAreaStyle={{
//             marginBottom: 24,
//           }}
//           inputViewEmptyStyle={{
//             backgroundColor: 'transparent',
//             borderWidth: 1,
//             borderColor: '#FFF',
//           }}
//           inputViewFilledStyle={{
//             backgroundColor: '#FFF',
//           }}
//           buttonViewStyle={{
//             borderWidth: 1,
//             borderColor: '#FFF',
//           }}
//           buttonTextStyle={{
//             color: '#FFF',
//           }}
//           onButtonPress={key => {
//             if (key === 'custom_left') {
//               pinView.current.clear();
//             }
//             if (key === 'custom_right') {
//               // alert('Entered Pin: ' + enteredPin);
//               //   pinView.current.
//             }
//             if (key === 'three') {
//               alert("You can't use 3");
//             }
//           }}
//           customLeftButton={
//             showRemoveButton ? (
//               <Icon name={'ios-backspace'} size={36} color={'#FFF'} />
//             ) : (
//               undefined
//             )
//           }
//           customRightButton={
//             showCompletedButton ? (
//               <Icon
//                 name={'ios-checkmark-circle-outline'}
//                 size={70}
//                 color={'#FFF'}
//               />
//             ) : (
//               undefined
//             )
//           }
//         />
//       </SafeAreaView>
//     </>
//   );
// };
// export default App;
