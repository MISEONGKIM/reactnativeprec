import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
// import {Provider as StoreProvider} from 'react-redux';
// import store from '@redux/store';
import {RootStack} from '@navigation/navigator/stack/root_stack';

const App = () => {
  return (
    // <StoreProvider store={store}>
    <PaperProvider>
      <RootStack />
    </PaperProvider>
    // </StoreProvider>
  );
};

export default App;
