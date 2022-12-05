/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import Header from '@components/header';
import Bottom from '@components/bottom';
import MainPage from '@pages/main';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      {/* <Header /> */}
      <MainPage />
      {/* <Bottom /> */}
    </NavigationContainer>
  );
};

export default App;
