import {createStore, combineReducers} from 'redux';
// import logger from 'redux-logger';
// import promise from 'redux-promise-middleware';
// import {persistStore} from 'redux-persist';

import authReducers from './reducer/autreducer';
// import inputReducers from './reducer/inputreducer';

// this global states
const reducers = combineReducers({
  authReducers,
});

export const store = createStore(reducers);

// export const persistor = persistStore(store);
