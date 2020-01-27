import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import createEncryptor from 'redux-persist-transform-encrypt';
import {createBlacklistFilter} from 'redux-persist-transform-filter';

const encryptor = createEncryptor({
  secretKey: 'tokopandai-agent-aryo-super-secret-key',
  onError(error) {
    console.error(`createEncryptor error ${error}`);
  },
});

const saveAuthSubsetBlacklistFilter = createBlacklistFilter(['auth']);

const PERSIST = {
  active: true,
  reducerVersion: '1.0',
  storeConfig: {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['session'],
    transforms: [saveAuthSubsetBlacklistFilter, encryptor],
    stateReconciler: autoMergeLevel2,
  },
};

export default PERSIST;
