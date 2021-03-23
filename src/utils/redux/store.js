// import {createStore, applyMiddleware} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import PromiseMiddleware from 'redux-promise-middleware';
import reducers from './reducers/index';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authReducer'],
};

const logger = createLogger();
const enchancer = applyMiddleware(PromiseMiddleware, logger);

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, enchancer);

export default store;
