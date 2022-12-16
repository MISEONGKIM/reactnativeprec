import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
// import {Provider as StoreProvider} from 'react-redux';
import {RootScreen} from '@navigation/screens/root_screens';
import store from '@redux/store';

const App = () => {
  return (
    // <StoreProvider store={store}>
    <PaperProvider>
      <RootScreen />
    </PaperProvider>
    // </StoreProvider>
  );
};

export default App;
