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
import {SafeAreaView} from 'react-native';

import Header from '@components/header';
import Bottom from '@components/bottom';
import MainPage from '@pages/main';

const App = () => {
  return (
    <SafeAreaView>
      <Header />
      <MainPage />
      <Bottom />
    </SafeAreaView>
  );
};

export default App;
