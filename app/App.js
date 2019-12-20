import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
// import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AppNavigator from './navigation';
// import Bootstrap from './bootstrap/bootstrap';
// import BootstrapNavigation from './bootstrap/bootstrapNavigation'
import {store, persistor} from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
