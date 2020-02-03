import React from 'react';
import {Provider} from 'react-redux';
import {YellowBox} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
// import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AppNavigator from './navigation';
import bootSagas from './redux/_bootredux/bootSagas';
// import Bootstrap from './bootstrap/bootstrap';
// import BootstrapNavigation from './bootstrap/bootstrapNavigation'
import {sagaMiddleware, store, persistor} from './config/store_manage/store';

sagaMiddleware.run(bootSagas);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};
YellowBox.ignoreWarnings(['Warning']);
export default App;
// class App extends Component {
//   onAuthStateChanged(user) {
//     // setLoggedIn(!!user);
//     store.dispatch({type: 'SET_LOGGEDIN_STATUS', status: !!user});
//   }

//   render() {
//     return (
//       <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//           <AppNavigator />
//         </PersistGate>
//       </Provider>
//     );
//   }
// }

// export default App;
