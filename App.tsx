import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
// import {Provider as StoreProvider} from 'react-redux';
// import store from '@redux/store';
import {RootStack} from '@navigation/navigator/stack/root_stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
const _GestureHandlerRootView = styled(GestureHandlerRootView)`
  flex: 1;
`;
const App = () => {
  return (
    // <StoreProvider store={store}>
    <_GestureHandlerRootView>
      <PaperProvider>
        <RootStack />
      </PaperProvider>
    </_GestureHandlerRootView>
    // </StoreProvider>
  );
};

export default App;
