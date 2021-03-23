import React, { useContext } from 'react';
// import {MainNavigation} from './src/navigation';
import Navigation from './src/Navigation'
import { Provider } from 'react-redux';
import store from './src/utils/redux/store'
import { NavigationContainer } from '@react-navigation/native';

// // Redux-persist
import { PersistGate } from 'redux-persist/es/integration/react';
import { persistStore } from 'redux-persist';
const persistedStore = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore} loading={null}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

