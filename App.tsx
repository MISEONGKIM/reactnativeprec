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

import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {appScreens, Stack} from '@navigation';

const App = () => {
  return (
    // <SafeAreaView>
    <NavigationContainer>
      <Stack screens={appScreens} />
    </NavigationContainer>
    // </SafeAreaView>
  );
};

export default App;
