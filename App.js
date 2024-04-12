import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import TabNavigation from './src/navigation/TabNavigation';
import StackNavigation from './src/navigation/StackNavigation';
import MainNavigation from './src/navigation/MainNavigation';
import store from './src/redux/store';

const App = () => (
  <Provider store={store}>
    <MainNavigation />
  </Provider>



);

export default App;
